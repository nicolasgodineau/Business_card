import React, { useState } from "react";
import theme from "../theme.js";

import { IconButton, Menu, MenuItem, Box } from "@mui/material";

import FR from "../img/Icons/FR.png";
import EN from "../img/Icons/EN.png";

export default function LanguageSelect({ onChangeLanguage }) {
    const [selectedLanguage, setSelectedLanguage] = useState("en"); // Pour l'affichage du drapeau en fonction de la langue
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChangeLanguage = (language) => {
        onChangeLanguage(language); // Pour le changement de langue
        setSelectedLanguage(language); // Pour le changement de drapeau
        handleClose();
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            component="div"
            sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
            }}
        >
            <IconButton
                size="small"
                aria-label="change language"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <img
                    src={selectedLanguage === "en" ? EN : FR}
                    alt={
                        selectedLanguage === "en"
                            ? "English Flag"
                            : "French Flag"
                    }
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    elevation: 3,
                    sx: {
                        borderRadius: 3,
                        backdropFilter: "blur(20px)",
                        backgroundColor: "#ffffff2e",
                        color: theme.palette.text.primary,
                        boxShadow: 5,
                        padding: 1,
                        overflow: "visible",
                        "& .Mui-selected": {
                            borderRadius: 2,
                            backgroundColor: "rgba(0, 0, 0, 0.07)",
                            textDecoration: "underline",
                        },
                        "& .Mui-selected:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.07)",
                            borderRadius: 2,
                        },
                        "& .MuiMenu-list": {
                            borderRadius: 2,
                            padding: 0,
                        },
                        "& .MuiMenuItem-root:hover": {
                            borderRadius: 2,
                            backgroundColor: "transparent;",
                            textDecoration: "underline",
                        },
                    },
                }}
                transformOrigin={{
                    horizontal: "right",
                    vertical: "top",
                }}
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom",
                }}
            >
                <MenuItem
                    value="en"
                    selected={selectedLanguage === "en"}
                    onClick={() => handleChangeLanguage("en")}
                    sx={{
                        fontWeight: "bolder",
                    }}
                >
                    <img
                        src={EN}
                        aria-label="english language"
                        alt="English Flag"
                        style={{
                            marginRight: "8px",
                            width: "20px",
                            height: "20px",
                        }}
                    />
                    English
                </MenuItem>
                <MenuItem
                    value="fr"
                    selected={selectedLanguage === "fr"}
                    onClick={() => handleChangeLanguage("fr")}
                    sx={{
                        fontWeight: "bolder",
                        ":hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    <img
                        src={FR}
                        aria-label="french language"
                        alt="French Flag"
                        style={{
                            marginRight: "8px",
                            width: "20px",
                            height: "20px",
                        }}
                    />
                    Français
                </MenuItem>
            </Menu>
        </Box>
    );
}
