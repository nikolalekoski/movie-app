import { TextField, Box, MenuItem } from "@mui/material";
import React from "react";
import { EmovieSearchParam } from "../pages/Home";
interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  searchParam: string;
  onSearchParamChange: (param: EmovieSearchParam) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  searchParam,
  onSearchParamChange,
}) => {
  return (
    <Box>
      <TextField
        label="Search movies"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        select
        label="Search by"
        value={searchParam}
        onChange={(e) =>
          onSearchParamChange(e.target.value as EmovieSearchParam)
        }
      >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="description">Description</MenuItem>
        <MenuItem value="genre">Genre</MenuItem>
      </TextField>
    </Box>
  );
};
export default SearchBar;
