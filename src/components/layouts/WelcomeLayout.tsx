import React from "react";

interface LayoutType {
  children: React.ReactElement;
}
const WelcomeLayout = ({ children }: LayoutType) => {
  return <>{children}</>;
};

export default WelcomeLayout;
