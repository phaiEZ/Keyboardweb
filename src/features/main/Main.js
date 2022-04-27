import React from "react";
import KeySimulator from "./../keySimulator/KeySimulator";
import ThemeProvider from "./../themeProvider/ThemeProvider";

const Main = () => (
  <ThemeProvider>
    <KeySimulator />
  </ThemeProvider>
);

export default Main;
