import { Auth } from "aws-amplify";

// contexts/auth.js

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

interface AuthData {
  token: string;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  //@ts-ignore
  async function signIn({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      console.log("this is user", user);
      if (user?.attributes?.email_verified) {
        navigate("/dashboard");
      }
    } catch (e) {
      console.log("this is error", e);
      var newError = new Error("User is not confirmed.");
      if (e.message === newError.message) {
        navigate("/confirm-user");
      }
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error.response.data);
    }
  }

  //@ts-ignore
  async function signUp({ username, password, email, phone_number }) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone_number, // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      //if(user)
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
