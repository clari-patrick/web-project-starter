/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';
// About Us page sections
import Information from 'pages/LandingPages/AboutUs/sections/Information';
import Team from 'pages/LandingPages/AboutUs/sections/Team';
import Featuring from 'pages/LandingPages/AboutUs/sections/Featuring';
import Newsletter from 'pages/LandingPages/AboutUs/sections/Newsletter';
// Routes
import routes from 'routes';
import footerRoutes from 'footer.routes';

// Images
import bgImage from 'assets/images/bg-about-us.jpg';

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'default',
        }}
        routes={routes}
        light
        transparent
      />
      <MKBox
        minHeight="75vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
        width="100%"
      >
        <Container>
          <Grid
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            lg={8}
            sx={{ mx: 'auto', textAlign: 'center' }}
            xs={12}
            container
            item
          >
            <MKTypography
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
              variant="h1"
            >
              Work with an amazing design
            </MKTypography>
            <MKTypography color="white" mb={3} mt={1} opacity={0.8} variant="body1">
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton>
            <MKTypography color="white" mb={1} mt={8} variant="h6">
              Find us on
            </MKTypography>
            <MKBox alignItems="center" display="flex" justifyContent="center">
              <MKTypography color="white" component="a" href="#" mr={3} variant="body1">
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography color="white" component="a" href="#" mr={3} variant="body1">
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography color="white" component="a" href="#" mr={3} variant="body1">
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography color="white" component="a" href="#" variant="body1">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox mt={6} pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
