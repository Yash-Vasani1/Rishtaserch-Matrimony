"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  Public, BusinessCenter, WorkspacePremium, FlightTakeoff,
  School, LocalHospital, Gavel, Engineering
} from "@mui/icons-material";

const items = [
  { icon: <WorkspacePremium sx={{ fontSize: 40 }} />, label: "High Class / HNI" },
  { icon: <BusinessCenter sx={{ fontSize: 40 }} />, label: "Business Class" },
  { icon: <FlightTakeoff sx={{ fontSize: 40 }} />, label: "NRI / Abroad Settled" },
  { icon: <Public sx={{ fontSize: 40 }} />, label: "PR Holders & Work Visa" },
  { icon: <School sx={{ fontSize: 40 }} />, label: "IELTS / PTE Cleared" },
  { icon: <LocalHospital sx={{ fontSize: 40 }} />, label: "Doctors & Healthcare" },
  { icon: <Engineering sx={{ fontSize: 40 }} />, label: "Engineers & IT Professionals" },
  { icon: <Gavel sx={{ fontSize: 40 }} />, label: "Lawyers & Govt. Sector" },
];

export default function EliteClients() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
        py: 8,
        px: 2,
        position: "relative",
      }}
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px",
          height: "350px",
          background: "rgba(169,60,85,0.08)",
          filter: "blur(90px)",
          zIndex: -1,
          borderRadius: "50%",
        }}
      />

      {/* Title */}
      <Typography
        variant="overline"
        sx={{
          letterSpacing: "4px",
          color: "#A93C55",
          fontWeight: "bold",
        }}
        data-aos="fade-down"
      >
        PREMIUM MEMBERSHIP
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          background: "linear-gradient(90deg,#A93C55,#6A2E3A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
        data-aos="zoom-in"
      >
        Our Elite Clients Include
      </Typography>

      {/* Gold Divider with Heart */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
        <Box sx={{ width: "70px", height: "2px", background: "#C7A17A" }} />
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
        <Box sx={{ width: "70px", height: "2px", background: "#C7A17A" }} />
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "750px",
          mx: "auto",
          fontSize: "1.15rem",
          color: "text.secondary",
          mb: 6,
        }}
        data-aos="fade-up"
      >
        We proudly onboard premium individuals—professionals, NRIs, business families,
        and highly qualified candidates—who trust us for meaningful long-term
        connections and matchmaking excellence.
      </Typography>

      {/* Animated Grid */}
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid key={index} size={{xs:6, sm:4, md:3}}>
            <Paper
              elevation={3}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              sx={{
                p: 3,
                borderRadius: 4,
                textAlign: "center",
                transition: "0.4s",
                cursor: "default",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ color: "#A93C55", mb: 1 }}>{item.icon}</Box>
              <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
