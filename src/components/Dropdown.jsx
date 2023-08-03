import React from "react";
import {
    Avatar,
    styled,
    Menu,
    MenuItem,
    IconButton,
    Link,
} from "@mui/material";
import instagramIcon from "../img/instagram.svg";

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            {...props}
        />
    ))(({ theme }) => ({
        "& .MuiPaper-root": {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            "& .MuiMenu-list": {
                padding: "4px 0",
                color: "white",
            },
        },
    }));

    return (
        <div>
            <IconButton
                aria-controls="dropdownContent"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ padding: 0 }}
            >
                <Avatar
                    className="infobulle"
                    data-infobulle="Instagram(s)"
                    sx={{ width: 28, height: 28 }}
                    src={instagramIcon}
                />
            </IconButton>
            <StyledMenu
                id="dropdownContent"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                placement="bottom-start"
                transition
            >
                <MenuItem onClick={handleClose}>
                    <Link
                        href="https://www.instagram.com/nicolasg_travel/"
                        underline="hover"
                        target="_blank"
                        color="white"
                        sx={{ textUnderlineOffset: "4px" }}
                    >
                        Landscapes
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        href="https://www.instagram.com/nicolasg_portraits/"
                        underline="hover"
                        target="_blank"
                        color="white"
                        sx={{ textUnderlineOffset: "4px" }}
                    >
                        Portraits
                    </Link>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
