import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignInSide from "./pages/signin/";
import Dashboard from "./pages/dashboard";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import PrivateRouter from "./components/route/PrivateRoute";
import OtpScreen from "./components/atoms/OTP";
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
      <Route path="/" element={<SignInSide />} />
      <Route path="/confirm-user" element={<OtpScreen />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
