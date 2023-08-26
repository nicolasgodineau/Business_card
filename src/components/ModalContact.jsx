import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Confetti from "react-dom-confetti";
import theme from "../theme.js";
import { Button, Box, FormControl, TextField, Typography } from "@mui/material";

export default function ContactModal({ toggleContent, translations }) {
    const [isConfettiActive, setConfettiActive] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        toggleContent();
    };

    const validate = (values) => {
        const errors = {};
        const requiredFields = ["name", "email", "message"];
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = translations.formRequired;
            }
        });
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = translations.formInvalidEmail;
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
                minWidth: "80%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2,
                [theme.breakpoints.down("sm")]: {
                    width: "100%",
                },
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            {isFormSubmitted ? (
                <Typography
                    variant="body1"
                    sx={{
                        padding: 2,
                        color: theme.palette.valid,
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
                    }}
                >
                    {translations.formSendSucces}
                </Typography>
            ) : (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        {/*                         <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.primary,
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
                            }}
                        >
                            {translations.formH1}
                        </Typography> */}
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: translations.formRequired }}
                            render={({ field }) => (
                                <TextField
                                    label={translations.formName}
                                    fullWidth
                                    error={Boolean(errors.name)}
                                    helperText={
                                        errors.name && errors.name.message
                                    }
                                    {...field}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            backdropFilter: "blur(100px)",
                                            backgroundColor: "#ffffff2e",
                                            borderRadius: 5,
                                            border: "transparent",
                                            color: "black",
                                            fontWeight: "bolder",
                                        },
                                        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                            {
                                                border: "none",
                                            },
                                        "& .MuiInputLabel-root": {
                                            color: theme.palette.text.primary,
                                            fontWeight: "bolder",
                                        },
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: translations.formRequired,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: translations.formInvalidEmail,
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    label={translations.formEmail}
                                    fullWidth
                                    error={Boolean(errors.email)}
                                    helperText={
                                        errors.email && errors.email.message
                                    }
                                    {...field}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            backdropFilter: "blur(100px)",
                                            backgroundColor: "#ffffff2e",
                                            borderRadius: 5,
                                            border: "none",
                                            color: "black",
                                            fontWeight: "bolder",
                                        },
                                        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                            {
                                                border: "none",
                                            },
                                        "& .MuiInputLabel-root": {
                                            color: theme.palette.text.primary,
                                            fontWeight: "bolder",
                                        },
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            rules={{ required: translations.formRequired }}
                            render={({ field }) => (
                                <TextField
                                    label={translations.formText}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    error={Boolean(errors.message)}
                                    helperText={
                                        errors.message && errors.message.message
                                    }
                                    {...field}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            backdropFilter: "blur(100px)",
                                            backgroundColor: "#ffffff2e",
                                            borderRadius: 5,
                                            border: "none",
                                            color: "black",
                                            fontWeight: "bolder",
                                        },
                                        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                            {
                                                border: "none",
                                            },
                                        "& .MuiInputLabel-root": {
                                            color: theme.palette.text.primary,
                                            fontWeight: "bolder",
                                        },
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                            [theme.breakpoints.down("xs")]: {
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Button
                            type="submit"
                            sx={{
                                padding: "10px 50px",
                                border: `2px solid ${theme.palette.valid}`,
                                borderRadius: 5,
                                color: theme.palette.text.primary,
                                backgroundColor: theme.palette.validLight,
                                fontWeight: "bold",
                                ":hover": {
                                    cursor: "pointer",
                                    backgroundColor: theme.palette.valid,
                                    borderRadius: 5,
                                    boxShadow: 1,
                                },
                                [theme.breakpoints.down("xs")]: {
                                    width: "100%",
                                    padding: "5px 50px",
                                },
                            }}
                            variant="text"
                        >
                            {translations.formSubmit}
                        </Button>
                        <Confetti active={isConfettiActive} />
                        <Button
                            sx={{
                                padding: "10px 50px",
                                border: `2px solid ${theme.palette.danger}`,
                                borderRadius: 5,
                                color: theme.palette.text.primary,
                                backgroundColor: theme.palette.dangerLight,
                                fontWeight: "bold",
                                ":hover": {
                                    cursor: "pointer",
                                    backgroundColor: theme.palette.danger,
                                    borderRadius: 5,
                                    boxShadow: 1,
                                },
                                [theme.breakpoints.down("xs")]: {
                                    width: "100%",
                                    padding: "5px 50px",
                                },
                            }}
                            variant="text"
                            onClick={handleClick}
                        >
                            {translations.formClose}
                        </Button>
                    </Box>
                </>
            )}
        </FormControl>
    );
}
