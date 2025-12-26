"use client";

import React, { useEffect } from "react";
import { Box, Typography, Grid, Button, Container, Paper, Divider, Stack, Avatar } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import people from "@/data/people.json"; // use first 6 members
import Link from "next/link";
import { useRouter } from "next/navigation";
import SuccessStoriesData from "@/data/SuccessStoriesData"



export default function Home() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const stories = SuccessStoriesData;

  const featuredMembers = people.slice(0, 6);

  return (
    <>
      <Typography component="h1" sx={{ position: "absolute", left: "-9999px" }}>
        Rishtaserch Matrimony – Trusted Rishta Search Platform
      </Typography>

      <Box sx={{ bgcolor: "#F7F9FC" }}>
        {/* ================= HERO SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "85vh", md: "95vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
            overflow: "hidden",
            color: "#fff",
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: 'url("/Hero_img.png")',
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
              backgroundAttachment: "fixed", // ⭐ FIXED BACKGROUND
              zIndex: 0,
            }}
          />

          {/* Dark Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.2)", // contrast overlay
              zIndex: 1,
            }}
          />

          {/* Text + Buttons */}
          <Box sx={{ position: "relative", zIndex: 2 }} data-aos="fade-up">
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Find Someone Who Feels Like Home
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                maxWidth: 650,
                mx: "auto",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Meaningful relationships built with trust, respect & shared values.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg,#A93C55,#73293D)",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 3,
                  "&:hover": {
                    background: "linear-gradient(90deg,#8B3148,#5D2133)",
                  },
                }}
                onClick={() => router.push("/contact")}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 3,
                  "&:hover": { background: "rgba(255,255,255,0.1)" },
                }}
                onClick={() => router.push("/members")}
              >
                Browse Members
              </Button>
            </Stack>
          </Box>
        </Box>


        {/* ================= ABOUT PREVIEW ================= */}
        <Container maxWidth="lg" sx={{ py: 12 }} data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#A93C55", textAlign: "center", mb: 3 }}
          >
            Built on Trust, Values & Compatibility
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: 750, mx: "auto", mb: 4, lineHeight: 1.8 }}
          >
            Rishtaserch Matrimony is committed to helping individuals and families find life partners who reflect cultural
            compatibility, respect, and meaningful connection. With a growing verified community, we focus on privacy,
            safety, and compassionate matchmaking.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg,#A93C55,#73293D)",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  "&:hover": { background: "linear-gradient(90deg,#8B3148,#5D2133)" },
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Container>

        {/* ================= WHY CHOOSE US ================= */}
        <Container maxWidth="lg" sx={{ py: 12 }} data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#A93C55", textAlign: "center", mb: 8 }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: "Verified Profiles", desc: "Every profile undergoes multi-step identity checks." },
              { title: "Easy Communication", desc: "Connect with genuine people securely and respectfully." },
              { title: "Cultural Matchmaking", desc: "Tailored filtering respecting family values and traditions." },
              { title: "Supportive Community", desc: "Designed for individuals and families looking for commitment." },
            ].map((f) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={f.title} data-aos="fade-up" >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "0.25s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 25px rgba(16,24,40,0.06)" },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ================= FEATURED MEMBERS ================= */}
        {/* <Container maxWidth="lg" sx={{ py: 12 }} data-aos="fade-up">
        <Typography
          variant="h3"
          sx={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#A93C55", textAlign: "center", mb: 6 }}
        >
          Featured Members
        </Typography>
        <Grid container spacing={4}>
          {featuredMembers.map((p) => (
            <Grid size={{xs:12, sm:6, md:4}} key={p.id}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 25px rgba(16,24,40,0.06)" },
                }}
              >
                <Avatar
                  src={p.image}
                  alt={p.name}
                  variant="rounded"
                  sx={{ width: "100%", height: 320, objectFit: "cover" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {p.name}, {p.age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.location} · {p.occupation}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Link href={`/members/${p.id}`} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        sx={{ color: "#A93C55", borderColor: "#C7A17A", "&:hover": { background: "rgba(169,60,85,0.08)" } }}
                      >
                        View Profile
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Link href="/members" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg,#A93C55,#73293D)",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                "&:hover": { background: "linear-gradient(90deg,#8B3148,#5D2133)" },
              }}
            >
              View All Members
            </Button>
          </Link>
        </Box>
      </Container> */}
        {/* ================= FEATURED MEMBERS (CTA VERSION) ================= */}
        <Container maxWidth="lg" sx={{ py: 12 }} data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#A93C55", textAlign: "center", mb: 6 }}
          >
            Explore Our Verified Members
          </Typography>

          <Paper
            elevation={4}
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              background: "linear-gradient(135deg,#FFF5F7 70%, rgba(169,60,85,0.07))",
              transition: "0.4s",
              "&:hover": { transform: "scale(1.02)", boxShadow: "0 12px 30px rgba(16,24,40,0.12)" },
            }}
            onClick={() => router.push("/members")} // redirect on click
          >
            {/* Animated hearts or icons floating */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                background: "#A93C55",
                borderRadius: "50%",
                top: "20%",
                left: "10%",
                animation: "float 4s ease-in-out infinite",
                opacity: 0.6,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 25,
                height: 25,
                background: "#73293D",
                borderRadius: "50%",
                top: "50%",
                right: "15%",
                animation: "float 3s ease-in-out infinite alternate",
                opacity: 0.6,
              }}
            />

            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 3, fontFamily: "Playfair Display" }}
            >
              Hundreds of Verified Members Await!
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
              Ready to find your perfect match? Explore our wide range of verified profiles and connect with like-minded individuals.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg,#A93C55,#73293D)",
                px: 5,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 3,
                "&:hover": { background: "linear-gradient(90deg,#8B3148,#5D2133)" },
              }}
            >
              Browse Members
            </Button>
          </Paper>

          {/* Floating animation keyframes */}
          <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-15px) translateX(10px); }
      100% { transform: translateY(0) translateX(0); }
    }
  `}</style>
        </Container>


        {/* ================= SUCCESS STORIES PREVIEW ================= */}
        <Container maxWidth="lg" sx={{ py: 12 }} data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#A93C55", textAlign: "center", mb: 6 }}
          >
            Where Beautiful Stories Begin
          </Typography>
          <Grid container spacing={4}>
            {stories.slice(0, 3).map((p, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    textAlign: "center",
                    p: 3,
                    transition: "0.25s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 25px rgba(16,24,40,0.06)" },
                  }}
                >
                  <Avatar
                    src={p.img}
                    alt={p.title}
                    variant="rounded"
                    sx={{ width: "100%", height: 280, objectFit: "cover", mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.excerpt.slice(0, 70)}...
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Link href="/success_stories" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg,#A93C55,#73293D)",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  "&:hover": { background: "linear-gradient(90deg,#8B3148,#5D2133)" },
                }}
              >
                See All Stories
              </Button>
            </Link>
          </Box>
        </Container>

        {/* ================= FINAL CTA ================= */}
        <Box sx={{ py: 12, textAlign: "center", bgcolor: "#FFF5F7" }} data-aos="fade-up">
          <Typography variant="h3" sx={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#A93C55", mb: 3 }}>
            Your Forever Partnership Starts With a First Step
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            No rush. No pressure. Only meaningful connections.
          </Typography>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg,#A93C55,#73293D)",
                px: 5,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 3,
                "&:hover": { background: "linear-gradient(90deg,#8B3148,#5D2133)" },
              }}
            >
              Create Profile Now
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
