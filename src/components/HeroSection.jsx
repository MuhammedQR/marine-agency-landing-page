import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box 
    dir="ltr"
    id="hero"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #0ea5e9)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "700px" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "800",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            mb: 2,
            fontFamily: "'Tajawal', sans-serif",
          }}
        >
          حلول الوكالة البحرية الحديثة
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "300",
            color: "rgba(255,255,255,0.85)",
            mb: 4,
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          نحن نسهّل حركة السفن التجارية في الموانئ الإماراتية بخدمات احترافية وسريعة 24/7 — تواصل معنا الآن لبدء تعاون استراتيجي.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "#facc15",
              color: "#0f172a",
              fontWeight: "bold",
              px: 4,
              "&:hover": {
                background: "#fcd34d",
              },
            }}
          >
            احجز استشارتك
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "white",
              color: "white",
              px: 4,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            تواصل معنا
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
