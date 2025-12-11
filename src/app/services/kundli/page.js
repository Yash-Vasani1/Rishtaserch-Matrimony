// KundliMatching.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
  Avatar,
  Divider,
} from "@mui/material";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import GavelIcon from "@mui/icons-material/Gavel";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HailIcon from "@mui/icons-material/Hail";
import InfoIcon from "@mui/icons-material/Info";

export default function KundliMatching() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    { title: "Guna Milan", text: "Accurate 36-point guna matching to check basic life compatibility.", icon: AutoGraphIcon },
    { title: "Dosha Analysis", text: "Detect Mangal/Dosha concerns & suggested remedies.", icon: HailIcon },
    { title: "Family & Career", text: "Evaluate compatibility in family values and professional life.", icon: EmojiPeopleIcon },
    { title: "Personalised Remedies", text: "Practical, culturally appropriate guidance when needed.", icon: GavelIcon },
  ];

  const sampleReportUrl = "#"; // replace with actual report link when available

  const handleOrder = () => {
    const message = `Hello, I want a Kundli Matching report and consultation.`;
    window.open(`https://wa.me/918849367258?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, maxWidth: "1200px", mx: "auto" }}>
      {/* Hero */}
      <Box data-aos="fade-up" sx={{ textAlign: "center", py: 8, position: "relative" }}>
        <Box sx={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 400,
          background: "rgba(169,60,85,0.08)",
          filter: "blur(95px)",
          zIndex: -1,
          borderRadius: "50%",
        }} />
        <Typography variant="h2" sx={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          background: "linear-gradient(90deg,#A93C55,#73293D)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}>
          Kundli <span style={{ color: "#A93C55" }}>Matching</span>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 3 }}>
          <Box sx={{ width: 60, height: 2, background: "#C7A17A" }} />
          <Box sx={{
            mx: 2,
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: "2px solid #C7A17A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 14,
            color: "#C7A17A",
            fontFamily: "Playfair Display",
          }}>❤</Box>
          <Box sx={{ width: 60, height: 2, background: "#C7A17A" }} />
        </Box>

        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: "auto", fontStyle: "italic" }}>
          Ancient astrology meets careful interpretation — to help families make informed choices.
        </Typography>
      </Box>

      {/* Benefits */}
      <Grid container spacing={3} data-aos="fade-up">
        <Grid size={{xs:12, md: 7}}>
          <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, background: "linear-gradient(135deg,#fff 70%, rgba(169,60,85,0.05))" }} elevation={3}>
            <Typography variant="h4" sx={{ fontFamily: "Playfair Display", mb: 2 }}>What we check</Typography>
            <Stack spacing={2}>
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Paper key={i} elevation={1} sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }}>
                    <Box sx={{ bgcolor: "rgba(169,60,85,0.06)", p: 1.2, borderRadius: 2 }}>
                      <Icon sx={{ color: "#A93C55" }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={700}>{b.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{b.text}</Typography>
                    </Box>
                  </Paper>
                );
              })}
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" color="text.secondary">
              Each kundli is interpreted by our experienced Vedic astrologers. We provide a clear, family-friendly report and remedial suggestions when required.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button variant="contained" onClick={handleOrder} sx={{ background: "linear-gradient(90deg,#A93C55,#73293D)" }}>
                Order a Report & Consultation
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{xs:12, md: 5}}>
          <Typography variant="h5" sx={{ mb: 2, fontFamily: "Playfair Display" }}>Sample Reading</Typography>
          <Paper elevation={2} sx={{ p: 2, borderRadius: 3 }}>
            <Typography fontWeight={700}>Guna Score</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Example: 28/36 — Practically compatible with minor remedies suggested.
            </Typography>

            <Typography fontWeight={700}>Dosha</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Example: No Mangal Dosha detected.
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* illustrative avatar */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f3f9f4f9b7d6e2d3ccb6f3f5ea4a2d8" sx={{ width: 80, height: 80 }} />
              <Box>
                <Typography fontWeight={700}>Consultation Included</Typography>
                <Typography variant="body2" color="text.secondary">30-minute follow-up with our astrologer to explain the report.</Typography>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ mt: 3, p: 2, borderRadius: 3 }} elevation={1}>
            <Typography variant="h6" sx={{ fontFamily: "Playfair Display", mb: 1 }}>Why choose a professional reading?</Typography>
            <Typography variant="body2" color="text.secondary">A careful reading avoids misunderstandings and suggests simple, culturally mindful remedies.</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ height: 40 }} />
    </Box>
  );
}
