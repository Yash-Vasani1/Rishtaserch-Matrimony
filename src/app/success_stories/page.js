"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SuccessStoriesData from "@/data/SuccessStoriesData"

const stories = SuccessStoriesData;

export default function SuccessStories() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, maxWidth: "1200px", mx: "auto" }}>
      
      {/* 🌟 HERO SECTION */}
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
            width: "420px",
            height: "420px",
            background: "rgba(169,60,85,0.10)",
            filter: "blur(110px)",
            zIndex: -1,
            borderRadius: "50%",
          }}
        />

        {/* Title */}
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
          Success Stories
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

        {/* Subtitle */}
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: "750px",
            mx: "auto",
            fontStyle: "italic",
            letterSpacing: "0.5px",
          }}
        >
          Every love story is unique — here are some beautiful journeys that began with Rishtaserch Matrimony.
        </Typography>
      </Box>

      {/* ❤️ STORIES GRID */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {stories.map((story, i) => (
          <Grid key={story.id} size={{ xs: 12, sm: 6, md: 4 }} data-aos="fade-up" data-aos-delay={i * 150}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                transition: "0.4s",
                cursor: "pointer",
                background: "#FFFFFF",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={story.img}
                alt={story.title}
                sx={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#A93C55",
                    mb: 1,
                  }}
                >
                  {story.title}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  {story.excerpt}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* bottom spacing */}
      <Box sx={{ mt: 10 }} />
    </Box>
  );
}
