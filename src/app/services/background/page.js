"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import StarsIcon from "@mui/icons-material/Stars";
import GroupsIcon from "@mui/icons-material/Groups";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EliteClients from "@/components/EliteClients";


export default function About() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 6 }, maxWidth: "1200px", mx: "auto" }}>

            {/* 🌟 Modern Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    py: 8,
                    position: "relative",
                }}
                data-aos="fade-up"
            >

                {/* Background Glow */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "400px",
                        height: "400px",
                        background: "rgba(169,60,85,0.08)",
                        filter: "blur(95px)",
                        zIndex: -1,
                        borderRadius: "50%",
                    }}
                />

                {/* Main Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        background: "linear-gradient(90deg,#A93C55,#73293D)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 2,
                    }}
                >
                    Background <span style={{ color: "#A93C55" }}>Verification</span>
                </Typography>

                {/* Decorative Line + Heart */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 3 }}>
                    <Box sx={{ width: "60px", height: "2px", background: "#C7A17A" }} />
                    <Box
                        sx={{
                            mx: 2,
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            border: "2px solid #C7A17A",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "14px",
                            color: "#C7A17A",
                            fontFamily: "Playfair Display",
                        }}
                    >
                        ❤
                    </Box>
                    <Box sx={{ width: "60px", height: "2px", background: "#C7A17A" }} />
                </Box>

                {/* Short Subtitle */}
                <Typography
                    variant="h6"
                    sx={{
                        color: "text.secondary",
                        fontStyle: "italic",
                        letterSpacing: "1px",
                    }}
                >
                    Helping You Find the One Who Truly Belongs to You.
                </Typography>
            </Box>
        </Box>
    );
}
