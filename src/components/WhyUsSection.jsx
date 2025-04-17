import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { FaBolt, FaUserShield, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt size={32} />,
    title: "سرعة في التخليص",
    desc: "نعمل بأقصى سرعة لتخليص السفن بأقل وقت ممكن لتوفير الوقت والمال.",
  },
  {
    icon: <FaUserShield size={32} />,
    title: "خبرة محلية",
    desc: "فريقنا يعرف تفاصيل الموانئ الإماراتية مما يسهل الإجراءات.",
  },
  {
    icon: <FaHandshake size={32} />,
    title: "دعم مخصص",
    desc: "نوفر تواصل مباشر مع مسؤول الخدمة وتحديثات لحظية.",
  },
];

const WhyUsSection = () => {
  return (
    <Box id="whyus" sx={{ py: 10, backgroundColor: "#fff", px: 3 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        لماذا تختارنا؟
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
        لأننا ندمج بين السرعة، الخبرة، والدعم الحقيقي لتحقيق نتائج ملموسة.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                height: "100%",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ color: "#0ea5e9", mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">{feature.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUsSection;
