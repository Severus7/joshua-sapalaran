import {
  Box,
  Link,
  List,
  ListItem,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import myImage from "../assets/josh.jpg";

import LinkItem from "../components/LinkItem";

function Home() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    typography: {
      fontFamily: ['"Poppins"'].join(","),
    },
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Grid container>
          <Grid item lg={6} md={4} xs={12}>
            <Box
              sx={{
                position: {
                  md: "fixed",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "100vh",
                  width: "100vh",
                }}
                alt="Joshua Saps"
                src={myImage}
              />
            </Box>
          </Grid>

          <Grid
            item
            lg={6}
            md={12}
            xs={12}
            sx={{
              padding: {
                lg: 15,
                md: 10,
                xs: 7,
              },
            }}
          >
            <Typography variant="h6" fontWeight={300} mb={5}>
              Joshua Sapalaran
            </Typography>

            <Typography variant="h2" fontWeight={600}>
              Engineer
            </Typography>
            <Typography variant="h2" fontWeight={600}>
              Designer
            </Typography>
            <Typography variant="h2" fontWeight={600}>
              Creator
            </Typography>

            <Typography variant="body1" component="p" fontWeight={200} mt={5}>
              Through code, design, and innovation, I engineer solutions, craft
              compelling visual narratives, and bring imaginative ideas into
              fruition. My work resides at the crossroads of technology and
              creativity, where I strive to drive meaningful innovation.
            </Typography>
            <Typography variant="body1" component="p" fontWeight={500} mt={5}>
              Engineering tomorrow's tech.
            </Typography>
            <Typography variant="body1" component="p" fontWeight={500}>
              Designing the extraordinary.
            </Typography>
            <Typography variant="body1" component="p" fontWeight={500} mb={5}>
              Creating innovation today.
            </Typography>

            <Grid container>
              <Grid item xs={6}>
                <List>
                  <ListItem disablePadding>
                    <Typography variant="body2" mb={2} fontWeight={800}>
                      PROJECTS
                    </Typography>
                  </ListItem>
                  <LinkItem pageName="Testimonials" url="testimonials" />
                  <LinkItem pageName="Portfolio" url="portfolio" />
                </List>
              </Grid>
              <Grid item xs={6}>
                <List>
                  <ListItem disablePadding>
                    <Typography variant="body2" mb={2} fontWeight={800}>
                      SOCIAL
                    </Typography>
                  </ListItem>
                  <LinkItem
                    pageName="LinkedIn"
                    url="https://www.linkedin.com/in/joshua-sapalaran/"
                  />
                  <LinkItem
                    pageName="Instagram"
                    url="https://instagram.com/venturewithjosh"
                  />
                  <LinkItem
                    pageName="Facebook"
                    url="https://www.facebook.com/jsaps.seven"
                  />
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
