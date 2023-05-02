import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignInSide from "./pages/signin/";
import Dashboard from "./pages/dashboard";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import PrivateRouter from "./components/route/PrivateRoute";
import OtpScreen from "./components/atoms/OTP";
import WelcomeLayout from "./components/layouts/WelcomeLayout";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

Amplify.configure(awsconfig);

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#000000",
      },
      tertiary: {
        lighter: "#bdbdbd",
        light: "#828282",
        main: "#4f4f4f",
        dark: "#333333",
        darker: "#252525",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
