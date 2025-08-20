import { TextField, Box, MenuItem } from "@mui/material";
import React from "react";
import { EmovieSearchParam } from "../types/movie";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  searchParam: string;
  onSearchParamChange: (param: EmovieSearchParam) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, searchParam, onSearchParamChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 5,
      }}>
      <Box
        sx={{
          display: "flex",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          alignItems: "center",
          px: 4,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          },
        }}>
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
          onChange={(e) => onSearchParamChange(e.target.value as EmovieSearchParam)}
          InputProps={{
            disableUnderline: true,
            sx: {
              py: 0.75,
              textAlign: "center",
            },
          }}
          sx={{
            width: 150,

            borderLeft: "1px solid grey",
            "& .MuiSelect-select": {
              paddingY: 1,
            },
            "& .MuiMenuItem-root": {
              fontSize: "1rem",
            },
          }}>
          {Object.values(EmovieSearchParam).map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};
export default SearchBar;
