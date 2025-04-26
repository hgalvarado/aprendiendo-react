import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

const root = createRoot(document.getElementById("root"));

//Los nombres de los componentes deben empezar con mayúscula en formato PascalCase

root.render(
  <App/>
);

