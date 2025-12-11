// PersonalizedMatchmaking.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatIcon from "@mui/icons-material/Chat";

export default function PersonalizedMatchmaking() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    { title: "Discovery Call", desc: "We understand your preferences, values & lifestyle.", icon: PersonSearchIcon },
    { title: "Profile Curate", desc: "We refine and present shortlisted profiles.", icon: StarIcon },
    { title: "Personal Introductions", desc: "Handpicked, private introductions with family consent.", icon: ChatIcon },
    { title: "Support to Closure", desc: "Negotiation, meetings & closure support until 'shaadi'.", icon: CheckCircleIcon },
  ];

  const sampleMatches = [
    { id: 1, name: "Aisha R.", age: 28, location: "Ahmedabad", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c9bda9d5f0b0a0f5e0f1b9f2b3b070a" },
    { id: 2, name: "Neel S.", age: 31, location: "Surat", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5ef1e3c205f75c67c25f6e3c8a4b2a77" },
    { id: 3, name: "Priya M.", age: 27, location: "Vadodara", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a6f7a5fbb0f6c0a9d0d9e3b4b4c1f1f" },
  ];

  const handleContact = (sample) => {
    const message = `Hello, I'm interested in Personalized Matchmaking and would like to know more about ${sample?.name ?? "your services"}.`;
    const whatsappNumber = "918849367258";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
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
          width: 420,
          height: 420,
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
          Personalized <span style={{ color: "#A93C55" }}>Matchmaking</span>
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

        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 850, mx: "auto", fontStyle: "italic" }}>
          High-touch matchmaking focused on values, family fit and long-term harmony.
        </Typography>
      </Box>

      {/* Why choose */}
      <Grid container spacing={3} data-aos="fade-up">
        <Grid size={{xs:12, md: 7}}>
          <Paper elevation={3} sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: "linear-gradient(135deg,#FFFFFF 70%, rgba(169,60,85,0.06))"
          }}>
            <Typography variant="h4" sx={{ fontFamily: "Playfair Display", mb: 2 }}>Why Personal Matchmaking?</Typography>
            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: "1.8" }}>
              Our experienced matchmakers combine intuition, culture, family preferences and verified data
              to handcraft matches just for you. We prioritize emotional compatibility and long-term alignment.
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon><PersonSearchIcon sx={{ color: "#A93C55" }} /></ListItemIcon>
                <ListItemText primary="One-to-one matchmaking" secondary="Dedicated consultant assigned to your profile." />
              </ListItem>
              <ListItem>
                <ListItemIcon><CalendarTodayIcon sx={{ color: "#A93C55" }} /></ListItemIcon>
                <ListItemText primary="Curated introductions" secondary="Only meaningful profiles are shared." />
              </ListItem>
              <ListItem>
                <ListItemIcon><FavoriteIcon sx={{ color: "#A93C55" }} /></ListItemIcon>
                <ListItemText primary="Family-first approach" secondary="Respectful involvement & transparent process." />
              </ListItem>
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ mb: 1 }}>Our Process</Typography>
            <Stack spacing={2}>
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Paper key={i} elevation={1} sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }}>
                    <Box sx={{ bgcolor: "rgba(169,60,85,0.06)", p: 1.2, borderRadius: 2 }}>
                      <Icon sx={{ color: "#A93C55" }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={700}>{s.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                    </Box>
                  </Paper>
                );
              })}
            </Stack>

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button variant="contained" onClick={() => handleContact()} sx={{
                background: "linear-gradient(90deg,#A93C55,#73293D)",
                px: 4, borderRadius: 3
              }}>
                Book a Free Consultation
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Sample Matches */}
        <Grid size={{xs:12, md: 5}}>
          <Typography variant="h5" sx={{ fontFamily: "Playfair Display", mb: 2 }}>Sample Matches</Typography>
          <Stack spacing={2}>
            {sampleMatches.map((m) => (
              <Paper key={m.id} elevation={2} sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }} data-aos="fade-left">
                <Avatar src={m.img} variant="rounded" sx={{ width: 84, height: 84, boxShadow: "0 8px 25px rgba(0,0,0,0.12)" }} />
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={700}>{m.name}, {m.age}</Typography>
                  <Typography variant="body2" color="text.secondary">{m.location}</Typography>
                </Box>
                <Button variant="contained" onClick={() => handleContact(m)} sx={{ bgcolor: "#A93C55" }}>
                  Introduce
                </Button>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Testimonials / Guarantee */}
      <Box sx={{ mt: 6 }} data-aos="fade-up">
        <Paper elevation={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, display: "flex", gap: 3, alignItems: "center" }}>
          <Avatar sx={{ width: 84, height: 84, bgcolor: "#A93C55", fontFamily: "Playfair Display" }}>R</Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontFamily: "Playfair Display", fontWeight: 700 }}>Dedicated Relationship Manager</Typography>
            <Typography color="text.secondary">A single point of contact to hand-hold you through every meeting and decision.</Typography>
          </Box>
          <Box sx={{ ml: "auto", textAlign: "right" }}>
            <Typography fontWeight={700}>Satisfaction-first</Typography>
            <Typography variant="body2" color="text.secondary">We only proceed if families consent to continue.</Typography>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ height: 40 }} />
    </Box>
  );
}
