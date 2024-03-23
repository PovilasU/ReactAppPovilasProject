import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import backgroundImage from "../../../assets/hero.webp";

const backgroundImage1 =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        //  backgroundImage: `/static/themes/onepirate/productHeroWonder.png)`,
        // src="/static/themes/onepirate/productHeroWonder.png"
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Povilas Urbonas
      </Typography>
      <Typography color="inherit" align="center" variant="h5" marked="center">
        Full-Stack Developer
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        {/* Enjoy secret offers up to -70% off the best luxury hotels every Sunday. */}
        Technologies: JavaScript, TypeScript, ReactJS, ASP.NET, CSS, SASS,
        Node.js, SQL, Git
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button> */}
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Latest projects
      </Typography>
    </ProductHeroLayout>
  );
}
