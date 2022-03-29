import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";

import { MediaQueryProvider } from "./responsive/MediaQueryProvider";

ReactDOM.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <Header />
      <App />
    </MediaQueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
