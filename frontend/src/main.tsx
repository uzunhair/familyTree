import React from "react";
import {createRoot} from "react-dom/client";
import {Route, Routes, HashRouter} from "react-router-dom";
import EditPerson from "src/EditPerson";
import AddPerson from "src/pages/AddPerson";
import {AllPersons} from "src/pages/AllPersons";
import {links} from "src/shared/lib/helpers/links";
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
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<AddPerson />} />
        <Route path={links.addPerson} element={<AddPerson />} />
        <Route path={links.allPersons} element={<AllPersons />} />
        <Route path="/test" element={<App/>} />
        <Route path="edit-person" element={<EditPerson />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
