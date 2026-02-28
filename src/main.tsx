import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { I18nProvider } from "./app/i18n";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nProvider>
);