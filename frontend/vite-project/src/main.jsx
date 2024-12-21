import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
//so fo the provide import i cant use "@"
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
