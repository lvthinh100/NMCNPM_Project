import React from "react";
import { Grid, Container, Typography, Divider, Box } from "@mui/material";

import PaymentForm from "../components/PaymentForm";

export default function Payment() {
  return (
    <Container>
      <Grid container sx={{ padding: "40px 0" }}>
        <Grid item xs={7}>
          <Box sx={{ mr: "20px" }}>
            <Typography variant="h3" sx={{ mb: "20px" }}>
              Shipping Information
            </Typography>
            <PaymentForm />
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          sx={{ bgcolor: "primary.main", mr: "-2px" }}
          flexItem
        />
        <Grid item xs={5}>
          <Typography variant="h3">Cart</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}