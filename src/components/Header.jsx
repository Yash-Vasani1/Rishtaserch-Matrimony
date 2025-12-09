"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Members", href: "/members" },
  { label: "Success Stories", href: "/success_stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  // shadow when scrolling
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.7)",
          transition: "0.3s ease",
          borderBottom: trigger ? "1px solid rgba(169,60,85,0.25)" : "1px solid transparent",
          boxShadow: trigger ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          zIndex: 2000,
          position: "fixed",     // instead of sticky
          top: 0,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              src="/logo/logo_png.png"   // <-- put your logo file in /public folder
              alt="Rishtaserch Matrimony Logo"
              data-aos="fade-right"
              sx={{
                marginLeft: "65px",
                height: { xs: 40, md: 55 }, // responsive size
                cursor: "pointer",
                transition: "0.3s ease",
                scale: 5,
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Button
                  data-aos="fade-down"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: pathname === item.href ? 700 : 500,
                    color: pathname === item.href ? "#A93C55" : "text.primary",
                    transition: "0.25s",
                    "&:hover": {
                      color: "#A93C55",
                      transform: "translateY(-4px)",
                    },
                    borderBottom: pathname === item.href ? "2px solid #C7A17A" : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#A93C55" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontFamily: "Playfair Display" }}>
              Menu
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <List sx={{ mt: 2 }}>
            {navItems.map((n) => (
              <ListItem key={n.href} onClick={() => setOpen(false)}>
                <Link href={n.href} style={{ width: "100%", textDecoration: "none" }}>
                  <Typography
                    sx={{
                      py: 1.3,
                      px: 2,
                      borderRadius: 2,
                      fontSize: "1rem",
                      transition: "0.3s",
                      background: pathname === n.href ? "rgba(169,60,85,0.12)" : "transparent",
                      color: pathname === n.href ? "#A93C55" : "text.primary",
                      "&:hover": {
                        background: "rgba(169,60,85,0.12)",
                      },
                    }}
                  >
                    {n.label}
                  </Typography>
                </Link>
              </ListItem>
            ))}

            <ListItem sx={{ mt: 2 }}>
              <Link href="/contact" style={{ width: "100%", textDecoration: "none" }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    background: "linear-gradient(90deg,#A93C55,#73293D)",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
