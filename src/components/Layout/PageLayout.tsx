import { Typography } from "@mui/material";
import Header from "../Header";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({ children, title }: IProps) => {
  return (
    <>
      <Header />
      <Typography variant="h4" fontWeight="bold" p={3}>
        {title}
      </Typography>
      {children}
    </>
  );
};
