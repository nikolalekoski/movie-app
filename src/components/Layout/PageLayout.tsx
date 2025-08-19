import { Typography } from "@mui/material";
import Header from "../Header";
import { Box } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({ children, title }: IProps) => {
  return (
    <>
      <Header />
      <Box sx={{ paddingTop: "64px" }}>
        <Typography variant="h4" fontWeight="bold" p={3}>
          {title}
        </Typography>
        {children}
      </Box>
    </>
  );
};
