import { Typography } from "@mui/material";
import Header from "../Header";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

export interface IProps {
  children: React.ReactNode;
  title: string;
  headerRight?: ReactNode;
}

export const PageLayout = ({ children, title, headerRight }: IProps) => {
  return (
    <>
      <Header />
      <Box sx={{ paddingTop: "50px", px: 3, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ lineHeight: 1, mt: "28px" }}
            >
              {title}
            </Typography>
          </Box>
          {headerRight && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Box sx={{ width: 800 }}>{headerRight}</Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box>{children}</Box>
    </>
  );
};
