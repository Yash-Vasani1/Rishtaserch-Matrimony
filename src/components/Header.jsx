// components/Header.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = [
  { label: 'Members', href: '/members' },
  { label: 'Success Stories', href: '/success_stories' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'saturate(120%) blur(6px)',
          backgroundColor: 'rgba(255,255,255,0.6)',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          {/* Logo / Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  color: 'primary.main',
                  letterSpacing: '-0.2px',
                  transition: 'transform .25s ease',
                  ':hover': { transform: 'translateY(-2px)' }, // micro animation
                }}
              >
                Rishtaserch Matrimony
              </Typography>
            </Link>
          </Box>

          {/* Desktop nav */}
          {isMdUp ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((n) => (
                <Link key={n.href} href={n.href} style={{ textDecoration: 'none' }}>
                  <Button
                    size="medium"
                    variant="text"
                    sx={{
                      color: 'text.primary',
                      textTransform: 'none',
                      fontSize: '1rem',
                      ':hover': { backgroundColor: 'transparent', color: 'primary.main', transform: 'translateY(-2px)' },
                      transition: 'color .18s ease, transform .18s ease',
                    }}
                  >
                    {n.label}
                  </Button>
                </Link>
              ))}

              {/* <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="medium" sx={{ ml: 1, borderRadius: 2 }}>
                  Contact
                </Button>
              </Link> */}
            </Box>
          ) : (
            // Mobile menu icon
            <IconButton edge="end" aria-label="menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 300 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Rishtaserch
          </Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="close drawer">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {navItems.map((n) => (
            <ListItem key={n.href} disablePadding>
              <Link href={n.href} style={{ width: '100%', textDecoration: 'none' }}>
                <Box
                  sx={{
                    px: 3,
                    py: 1.25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    ':hover': { backgroundColor: 'action.hover' },
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Typography sx={{ fontSize: '1rem' }}>{n.label}</Typography>
                </Box>
              </Link>
            </ListItem>
          ))}

          {/* <ListItem disablePadding>
            <Box sx={{ px: 3, py: 2 }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="contained" size="large">
                  Contact
                </Button>
              </Link>
            </Box>
          </ListItem> */}
        </List>
      </Drawer>
    </>
  );
}
