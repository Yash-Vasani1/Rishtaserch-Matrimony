import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Box } from "@mui/material";

export default function ProfileCard({ person }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "0.35s",
        background: "#FFFFFF",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="240"
        image={person.image}
        alt={person.name}
        sx={{ objectFit: "cover" }}
      />

      {/* Content */}
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 600,
            color: "#A93C55",
            mb: 1,
          }}
        >
          {person.name}, {person.age}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {person.location} · {person.occupation}
        </Typography>

        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: "text.primary", lineHeight: "1.6" }}
        >
          {person.about}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Link href={`/members/${person.id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 3,
              borderColor: "#A93C55",
              color: "#A93C55",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                borderColor: "#73293D",
                color: "#73293D",
              },
            }}
            size="small"
          >
            View Profile
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
