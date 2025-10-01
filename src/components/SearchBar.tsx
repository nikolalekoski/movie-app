import { TextField, Box, InputAdornment, useTheme } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 8,
        px: 1,
        boxShadow: theme.shadows[3],
        bgcolor:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.05)",
      }}
    >
      <TextField
        variant="standard"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: theme.palette.text.secondary,
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{
          p: 1,
          color: theme.palette.text.primary,
        }}
      />
    </Box>
  );
};

export default SearchBar;
