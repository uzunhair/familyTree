import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import AddPerson from "src/pages/AddPerson";
import { AllPersons } from "src/pages/AllPersons";
import EditPerson from "src/pages/EditPerson";
import { ForceGraph } from "src/pages/ForceGraph";
import { Notion } from "src/pages/Notion";
import { NotionEdit } from "src/pages/NotionEdit";
import { links } from "src/shared/lib/helpers/links";
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
        <Route path={links.editPerson(":id")} element={<EditPerson />} />
        <Route path={links.allPersons} element={<AllPersons />} />
        <Route path={links.forceGraph} element={<ForceGraph />} />
        <Route path={links.notion} element={<Notion />} />
        <Route path={links.notionEdit(":id")} element={<NotionEdit />} />
        <Route path="/test" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
