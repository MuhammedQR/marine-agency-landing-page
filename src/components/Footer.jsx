import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0f172a", color: "white", pt: 6, pb: 3 }}>
      <Stack spacing={1} alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Triple Seven Solutions L.L.C
        </Typography>
        <Typography variant="body2" color="gray">
          Mazyad Mall, Tower 2, Musaffah, Abu Dhabi
        </Typography>
        <Typography variant="body2">Email: info@777bs.ae | Phone: +971 50 219 2504</Typography>
        <Divider sx={{ width: "80%", my: 2, borderColor: "gray" }} />
        <Typography variant="caption" color="gray">
          جميع الحقوق محفوظة © 2025
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
