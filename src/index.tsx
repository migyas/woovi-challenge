import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("app"));
window.Buffer = window.Buffer || require("buffer").Buffer;

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
