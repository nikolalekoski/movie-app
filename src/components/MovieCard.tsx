import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import type { IMovie } from "../types/movie";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";

type IProps = {
  movie: IMovie;
  showFavorite?: boolean;
};
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

export default function MovieCard({ movie, showFavorite = true }: IProps) {
  const [favourites, setFavourites] = useState<number[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  const toggleFavorite = () => {
    const storedFavourites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const favouritesUpdated = storedFavourites.includes(movie.id)
      ? storedFavourites.filter((favId) => favId !== movie.id)
      : [...storedFavourites, movie.id];

    localStorage.setItem("favorites", JSON.stringify(favouritesUpdated));

    setFavourites(favouritesUpdated);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      {showFavorite && (
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
          {favourites.includes(movie.id) ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      )}

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
          paddingBottom: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
