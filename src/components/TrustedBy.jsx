import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const logos = [
  {
    name: "AD Ports",
    src: "/Picture4-removebg-preview.png",
  },
  {
    name: "DP World",
    src: "/Picture5-removebg-preview.png",
  },
  {
    name: "Maersk",
    src: "/Picture6-removebg-preview.png",
  },
  {
    name: "MSC",
    src: "/Picture7-removebg-preview.png",
  },
  // {
  //   name: "COSCO",
  //   src: "/Picture4-removebg-preview.png",
  // },
];

const TrustedBy = () => {
  return (
    <Box id="trusted" sx={{ py: 10, px: 3 }}>
      <Typography variant="h6" color="text.secondary" align="center">
        شركات نعتز بثقتها
      </Typography>
      <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
        شركاؤنا في النجاح
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: "center" }}>
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                maxWidth: "100%",
                height: "80px",
                objectFit: "contain",
                filter: "grayscale(1)",
                opacity: 0.8,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustedBy;
