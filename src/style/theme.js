// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
//   direction: "rtl",
  
  typography: {
    fontFamily: "'Tajawal', sans-serif",
  },
  palette: {
    primary: {
      main: "#0ea5e9",
    },
    background: {
      default: "#f9fafb",
      
    },
  },
});



export default theme;
