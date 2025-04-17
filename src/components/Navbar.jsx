import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";

const links = [
  { label: "الرئيسية", to: "hero" },
  { label: "الخدمات", to: "features" },
  { label: "شركاؤنا", to: "trusted" },
  { label: "لماذا نحن؟", to: "whyus" },
  { label: "تواصل معنا", to: "contact" },
];
const NavButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  "&:hover": {
    color: "#facc15",
  },
  "&.active": {
    color: "#facc15",
    borderBottom: "2px solid #facc15",
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [elevate, setElevate] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) setElevate(true);
    else setElevate(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={elevate ? 4 : 0}
        sx={{
          background: elevate
            ? "linear-gradient(to left, #0ea5e9, #0f172a)"
            : "transparent",
          transition: "0.3s",
          backdropFilter: elevate ? "blur(8px)" : "none",
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", px: { xs: 2, md: 14 } }}
        >
         
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {links.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-80}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      "&:hover": { color: "#facc15" },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#facc15",
                    color: "#0f172a",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#fde047",
                    },
                  }}
                >
                  احجز الآن
                </Button>
              </Link>
            </Box>
          )}

          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
          <img
            src="/logo777.png"
            alt="Triple Seven Logo"
            style={{ height: "60px", objectFit: "contain" }}
          />
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 3 }}>
          <List>
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={handleDrawerToggle}
              >
                <ListItem button>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={handleDrawerToggle}
            >
              <ListItem button>
                <ListItemText
                  primary="احجز الآن"
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "#0ea5e9",
                  }}
                />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
