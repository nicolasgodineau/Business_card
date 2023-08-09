import React from "react";
import ReactDOM from "react-dom/client";

import theme from "../src/theme.js";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </ThemeProvider>
    </React.StrictMode>
);
