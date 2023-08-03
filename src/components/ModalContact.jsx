import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Confetti from "react-dom-confetti";
import { useTranslation } from "react-i18next";
import theme from "../theme.js";
import {
    Button,
    Box,
    FormControl,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";

export default function ContactModal({ toggleContent, dimensions }) {
    const [isConfettiActive, setConfettiActive] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [open, setOpen] = useState(false);

    const { t } = useTranslation();

    const handleClick = () => {
        toggleContent();
    };

    const validate = (values) => {
        const errors = {};
        const requiredFields = ["name", "email", "message"];
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = "Required";
            }
        });
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({ validate });

    const onSubmit = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        fetch(
            "https://public.herotofu.com/v1/9afc0bf0-2061-11ee-8025-97a9fb2f29da",
            {
                method: "POST",
                body: formData,
            }
        ).catch((error) => {
            console.log("error:", error);
        });
        setIsFormSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis
        reset(); // Réinitialise les valeurs du formulaire à leurs valeurs par défaut
        setConfettiActive(true);

        // Réinitialiser l'animation après une courte durée
        setTimeout(() => {
            setConfettiActive(false);
            toggleContent(); // Fermer la modal
        }, 2000); // Durée en millisecondes de l'animation de confettis puis ferme la modale
    };

    return (
        <FormControl
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            {isFormSubmitted ? (
                <Typography
                    variant="body1"
                    color={theme.palette.accent}
                    sx={{ margin: "auto 0" }}
                >
                    {t("personalInformations.sendSucces")}
                </Typography>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        gap: 2,
                        [theme.breakpoints.down("md")]: {
                            // Styles pour les écrans de largeur maximale "md" (1090px)
                            height: "100%",
                        },
                    }}
                >
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: t("personalInformations.required") }}
                        render={({ field }) => (
                            <TextField
                                label={t("personalInformations.fromName")}
                                variant="filled"
                                fullWidth
                                margin="normal"
                                error={Boolean(errors.name)}
                                helperText={errors.name && errors.name.message}
                                {...field}
                                sx={{
                                    backgroundColor: "#2a2a2a",
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: t("personalInformations.required"),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t(
                                    "personalInformations.invalideEmail"
                                ),
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                label="Email"
                                variant="filled"
                                fullWidth
                                margin="normal"
                                error={Boolean(errors.email)}
                                helperText={
                                    errors.email && errors.email.message
                                }
                                {...field}
                                sx={{
                                    backgroundColor: "#2a2a2a",
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{ required: t("personalInformations.required") }}
                        render={({ field }) => (
                            <TextField
                                label="Message"
                                variant="filled"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                error={Boolean(errors.message)}
                                helperText={
                                    errors.message && errors.message.message
                                }
                                {...field}
                                sx={{
                                    backgroundColor: "#2a2a2a",
                                }}
                            />
                        )}
                    />
                </Box>
            )}
            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: 1,
                }}
            >
                <Button
                    type="submit"
                    sx={{
                        padding: "12px 44px",
                        borderRadius: 32,
                        backgroundColor: theme.palette.accent,
                        border: `2px solid ${theme.palette.accent}`,
                        color: "black",
                        ":hover": {
                            cursor: "pointer",
                            color: theme.palette.accent,
                            backgroundColor: theme.palette.background.dark,
                        },
                    }}
                    variant="text"
                >
                    {t("personalInformations.send")}
                </Button>{" "}
                <Confetti active={isConfettiActive} />
                <IconButton
                    sx={{
                        padding: "12px 44px",
                        borderRadius: 32,
                        backgroundColor: theme.palette.danger,
                        border: `2px solid ${theme.palette.danger}`,
                        color: "black",
                        ":hover": {
                            cursor: "pointer",
                            color: theme.palette.danger,
                            backgroundColor: theme.palette.background.dark,
                        },
                    }}
                    onClick={handleClick}
                    variant="text"
                >
                    {/* <CloseIcon /> */}
                </IconButton>
            </Box>
        </FormControl>
    );
}
