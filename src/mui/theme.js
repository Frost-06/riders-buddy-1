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
          maxWidth: "1600px!important",
        },
        ".MuiMobileStepper-dots": {
          flex: "1 100%",
          display: "flex",
          justifyContent: "center",
        },
        ".searchbox": {
          width: 676,
          height: 67,
          "& > div": {
            height: "100%",
            borderRadius: 16,
            "&:not(.noshadow)": {
              boxShadow: "0px 4px 8px rgba(0,0,0,0.08)",
            },
            marginRight: 19,
            borderColor: "#D9DBE9",
            backgroundColor: "#ffffff",
          },
        },
        ".category-card": {
          fontFamily: "Poppins",
          position: "relative",
          width: 500,
          minHeight: 162,
          backgroundColor: "#ffffff",
          padding: 32,
          borderBottom: "7px solid transparent",
          "&:hover": {
            cursor: "pointer",
            h2: {
              color: "#1AA3E9",
            },
            borderBottomColor: "#1AA3E9",
          },
          h2: {
            fontWeight: 700,
            fontSize: 32,
          },
          p: {
            fontSize: 12,
            maxWidth: "70%",
          },
        },
        ".category-image": {
          position: "absolute",
          right: 0,
          bottom: -2,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          color: "#ffffff",
          fontSize: 15,
          fontWeight: 500,
          textTransform: "none",
          padding: "20px 32px",
        },
        outlined: ({ theme }) => ({
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 48,
          fontFamily: "Poppins",
          color: "#14142B",
        },
        h2: {
          fontSize: 32,
          color: "#14142B",
          fontWeight: "bold",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingBottom: 32,
          paddingTop: 32,
          backgroundColor: "#ffffff",
          position: "relative",
          zIndex: 10,
          color: theme.palette.primary.main,
        }),
      },
    },
  },
});
