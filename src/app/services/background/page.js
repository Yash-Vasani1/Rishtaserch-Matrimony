// BackgroundVerification.jsx
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
  Chip,
  Divider,
} from "@mui/material";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SEO from "@/components/SEO";

export default function BackgroundVerification() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const checks = [
    { title: "ID Verification", desc: "Government ID check (Aadhaar / Passport)", icon: BadgeIcon },
    { title: "Address Check", desc: "Utility bills/official documents for address proof", icon: BusinessCenterIcon },
    { title: "Education & Employment", desc: "Confirm degrees and job history where possible", icon: VerifiedUserIcon },
    { title: "Criminal Record", desc: "Police verification for peace of mind (where applicable)", icon: GppGoodIcon },
  ];

  const handleVerify = () => {
    const message = `Hello, I want to initiate Background Verification for a profile.`;
    window.open(`https://wa.me/918849367258?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Background Verification Services | Rishtaserch Matrimony"
        description="Ensure trustworthy connections with our comprehensive background verification for matrimonial profiles. Safe, verified, and reliable matches."
        keywords="background verification, safe matches, verified profiles, rishtaserch, rishta search, rishtaserch matrimony"
        url="https://www.rishtaserchmatrimony.com/services/background"
        image="/Hero_img.png"
      />

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
            Background <span style={{ color: "#A93C55" }}>Verification</span>
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
            Detailed, discreet verification to protect families and build trustworthy introductions.
          </Typography>
        </Box>

        {/* Verification cards */}
        <Grid container spacing={3} data-aos="fade-up">
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, background: "linear-gradient(135deg,#fff 70%, rgba(169,60,85,0.05))" }} elevation={3}>
              <Typography variant="h4" sx={{ fontFamily: "Playfair Display", mb: 2 }}>What we verify</Typography>
              <Stack spacing={2}>
                {checks.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Paper key={i} elevation={1} sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }}>
                      <Box sx={{ bgcolor: "rgba(169,60,85,0.06)", p: 1.2, borderRadius: 2 }}>
                        <Icon sx={{ color: "#A93C55" }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={700}>{c.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{c.desc}</Typography>
                      </Box>
                      <Chip label="Optional" sx={{ ml: "auto", bgcolor: "rgba(199,161,122,0.12)" }} />
                    </Paper>
                  );
                })}
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography color="text.secondary">
                We follow privacy-first protocols: verifications are done only after consent and any sensitive documents are handled securely.
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Button variant="contained" onClick={handleVerify} sx={{ background: "linear-gradient(90deg,#A93C55,#73293D)" }}>
                  Start Verification
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontFamily: "Playfair Display", mb: 1 }}>Trust Metrics</Typography>
              <Typography variant="body2" color="text.secondary">Profiles verified: <strong>100%</strong></Typography>
              <Typography variant="body2" color="text.secondary">Avg verification time: <strong>3–5 days</strong></Typography>
              <Typography variant="body2" color="text.secondary">Secure storage: <strong>Encrypted</strong></Typography>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "#A93C55" }}><VerifiedUserIcon /></Avatar>
                <Box>
                  <Typography fontWeight={700}>Discrete & Confidential</Typography>
                  <Typography variant="body2" color="text.secondary">Only report owners receive the full documentation.</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ height: 40 }} />
      </Box>
    </>
  );
}
