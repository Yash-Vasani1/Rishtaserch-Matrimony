"use client";

import { Box, Button, Grid, Typography, Paper, Avatar, Divider } from "@mui/material";
import people from "@/data/people.json";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PersonDetail() {
    const { slug } = useParams();
    const person = people.find((p) => String(p.id) === String(slug));

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const handleContact = () => {
        const message = `Hello, I am interested in contacting this profile:

        *Name:* ${person.name},\n
        *Age:* ${person.age},\n
        *Location:* ${person.location},\n
        *Occupation:* ${person.occupation},\n
        *Profile ID:* ${person.id},\n

        Please guide me with the next steps.`;

        const whatsappNumber = "919427702320"; // <-- company WhatsApp number (without +)
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };


    if (!person)
        return (
            <Box sx={{ py: 4, textAlign: "center" }}>
                <Typography variant="h5">Profile not found.</Typography>
            </Box>
        );

    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 6 }, maxWidth: "1200px", mx: "auto" }}>

            {/* 🌟 Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    py: 6,
                    position: "relative",
                }}
                data-aos="fade-up"
            >
                {/* Glow background */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "480px",
                        height: "480px",
                        background: "rgba(169,60,85,0.12)",
                        filter: "blur(110px)",
                        zIndex: -1,
                        borderRadius: "50%",
                    }}
                />

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
                    {person.name}
                </Typography>

                {/* Heart Divider */}
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

                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        maxWidth: "650px",
                        mx: "auto",
                        fontStyle: "italic",
                    }}
                >
                    {person.location} · {person.occupation}
                </Typography>
            </Box>

            {/* CARD WITH DETAILS */}
            <Paper
                elevation={4}
                data-aos="fade-up"
                sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #FFFFFF 70%, rgba(169,60,85,0.07))",
                }}
            >
                <Grid container spacing={4}>
                    {/* LEFT: PROFILE PHOTO */}
                    <Grid size={{ xs: 12, md: 4 }} data-aos="fade-right">
                        <Avatar
                            src={person.image}
                            alt={person.name}
                            variant="rounded"
                            sx={{
                                width: "100%",
                                height: "100%",
                                minHeight: "360px",
                                borderRadius: 4,
                                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>

                    {/* RIGHT: DETAILS */}
                    <Grid size={{ xs: 12, md: 8 }} data-aos="fade-left">
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                color: "#A93C55",
                            }}
                        >
                            {person.name}, {person.age}
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            {person.location} · {person.occupation}
                        </Typography>

                        <Divider sx={{ mb: 3 }} />

                        {person.about &&
                            <>
                                <Typography variant="h5" sx={{ fontFamily: "Playfair Display", mb: 1 }}>
                                    About Me
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: "1.8" }}>
                                    {person.about}
                                </Typography>
                            </>
                        }

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h5" sx={{ fontFamily: "Playfair Display", mb: 1 }}>
                            More Details
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: "1.8" }}>
                            {person.details}
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Button
                            variant="contained"
                            onClick={handleContact}
                            sx={{
                                background: "linear-gradient(90deg,#A93C55,#73293D)",
                                borderRadius: 3,
                                px: 4,
                                py: 1.2,
                                fontSize: "1rem",
                                fontWeight: 600,
                                boxShadow: "0 6px 20px rgba(169,60,85,0.35)",
                                "&:hover": {
                                    background: "linear-gradient(90deg,#8B3148,#5D2133)",
                                },
                            }}
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Box sx={{ height: 50 }} />
        </Box>
    );
}
