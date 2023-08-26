import React, { useState } from "react";
import translations from "../src/lang/translations.json";
import theme from "../src/theme.js";
import { Container, Avatar, Box, Typography, Button } from "@mui/material";
import nicolas from "../src/img/Nicolas.webp";
import webSiteIcon from "../src/img/globe.svg";
import cvIcon from "../src/img/cv.svg";
import githubIcon from "../src/img/github.svg";
import linkedinIcon from "../src/img/linkedin.svg";
import instagramIcon from "../src/img/instagram.svg";
import LanguageSelect from "./components/LanguageSelect.jsx";

import ModalContact from "./components/ModalContact.jsx";

export default function App() {
    // Section: multi langues
    const [language, setLanguage] = useState("en"); // Langue par défaut
    const handleChangeLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };
    // Pour les traductions avec le fichier JSON
    const translation = translations[language];
    const defaultTranslations = translations["en"]; // Traductions par défaut (EN) sélection la donnée en EN si il n'y a pas en FR

    // Section: modal de contact
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleContent = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Section: Liens
    const Links = translations.links;
    const iconMappings = {
        cvIcon,
        webSiteIcon,
        githubIcon,
        linkedinIcon,
        instagramIcon,
    };

    // Section: Hover sur l'icon
    // le hover s'active au survol du link, mais l'effet se fait uniquement sur l'avatar, pas sur le texte
    const handleHover = (event) => {
        const avatar = event.currentTarget.querySelector(".avatar");
        if (avatar) {
            avatar.style.transform = "scale(1.2)";
        }
    };

    const handleLeave = (event) => {
        const avatar = event.currentTarget.querySelector(".avatar");
        if (avatar) {
            avatar.style.transform = "scale(1)";
        }
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
            disableGutters={true}
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                padding: 2,
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                borderRadius: 5,
                color: theme.palette.text.primary,
                boxShadow: 7,
                [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
                },
            }}
        >
            <LanguageSelect onChangeLanguage={handleChangeLanguage} />
            <Container
                component="section"
                maxWidth={false}
                disableGutters={true}
                sx={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    borderRadius: "50%",
                    boxShadow:
                        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0, 0, 0, 0);",
                    [theme.breakpoints.down("sm")]: {
                        maxWidth: "200px",
                        maxHeight: "200px",
                    },
                    [theme.breakpoints.down("xs")]: {
                        maxWidth: "150px",
                        maxHeight: "150px",
                    },
                }}
            >
                <img
                    src={nicolas}
                    alt="Nicolas Godineau"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </Container>
            <Container
                component="section"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: "column",
                        alignItems: "center",
                    },
                }}
            >
                <Typography
                    sx={{
                        fontSize: "clamp(1.5rem, 8vw, 2.5rem)",
                        letterSpacing: "1px",
                        fontWeight: "bold",
                        textAlign: "center",
                        lineHeight: "normal",
                    }}
                >
                    {translation.name || defaultTranslations.name}
                </Typography>
                <Box
                    component="h1"
                    sx={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        margin: 0,
                        [theme.breakpoints.down("xs")]: {
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 0,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "clamp(1rem, 5vw, 1.8rem)",
                            letterSpacing: "1px",
                            fontWeight: "bold",
                        }}
                    >
                        {translation.description.line1}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "clamp(1rem, 4vw, 1.3rem)",
                            fontWeight: "bold",
                        }}
                    >
                        {"&"}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "clamp(1rem, 4vw, 1.8rem)",
                            letterSpacing: "1px",
                            fontWeight: "bold",
                        }}
                    >
                        {translation.description.line2}
                    </Typography>
                </Box>
            </Container>
            <Typography
                sx={{
                    fontSize: "clamp(0.8rem, 4vw, 1rem)",
                    letterSpacing: "1px",
                    fontWeight: "bold",
                }}
            >
                {translation.city}
            </Typography>
            {!isModalOpen && (
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: theme.palette.background.dark,
                        color: theme.palette.text.light,
                        textTransform: "none",
                        fontSize: "clamp(1rem, 4vw, 1.5rem)",
                        letterSpacing: "1px",
                        ":hover": {
                            backgroundColor: theme.palette.background.light,
                        },
                    }}
                    onClick={toggleContent}
                >
                    {translation.callToAction}
                </Button>
            )}
            <Container
                component="section"
                maxWidth="sm"
                disableGutters={true}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    backdropFilter: "blur(20px)",
                    backgroundColor: "#ffffff2e",
                    borderRadius: 5,
                    boxShadow: isModalOpen ? 0 : 3,
                }}
            >
                {!isModalOpen ? (
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                            padding: 2,
                            [theme.breakpoints.down("sm")]: {
                                width: "auto",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            },
                        }}
                    >
                        {Links.map((link, index) => (
                            <Button
                                key={index}
                                href={link.href}
                                target="_blank"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1,
                                    color: theme.palette.text.primary,
                                    padding: 1,
                                    textDecoration: "none",
                                    ":hover": {
                                        textDecoration: "underline",
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "start",
                                        gap: 1,
                                        paddingX: 6,
                                    },
                                }}
                            >
                                <Avatar
                                    alt={link.lang?.[language]}
                                    className="avatar"
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        cursor: "pointer",
                                        [theme.breakpoints.down("xs")]: {
                                            width: 22,
                                            height: 22,
                                        },
                                        transition: "transform 0.3s ease",
                                    }}
                                    src={iconMappings[link.icon]}
                                />
                                <Typography
                                    sx={{
                                        fontSize: "clamp(0.8rem, 4vw, 1rem)",
                                        letterSpacing: "1px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {link.lang?.[language]}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                ) : (
                    <ModalContact
                        translations={translation}
                        toggleContent={toggleContent}
                    />
                )}
            </Container>
        </Container>
    );
}
