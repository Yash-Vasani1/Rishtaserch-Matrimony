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
                    About <span style={{ color: "#A93C55" }}>Rishtaserch Matrimony</span>
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

            {/* ✨ Intro Text */}
            <Typography
                data-aos="fade-up"
                data-aos-delay="150"
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{
                    maxWidth: "850px",
                    mx: "auto",
                    fontSize: "1.2rem",
                    lineHeight: "1.9rem",
                    mb: 8,
                }}
            >
                Rishtaserch Matrimony is not just another matchmaking platform — it is a personalized
                marriage assistance ecosystem built on <strong>values, trust, and meaningful connections</strong>.
                Our priority is not speed — but compatibility, emotional balance, family values, and
                long-term happiness.
            </Typography>

            {/* 🎯 Mission Section */}
            <Paper
                elevation={4}
                data-aos="zoom-in"
                sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: 4,
                    mb: 8,
                    background: "linear-gradient(135deg, #FFFFFF 60%, rgba(169,60,85,0.08))",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Soft Side Accent */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "180px",
                        height: "180px",
                        background: "rgba(169,60,85,0.15)",
                        borderBottomLeftRadius: "100%",
                        filter: "blur(40px)",
                        zIndex: 0,
                    }}
                />

                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Playfair Display",
                        mb: 2,
                        fontWeight: 700,
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    Our Mission
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        fontSize: "1.15rem",
                        maxWidth: "750px",
                        mx: "auto",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    Our mission is to help individuals discover compatible partners through secure,
                    verified profiles, guided matchmaking support, cultural understanding and
                    family involvement — all while keeping the process respectful, dignified, and
                    emotionally meaningful.
                </Typography>
            </Paper>


            {/* 💎 Why Choose Us */}
            <Box data-aos="fade-up">
                <Typography
                    variant="h4"
                    sx={{ mb: 1, fontFamily: "Playfair Display" }}
                >
                    Why Choose Us?
                </Typography>

                <Box
                    sx={{
                        width: "90px",
                        height: "3px",
                        background: "#A93C55",
                        borderRadius: 2,
                        mb: 4,
                    }}
                />
            </Box>

            <Grid container spacing={3}>
                {[
                    { icon: <VerifiedIcon fontSize="large" />, text: "100% ID-verified profiles" },
                    { icon: <EmojiPeopleIcon fontSize="large" />, text: "Personal attention to each profile" },
                    { icon: <ManageAccountsIcon fontSize="large" />, text: "Free consultancy before registration" },
                    { icon: <FavoriteIcon fontSize="large" />, text: "Dedicated Relationship Manager" },
                    { icon: <StarsIcon fontSize="large" />, text: "Traditional Horoscope Matching" },
                    { icon: <GroupsIcon fontSize="large" />, text: "Special service for premium profiles" },
                ].map((item, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }} data-aos="fade-up" data-aos-delay={i * 90}>
                        <Paper
                            elevation={2}
                            sx={{
                                p: 3,
                                textAlign: "center",
                                borderRadius: 3,
                                transition: "0.3s",
                                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                            }}
                        >
                            <Box sx={{ color: "#A93C55", mb: 1 }}>{item.icon}</Box>
                            <Typography variant="body1" fontWeight={600}>
                                {item.text}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* 👑 Elite Section */}
            <EliteClients />
        </Box>
    );
}
