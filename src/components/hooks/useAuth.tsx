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

  useEffect(() => {
    getCurrentSession();
  }, []);
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
      if (user?.attributes?.email_verified) {
        setUser(user.attributes);
        navigate("/dashboard");
      }
    } catch (e) {
      var newError = new Error("User is not confirmed.");
      if (e.message === newError.message) {
        navigate("/confirm-user");
      }
    }
  }

  async function resendConfirmationCode({ username }) {
    try {
      await Auth.resendSignUp(username);
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }
  async function getCurrentSession() {
    try {
      const userSession = await Auth.currentSession();
      if (userSession?.idToken?.payload?.email_verified) {
        setUser(userSession?.idToken?.payload);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error, "error in checking");
    }
  }

  async function confirmSignUp({ username, code }) {
    try {
      const confirmOtp = await Auth.confirmSignUp(username, code);
      if (confirmOtp && confirmOtp === "SUCCESS") {
        setUser({
          ...(user || {}),
          email_verified: true,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error confirming sign up", error);
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
      if (user && user?.username) {
        setUser({ ...user, username: user.username });
        navigate("/confirm-user");
      }
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
        confirmSignUp,
        getCurrentSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
