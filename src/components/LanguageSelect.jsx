import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";
import theme from "../theme.js";

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
            position="absolute"
            top="10px"
            right="10px"
            display="inline-flex"
            alignItems="center"
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
                    elevation: 0,
                    sx: {
                        borderRadius: "10px",
                        backgroundColor: theme.palette.background.dark,
                        overflow: "visible",
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
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
                MenuListProps={{
                    style: {
                        "& .Mui-selected": {
                            backgroundColor: theme.palette.background.dark,
                        },
                    },
                }}
            >
                <MenuItem
                    value="en"
                    selected={selectedLanguage === "en"}
                    onClick={() => handleChangeLanguage("en")}
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
