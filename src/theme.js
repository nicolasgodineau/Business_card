import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "Lato, sans-serif", // Police par défaut
        fontWeightRegular: 300,
    },
    spacing: 8,
    palette: {
        background: {
            dark: "rgba(0, 0, 0, 0.7)",
            light: "rgba(0, 0, 0, 0.5)",
        },

        text: {
            primary: "rgba(0, 0, 0, 0.7)",
            light: "#ffffffde",
        },

        accent: "#28e98c",
        valid: "#83ff8573",
        validLight: "#83ff8524",
        danger: "#ff838373",
        dangerLight: "#ff838324",
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
