import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { MediaQueryProvider } from "./responsive/MediaQueryProvider";

ReactDOM.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <App />
    </MediaQueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
