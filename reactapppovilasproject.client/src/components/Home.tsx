import * as React from "react";
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
// import AppAppBar from './modules/views/AppAppBar';
import withRoot from "./modules/withRoot.jsx";
//
//import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//import theme from "./theme.js";

// function withRoot<P extends JSX.IntrinsicAttributes>(
//   Component: React.ComponentType<P>
// ) {
//   function WithRoot(props: P) {
//     return (
//       <>
//         <ThemeProvider theme={theme}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...props} />
//         </ThemeProvider>
//       </>
//     );
//   }

//   return WithRoot;
// }

function Index() {
  return (
    <React.Fragment>
      <p>test</p>
      {/* <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter /> */}
    </React.Fragment>
  );
}

//export default withRoot(Index);
export default withRoot(Index);
