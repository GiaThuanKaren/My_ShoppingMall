import { Box, createTheme, Paper, ThemeProvider } from "@mui/material";
import React from "react";
import { MainHeader } from "../../components";
import { UseGlobal } from "../../hooks";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
interface Props {
  children: React.ReactNode;
}
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});
function MainLayout({ children }: Props) {
  const { GlobalState } = UseGlobal();
  // let pallet = GlobalState.theme.theme == " dark" ? "light" : "dark";
  console.log("Change state Global", GlobalState.theme);
  // console.log(pallet)  ;
  // const ThemeSystem = createTheme({
  //   palette:{
  //     mode : GlobalState.theme.theme
  //   }
  // });
  console.log("Change state Global 1", GlobalState.theme);
  const ThemeSystem = createTheme(
    getDesignTokens(GlobalState.theme.theme)
  );
  return (
    <>
      <ThemeProvider theme={ThemeSystem}>
        <Paper>
          <MainHeader />
          <Box sx={{ minHeight: "100vh" }}>{children}</Box>
          {/* <BottomNavigation showLabels>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation> */}
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
