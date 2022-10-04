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
import MKSocialButton from 'components/MKSocialButton';
// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard';
// Presentation page sections
import Counters from 'pages/Presentation/sections/Counters';
import Information from 'pages/Presentation/sections/Information';
import DesignBlocks from 'pages/Presentation/sections/DesignBlocks';
import Pages from 'pages/Presentation/sections/Pages';
import Testimonials from 'pages/Presentation/sections/Testimonials';
import Download from 'pages/Presentation/sections/Download';
// Presentation page components
import BuiltByDevelopers from 'pages/Presentation/components/BuiltByDevelopers';
// Routes
import routes from 'routes';
import footerRoutes from 'footer.routes';

// Images
import bgImage from 'assets/images/bg-presentation.jpg';

function Presentation() {
  return (
    <>
      <DefaultNavbar
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        routes={routes}
        sticky
      />
      <MKBox
        minHeight="75vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
        width="100%"
      >
        <Container>
          <Grid justifyContent="center" lg={7} mx="auto" xs={12} container item>
            <MKTypography
              color="white"
              mb={1}
              mt={-6}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
              variant="h1"
            >
              Material Kit 2 React{' '}
            </MKTypography>
            <MKTypography
              color="white"
              mt={1}
              px={{ xs: 6, lg: 12 }}
              textAlign="center"
              variant="body1"
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
              developers around the world.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid spacing={3} container>
            <Grid lg={4} xs={12} item>
              <FilledInfoCard
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                  label: "Let's start",
                }}
                color="info"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                icon="flag"
                title="Getting Started"
                variant="gradient"
              />
            </Grid>
            <Grid lg={4} xs={12} item>
              <FilledInfoCard
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/datepicker/',
                  label: 'Read more',
                }}
                color="info"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                icon="precision_manufacturing"
                title="Plugins"
              />
            </Grid>
            <Grid lg={4} xs={12} item>
              <FilledInfoCard
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                  label: 'Read more',
                }}
                color="info"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                icon="apps"
                title="Components"
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pb={6} pt={18}>
          <Container>
            <Grid spacing={3} container>
              <Grid lg={5} ml="auto" sx={{ textAlign: { xs: 'center', lg: 'left' } }} xs={12} item>
                <MKTypography fontWeight="bold" mb={0.5} variant="h4">
                  Thank you for your support!
                </MKTypography>
                <MKTypography color="text" variant="body1">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                lg={5}
                mr={{ xs: 0, lg: 'auto' }}
                my={{ xs: 5, lg: 'auto' }}
                sx={{ textAlign: { xs: 'center', lg: 'right' } }}
                xs={12}
                item
              >
                <MKSocialButton
                  color="twitter"
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  sx={{ mr: 1 }}
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  color="facebook"
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  sx={{ mr: 1 }}
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  color="pinterest"
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox mt={6} pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
