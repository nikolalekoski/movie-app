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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 700,
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          alignItems: "center",
          px: 2,
          height: 56,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          },
        }}
      >
        <TextField
          variant="standard"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            flex: 1,
            mr: 2,
          }}
        />

        <TextField
          select
          variant="standard"
          value={searchParam}
          onChange={(e) =>
            onSearchParamChange(e.target.value as EmovieSearchParam)
          }
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: "1rem",
              paddingY: 0.75,
              color: "#555",
              height: "110%",
              pl: 2.5,
              fontWeight: "600",
            },
          }}
          sx={{
            width: 150,
            backgroundColor: "transparent",
            borderRadius: 0,
            px: 1,
            borderLeft: "2px solid black",
            "& .MuiSelect-select": {
              paddingY: 1,
              backgroundColor: "transparent",
            },
            "& .MuiMenuItem-root": {
              fontSize: "1rem",
            },
          }}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="description">Description</MenuItem>
          <MenuItem value="genre">Genre</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};
export default SearchBar;
