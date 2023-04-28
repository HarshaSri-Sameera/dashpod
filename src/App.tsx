import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignInSide from "./pages/signin/";
import Dashboard from "./pages/dashboard";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import PrivateRouter from "./components/route/PrivateRoute";
import OtpScreen from "./components/atoms/OTP";
import WelcomeLayout from "./components/layouts/WelcomeLayout";
Amplify.configure(awsconfig);

function App() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />
      <Route
        path="/"
        element={
          <WelcomeLayout>
            <SignInSide />
          </WelcomeLayout>
        }
      />
      <Route
        path="/confirm-user"
        element={
          <WelcomeLayout>
            <OtpScreen />
          </WelcomeLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <WelcomeLayout>
            <SignUp />
          </WelcomeLayout>
        }
      />
    </Routes>
  );
}

export default App;
