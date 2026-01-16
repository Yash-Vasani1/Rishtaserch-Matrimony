// components/Footer.jsx
'use client';

import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Link as MuiLink, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Members', href: '/members' },
    { name: 'Success Stories', href: '/success_stories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#FFF5F7',
        position: 'relative',
        overflow: 'hidden',
        mt: 12,
        pt: 10,
        pb: 12,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      {/* Top glow accent */}
      <Box
        sx={{
          position: 'absolute',
          top: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(169,60,85,0.08)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Company Name */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            textAlign: 'center',
            background: 'linear-gradient(90deg,#A93C55,#73293D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4,
          }}
        >
          Rishtaserch Matrimony
        </Typography>

        {/* Pages Links */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              style={{ textDecoration: "none" }}
            >
              <MuiLink
                underline="none"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": { color: "#A93C55" },
                }}
                component="span"
              >
                {page.name}
              </MuiLink>
            </Link>
          ))}
        </Stack>

        <Divider sx={{ mb: 4 }} />

        {/* Address */}
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          5th Floor, 505 Akruti Complex, Nr. Stadium Cross Road, C.G. Road, Navrangpura <br />
          Ahmedabad, Gujarat 380009, India
        </Typography>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            sx={{
              color: '#A93C55',
              '&:hover': { transform: 'scale(1.2)', color: '#73293D' },
              transition: '0.3s',
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            sx={{
              color: '#73293D',
              '&:hover': { transform: 'scale(1.2)', color: '#A93C55' },
              transition: '0.3s',
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://wa.me/917862990641"
            target="_blank"
            sx={{
              color: '#25D366',
              '&:hover': { transform: 'scale(1.2)', color: '#128C7E' },
              transition: '0.3s',
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>

        {/* Tagline */}
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
          Bringing hearts together with trust, respect, and meaningful connections.
        </Typography>

        {/* Back to top arrow */}
        <Box sx={{ textAlign: 'center' }}>
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              color: '#A93C55',
              background: 'rgba(169,60,85,0.1)',
              '&:hover': { transform: 'scale(1.2)', background: 'rgba(169,60,85,0.2)' },
              transition: '0.3s',
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
