import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

export interface IProps {
  children: React.ReactNode;
  title: string;
  searchBarComponent?: ReactNode;
}

export const PageLayout = ({ children, title, searchBarComponent }: IProps) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Box display="flex" sx={{ alignItems: "center", justifyContent: "space-between", mb: 5 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ lineHeight: 1 }}>
          {title}
        </Typography>

        {searchBarComponent && (
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}>
            {searchBarComponent}
          </Box>
        )}
      </Box>

      {children}
    </Box>
  );
};
