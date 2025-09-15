import { TextField, Box, InputAdornment } from "@mui/material";
import React from "react";
import { Colors } from "../shared/colors.ts";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 8,
        boxShadow: `0 1px 10px ${Colors.primary.black}`,
        px: 1,
      }}>
      <TextField
        variant="standard"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          p: 1,
        }}
      />
    </Box>
  );
};
export default SearchBar;
