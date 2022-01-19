import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#1AA3E9",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".banner": {
          background: "url(/img/banner-bg.png) no-repeat center",
          backgroundSize: "cover",
          height: "calc( 100vh - 64px )",
          display: "flex!important",
          alignItems: "center",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 48,
          fontFamily: "Poppins",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#ffffff",
          color: theme.palette.primary.main,
        }),
      },
    },
  },
});
