//import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://picsum.photos/400/300"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Dev Magic Full Stack App
              </Typography>
              <Typography variant="h5">
                {
                  "This ASP.NET skills demonstration project showcases a full-stack application "
                }

                {
                  "integrating ReactJS and Angular on the frontend, SQL with Entity Framework on the backend, and comprehensive unit testing."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://picsum.photos/600/300"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Project2
              </Typography>
              <Typography variant="h5">
                {
                  "This ASP.NET skills demonstration project showcases a full-stack application "
                }

                {
                  "integrating ReactJS and Angular on the frontend, SQL with Entity Framework on the backend, and comprehensive unit testing."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://picsum.photos/500/300"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Project3
              </Typography>
              <Typography variant="h5">
                {
                  "This ASP.NET skills demonstration project showcases a full-stack application "
                }

                {
                  "integrating ReactJS and Angular on the frontend, SQL with Entity Framework on the backend, and comprehensive unit testing."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
