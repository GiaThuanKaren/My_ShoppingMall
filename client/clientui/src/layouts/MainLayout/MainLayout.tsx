import { createTheme, Paper, ThemeProvider } from "@mui/material";
import React from "react";
import { MainHeader } from "../../components";
import { UseGlobal } from "../../hooks";
interface Props {
  children: React.ReactNode;
}
function MainLayout({ children }: Props) {
  const {GlobalState}=UseGlobal();
  console.log("Change state Global",GlobalState.theme)
  const ThemeSystem = createTheme({
    palette: {
      mode: GlobalState.theme.theme == "dark" ? "dark" : "light",
    }, 
  });
  return (
    <>
      <ThemeProvider theme={ThemeSystem}>
        <Paper>
          <MainHeader />
          {children}
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
