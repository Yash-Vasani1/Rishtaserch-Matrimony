"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Paper,
  ListItemButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useScrollTrigger } from "@mui/material";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Services",
    children: [
      { label: "Personalised Matchmaking", href: "/services/matchmaking" },
      { label: "Background Verification", href: "/services/background" },
      { label: "Kundli Matching", href: "/services/kundli" },
    ],
  },
  { label: "Members", href: "/members" },
  { label: "Success Stories", href: "/success_stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const pathname = usePathname();

  // Hover logic
  let hoverTimeout;
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setHoverServices(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setHoverServices(false), 150);
  };

  return (
    <>
      {/* HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.75)",
          transition: "0.3s ease",
          borderBottom: trigger ? "1px solid rgba(169,60,85,0.25)" : "1px solid transparent",
          boxShadow: trigger ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          zIndex: 2000,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 1.5, md: 6 } }}>

          {/* LOGO */}
          <Link href="/">
            <Box
              component="img"
              src="/logo/logo_png.png"
              alt="Rishtaserch Logo"
              sx={{
                height: { xs: 40, md: 55 },
                cursor: "pointer",
                ml: { xs: "45px", md: "45px" },  // FIXED
                transform: "scale(5)", // FIXED
              }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) =>
              item.children ? (
                <Box
                  key={item.label}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  sx={{ position: "relative" }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      fontWeight: 500,
                      color: "#2A2A2A",
                      "&:hover": { color: "#A93C55" },
                    }}
                  >
                    {item.label}
                    <ExpandMoreIcon sx={{ fontSize: 18, ml: 0.5 }} />
                  </Button>

                  {/* Dropdown */}
                  {hoverServices && (
                    <Paper
                      elevation={4}
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        mt: 1,
                        borderRadius: 2,
                        minWidth: 220,
                        overflow: "hidden",
                        zIndex: 9999,
                      }}
                    >
                      {item.children.map((sub) => (
                        <Link key={sub.href} href={sub.href} style={{ textDecoration: "none" }}>
                          <Button
                            sx={{
                              justifyContent: "flex-start",
                              width: "100%",
                              px: 3,
                              py: 1.2,
                              textTransform: "none",
                              color: pathname === sub.href ? "#A93C55" : "#2A2A2A",
                              "&:hover": { backgroundColor: "#F7EDED", color: "#A93C55" },
                            }}
                          >
                            {sub.label}
                          </Button>
                        </Link>
                      ))}
                    </Paper>
                  )}
                </Box>
              ) : (
                <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      fontWeight: 500,
                      color: pathname === item.href ? "#A93C55" : "#2A2A2A",
                      "&:hover": { color: "#A93C55" },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            )}
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#A93C55" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setServicesOpen(false);
        }}
        PaperProps={{
          sx: {
            width: "75%",
            maxWidth: 320,
            background: "#FFF8F9",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#A93C55" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

          {/* MOBILE NAV ITEMS */}
          {navItems.map((item) =>
            item.children ? (
              <React.Fragment key={item.label}>

                {/* Parent item */}
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setServicesOpen(!servicesOpen)}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: { fontWeight: 600, color: "#A93C55" },
                      }}
                    />
                    <ExpandMoreIcon
                      sx={{
                        transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "0.3s",
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                {/* Expandable submenu */}
                <Collapse in={servicesOpen} timeout={300} unmountOnExit>
                  <List sx={{ pl: 3 }}>
                    {item.children.map((sub) => (
                      <ListItem disablePadding key={sub.href}>
                        <ListItemButton
                          component={Link}
                          href={sub.href}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={sub.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ) : (
              <ListItem disablePadding key={item.href}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  sx={{
                    backgroundColor:
                      pathname === item.href ? "rgba(169,60,85,0.12)" : "transparent",
                    color: pathname === item.href ? "#A93C55" : "#2A2A2A",
                  }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>

      </Drawer>
    </>
  );
}
