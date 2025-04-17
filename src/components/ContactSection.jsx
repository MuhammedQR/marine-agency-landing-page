import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <Box  sx={{ py: 10, px: 2, backgroundColor: "#fff" }} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={4}
          sx={{
            maxWidth: 600,
            mx: "auto",
            p: 5,
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
            تواصل معنا الآن
          </Typography>
          <Typography align="center" sx={{ mb: 4 }} color="text.secondary">
            أرسل لنا طلبك وسيتواصل فريقنا معك بأسرع وقت.
          </Typography>

          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField label="الاسم الكامل" fullWidth />
            <TextField label="البريد الإلكتروني" type="email" fullWidth />
            <TextField label="تفاصيل الطلب" multiline rows={4} fullWidth />
            <Button type="submit" variant="contained" size="large">
              إرسال
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
