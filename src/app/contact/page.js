"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    Stack,
    IconButton,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "918849367258"; // your WhatsApp number without +

        const whatsappMessage =
            `Hello, I want to contact you.\n\n` +
            `*Name:* ${form.name}\n` +
            `*Email:* ${form.email}\n` +
            `*Phone:* ${form.phone}\n` +
            `*Message:* \n${form.message}`;

        const redirectUrl =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(redirectUrl, "_blank");
    };

    return (
        <Box
            sx={{
                py: 6,
                px: { xs: 2, md: 6 },
                maxWidth: "1200px",
                mx: "auto",
                position: "relative",
            }}
        >
            {/* Background Glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-70px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "420px",
                    height: "420px",
                    background: "rgba(169,60,85,0.09)",
                    filter: "blur(120px)",
                    borderRadius: "50%",
                    zIndex: -1,
                }}
            />

            {/* Header */}
            <Box textAlign="center" data-aos="fade-up">
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        background: "linear-gradient(90deg,#A93C55,#73293D)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Contact Us
                </Typography>

                {/* Divider Heart */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                        mb: 4,
                    }}
                >
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
                            color: "#C7A17A",
                        }}
                    >
                        ❤
                    </Box>
                    <Box sx={{ width: "60px", height: "2px", background: "#C7A17A" }} />
                </Box>

                <Typography
                    variant="h6"
                    sx={{ color: "text.secondary", fontStyle: "italic", mb: 6 }}
                >
                    We're here to help you in your journey to find your perfect life partner.
                </Typography>
            </Box>

            {/* Content */}
            <Grid container spacing={4}>

                {/* Left: Contact Form */}
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 3, md: 5 },
                            borderRadius: 4,
                            background: "#fff",
                            transition: "0.3s",
                            "&:hover": { boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                fontFamily: "Playfair Display",
                                fontWeight: 600,
                                color: "#A93C55",
                            }}
                        >
                            Send Us a Message
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                sx={{ mb: 3 }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    py: 1.4,
                                    fontSize: "1rem",
                                    background: "#A93C55",
                                    "&:hover": { background: "#7A2B40" },
                                }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </Paper>
                </Grid>

                {/* Right: Details + Map */}
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
                    <Stack spacing={3}>

                        {/* Contact Info */}
                        <Paper sx={{ p: 3, borderRadius: 4 }} elevation={2}>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    fontFamily: "Playfair Display",
                                    fontWeight: 600,
                                    color: "#A93C55",
                                }}
                            >
                                Reach Us
                            </Typography>

                            <Stack spacing={2}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <PhoneIcon sx={{ color: "#A93C55" }} />
                                    <Typography>+91 8849367258</Typography>
                                </Stack>

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <EmailIcon sx={{ color: "#A93C55" }} />
                                    <Typography>rishtaserachmatrimony@gmail.com</Typography>
                                </Stack>

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <LocationOnIcon sx={{ color: "#A93C55" }} />
                                    <Typography>
                                        5th Floor, 505 Akruti Complex, Nr. Stadium Cross Road, Navrangpura <br />
                                        Ahmedabad, Gujarat 380009, India
                                    </Typography>
                                </Stack>
                            </Stack>

                            {/* Social Icons */}
                            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                                <IconButton
                                    onClick={() => window.open("https://wa.me/918849367258", "_blank")}
                                >
                                    <WhatsAppIcon sx={{ color: "#25D366" }} />
                                </IconButton>

                                <IconButton
                                    onClick={() => window.open("https://instagram.com/YOUR_USERNAME", "_blank")}
                                >
                                    <InstagramIcon sx={{ color: "#E1306C" }} />
                                </IconButton>

                                <IconButton
                                    onClick={() => window.open("https://linkedin.com/in/YOUR_PROFILE", "_blank")}
                                >
                                    <LinkedInIcon sx={{ color: "#0077B5" }} />
                                </IconButton>

                                <IconButton
                                    onClick={() => window.open("https://facebook.com/YOUR_PAGE", "_blank")}
                                >
                                    <FacebookIcon sx={{ color: "#1877F2" }} />
                                </IconButton>
                            </Stack>

                        </Paper>

                        {/* Map */}
                        <Paper sx={{ borderRadius: 4, overflow: "hidden" }} elevation={2}>
                            <iframe
                                width="100%"
                                height="230"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.1713418362707!2d72.56535926360449!3d23.03915897525512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ad07d8117%3A0x72583c8ee059ed91!2sAakruti%20Complex%2C%20Chimanlal%20Girdharlal%20Rd%2C%20Navarangpura%20Gam%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1765739344975!5m2!1sen!2sin"
                            ></iframe>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
