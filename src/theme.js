import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "Lato, sans-serif", // Police par défaut
        fontWeightRegular: 300,
    },
    spacing: 8,
    palette: {
        primary: {
            main: "#999999",
        },
        background: {
            dark: "#1f1f1f",
            light: "#f9f9f9",
        },

        text: {
            primary: "#fff",
            secondary: "#999999",
            accent: "#28e98c",
        },

        accent: "#28e98c",
        danger: "#e92828c4",
    },
    breakpoints: {
        values: {
            xs: 450,
            sm: 750,
            md: 1090,
            lg: 1200,
        },
    },
});

export default theme;
