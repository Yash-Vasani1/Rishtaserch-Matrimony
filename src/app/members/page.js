"use client";

import people from "@/data/people.json";
import ProfileCard from "@/components/ProfileCard";
import { Box, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Persons() {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <Typography component="h1" sx={{ position: "absolute", left: "-9999px" }}>
        Browse Verified Matrimony Profiles – Brides & Grooms
      </Typography>

      <Box
        sx={{
          py: 6,
          px: { xs: 2, md: 6 },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >

        {/* 🌟 Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 7,
            position: "relative",
          }}
          data-aos="fade-up"
        >
          {/* Background Glow */}
          <Box
            sx={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "450px",
              height: "450px",
              background: "rgba(169,60,85,0.1)",
              filter: "blur(100px)",
              zIndex: -1,
              borderRadius: "50%",
            }}
          />

          {/* Page Title */}
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
            Members & Profiles
          </Typography>

          {/* Decorative Heart Line */}
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
              maxWidth: "750px",
              mx: "auto",
              fontStyle: "italic",
              letterSpacing: "0.4px",
            }}
          >
            Explore verified profiles and find the partner who truly matches your values.
          </Typography>
        </Box>

        {/* List of Profiles */}
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {people.map((p, i) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={p.id}
              data-aos="fade-up"
            >
              <ProfileCard person={p} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mb: 10 }} />
      </Box>
    </>
  );
}
