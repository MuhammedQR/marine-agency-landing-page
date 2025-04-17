import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaShip, FaRegClock, FaHandshake } from "react-icons/fa";

const services = [
  {
    title: "تخليص معاملات السفن",
    description: "إدارة كاملة لحركة السفن وتخليصها من وإلى الموانئ الإماراتية.",
    icon: <FaShip size={36} />,
  },
  {
    title: "خدمة على مدار الساعة",
    description: "دعم احترافي 24/7 لجميع الخدمات البحرية الطارئة والمجدولة.",
    icon: <FaRegClock size={36} />,
  },
  {
    title: "شراكات استراتيجية",
    description: "علاقات راسخة مع الموانئ والشركات لتسريع العمليات.",
    icon: <FaHandshake size={36} />,
  },
];

const FeaturesSection = () => {
  return (
    <Box id="features" sx={{ py: 10, px: 3, backgroundColor: "#f9fafb" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        خدماتنا المتميزة
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {services.map((service, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ color: "#0ea5e9", mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
