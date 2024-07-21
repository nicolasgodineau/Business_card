import React, { useState } from "react";
import { getTranslation } from "./translation.js";
import theme from "../src/theme.js";
import {
    Container,
    Avatar,
    styled,
    Box,
    Typography,
    List,
    ListItem,
    Link,
    Button,
    IconButton,
    TextField,
    useMediaQuery,
    CssBaseline,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Dropdown from "./components/Dropdown.jsx";
import nicolas from "../src/img/Nicolas.webp";
import webSiteIcon from "../src/img/globe.svg";
import cvIcon from "../src/img/cv.svg";
import githubIcon from "../src/img/github.svg";
import linkedinIcon from "../src/img/linkedin.svg";
import { ThemeProvider } from "@emotion/react";
import LanguageSelect from "./components/LanguageSelect.jsx";

export default function App() {
    // Section: multi langues
    const [language, setLanguage] = useState("en"); // Anglais est la langue par défaut
    const handleChangeLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };
    // Pour les traductions avec les fichiers JSON(s)
    const translation = getTranslation(language);
    const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

    // Section: modal de contact
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleButtonClick = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Section: formulaire de contact
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        text: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // Section: info bulle
    const CustomToolTip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            boxShadow: theme.shadows[1],
            fontSize: 16,
        },
    }));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Container
                    component="main"
                    disableGutters={false}
                    maxWidth="sm"
                    sx={{
                        display: "flex",
                        [theme.breakpoints.down("sm")]: {
                            width: "80svw",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    {/* Pour l'affichage de l'icon langue quand on est en mode COLUMN (- de 750px) */}
                    {isMobileScreen && (
                        <LanguageSelect
                            onChangeLanguage={handleChangeLanguage}
                        />
                    )}
                    <Avatar
                        component="aside"
                        alt="Nicolas"
                        variant="square"
                        src={nicolas}
                        sx={{
                            width: 300,
                            minWidth: 300,
                            height: 300,
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                            [theme.breakpoints.down("sm")]: {
                                width: "fit-content",
                                borderRadius: "0px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                borderBottomLeftRadius: "0px",
                            },
                        }}
                    />
                    <Box
                        component="section"
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.5rem",
                            padding: "1rem",
                            color: "white",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            backdropFilter: "blur(20px)",
                            backgroundColor: "#ffffff2e",
                            [theme.breakpoints.down("sm")]: {
                                width: "fit-content",
                                padding: "0",
                                borderTopRightRadius: "0",
                                borderBottomLeftRadius: "10px",
                            },
                        }}
                    >
                        {/* Pour l'affichage de l'icon langue quand on est en mode ROW (+ de 750px) */}
                        {!isMobileScreen && (
                            <LanguageSelect
                                onChangeLanguage={handleChangeLanguage}
                            />
                        )}
                        {/* Condition pour afficher la modal */}
                        {isModalOpen ? (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 3,
                                        minWidth: 300,
                                        padding: 1,
                                    }}
                                >
                                    <TextField
                                        name="name"
                                        label="Nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                        fullWidth
                                        size={
                                            isMobileScreen ? "small" : "medium"
                                        }
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        name="email"
                                        label="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        fullWidth
                                        size={
                                            isMobileScreen ? "small" : "medium"
                                        }
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 3,
                                        minWidth: 300,
                                        padding: 1,
                                    }}
                                >
                                    <TextField
                                        name="text"
                                        label="Texte"
                                        value={formData.text}
                                        onChange={handleChange}
                                        multiline
                                        rows={2}
                                        fullWidth
                                        color="input"
                                        size={
                                            isMobileScreen ? "small" : "medium"
                                        }
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: 3,
                                        minWidth: 300,
                                        padding: 1,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.7)",
                                            color: "white",
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            letterSpacing: "1px",
                                            ":hover": {
                                                backgroundColor:
                                                    "rgba(0, 0, 0, 0.5)",
                                            },
                                        }}
                                        onClick={handleCloseModal}
                                    >
                                        {translation.send}
                                    </Button>
                                </Box>
                            </form>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "space-evenly",
                                        gap: "0.5rem",
                                        color: "rgba(0, 0, 0, 0.7)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            letterSpacing: "2px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {translation.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            letterSpacing: "1px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {translation.job}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            letterSpacing: "1px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {translation.city}
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        color: "white",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        letterSpacing: "1px",
                                        ":hover": {
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.5)",
                                        },
                                    }}
                                    onClick={handleButtonClick}
                                >
                                    {translation.contact}
                                </Button>

                                <List sx={{ width: "100%", display: "flex" }}>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CustomToolTip
                                            title="Instagram(s)"
                                            placement="top-start"
                                        >
                                            <IconButton
                                                sx={{
                                                    padding: 0,
                                                    ":hover": {
                                                        backgroundColor:
                                                            "transparent",
                                                    },
                                                }}
                                            >
                                                <Dropdown />
                                            </IconButton>
                                        </CustomToolTip>
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CustomToolTip
                                            disableFocusListener
                                            title="Site web"
                                        >
                                            <Link
                                                href="https://nicolasgodineau.com/"
                                                target="_blank"
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: 28,
                                                        height: 28,
                                                        cursor: "pointer",
                                                    }}
                                                    src={webSiteIcon}
                                                />
                                            </Link>
                                        </CustomToolTip>
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CustomToolTip
                                            disableFocusListener
                                            title="Web CV"
                                        >
                                            <Link
                                                href="https://itsme.nicolasgodineau.com/"
                                                target="_blank"
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: 28,
                                                        height: 28,
                                                        cursor: "pointer",
                                                    }}
                                                    src={cvIcon}
                                                />
                                            </Link>
                                        </CustomToolTip>
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CustomToolTip
                                            disableFocusListener
                                            title="Github"
                                        >
                                            <Link
                                                href="https://github.com/nicolasgodineau"
                                                target="_blank"
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: 28,
                                                        height: 28,
                                                        cursor: "pointer",
                                                    }}
                                                    src={githubIcon}
                                                />
                                            </Link>
                                        </CustomToolTip>
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CustomToolTip
                                            disableFocusListener
                                            title="LinkedIn"
                                        >
                                            <Link
                                                href="https://www.linkedin.com/in/nicolasgodineau/"
                                                target="_blank"
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: 28,
                                                        height: 28,
                                                        cursor: "pointer",
                                                    }}
                                                    src={linkedinIcon}
                                                />
                                            </Link>
                                        </CustomToolTip>
                                    </ListItem>
                                </List>
                            </>
                        )}
                    </Box>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
