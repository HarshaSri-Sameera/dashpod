import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import SignInSide from "./pages/signin";
import Dashboard from "./pages/dashboard";
import appSyncConfig from "./aws-exports";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/" element={<SignInSide />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
