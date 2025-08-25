import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import type { IMovie } from "../types/movie";

type IProps = {
  movie: IMovie;
};

export default function MovieCard({ movie }: IProps) {
  return (
    <Card
      sx={{
        maxWidth: 385,
        margin: 4,
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
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontWeight: "bold", mb: 1 }}>
          {movie.title} {movie.year}
        </Typography>
        <Typography sx={{ mb: 1 }}>
          {movie.genre} - {movie.rating}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
