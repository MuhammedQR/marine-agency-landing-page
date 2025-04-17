import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import TrustedBy from "./components/TrustedBy";
import WhyUsSection from "./components/WhyUsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
       <Container maxWidth="lg" sx={{ px: { xs: 0 } }}>

          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <TrustedBy />
          <WhyUsSection />
          <ContactSection />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
