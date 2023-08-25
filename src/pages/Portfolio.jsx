import { Box, Container, Grid, Typography } from "@mui/material";
import PortfolioCard from "../components/PortfolioCard";
import React from "react";

const Portfolio = () => {
  return (
    <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Portfolio
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={4} mb={4}>
          <PortfolioCard
            title="Simple Social Media (Frontend only)"
            url="https://severus7.github.io/sample-socmed/"
            alt="simple-socmed"
            image="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            description="This simple social media is made with Reactjs and MUI. You can change the theme to light or dark mode"
          />
        </Grid>
        <Grid item xs={4}>
          <PortfolioCard
            title="Spotify Landing Page Clone (Frontend only)"
            alt="simple-socmed"
            url="https://severus7.github.io/spotify-landing-page-clone/"
            image="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            description="This is a clone of Spotify's landing page. This is made with Reactjs and MUI"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
