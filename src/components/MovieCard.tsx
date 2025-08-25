import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import type { IMovie } from "../types/movie";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";

type IProps = {
  movie: IMovie;
};

export default function MovieCard({ movie }: IProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const storedIds: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(storedIds.includes(movie.id));
  }, [movie.id]);

  // Toggle favorite
  const toggleFavorite = () => {
    const storedIds: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    let updatedIds: string[];

    if (storedIds.includes(movie.id)) {
      updatedIds = storedIds.filter((id) => id !== movie.id);
      setIsFavorite(false);
    } else {
      updatedIds = [...storedIds, movie.id];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedIds));
    //setIsFavorite(!isFavorite);
  };

  return (
    <Card
      sx={{
        maxWidth: 385,
        margin: 5,
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
      <IconButton
        onClick={toggleFavorite}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
      <CardContent>
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
