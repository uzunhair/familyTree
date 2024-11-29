import React from "react";

import "./style.scss";
import {createRoot} from "react-dom/client";

import "./assets/styles/simplebar.css";
import "./assets/styles/mobile-menu.css";
import "./assets/styles/tippy.css";
import "./assets/styles/bootstrap-icons.min.css";
import "./assets/styles/side-nav.css";
import "./assets/styles/app.css";
import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
