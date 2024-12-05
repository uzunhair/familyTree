import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditPerson from "src/EditPerson";
import AddPerson from "src/pages/AddPerson";
import App from "./App";
import "./style.scss";
import "./assets/styles/simplebar.css";
import "./assets/styles/mobile-menu.css";
import "./assets/styles/tippy.css";
import "./assets/styles/bootstrap-icons.min.css";
import "./assets/styles/side-nav.css";
import "./assets/styles/app.css";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPerson />} />
        <Route path="add-person" element={<AddPerson />} />
        <Route path="/test" element={<App/>} />
        <Route path="edit-person" element={<EditPerson />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
