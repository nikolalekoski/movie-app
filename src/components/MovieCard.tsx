//import movies from "../db/moveis.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  poster: string;
  description: string;
}

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 3,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={movie.poster}
        alt={movie.title}
      />
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>
          {movie.title} {movie.year}
        </Typography>
        <Typography>
          {movie.genre} - {movie.rating}
        </Typography>
        <Typography>{movie.description}</Typography>
      </CardContent>
    </Card>
  );
}
