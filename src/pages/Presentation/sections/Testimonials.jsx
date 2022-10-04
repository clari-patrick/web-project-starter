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
import Divider from '@mui/material/Divider';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
// Material Kit 2 React examples
import DefaultReviewCard from 'examples/Cards/ReviewCards/DefaultReviewCard';

// Images
import appleLogo from 'assets/images/logos/gray-logos/logo-apple.svg';
import facebookLogo from 'assets/images/logos/gray-logos/logo-facebook.svg';
import nasaLogo from 'assets/images/logos/gray-logos/logo-nasa.svg';
import vodafoneLogo from 'assets/images/logos/gray-logos/logo-vodafone.svg';
import digitalOceanLogo from 'assets/images/logos/gray-logos/logo-digitalocean.svg';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          justifyContent="center"
          lg={6}
          sx={{ mx: 'auto', textAlign: 'center' }}
          xs={12}
          container
          item
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography color="info" mb={2} variant="h2" textGradient>
            1,679,477+ web developers
          </MKTypography>
          <MKTypography color="text" mb={2} variant="body1">
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>
        </Grid>
        <Grid spacing={3} sx={{ mt: 8 }} container>
          <Grid lg={4} md={6} xs={12} item>
            <DefaultReviewCard
              date="1 day ago"
              name="Nick Willever"
              rating={5}
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
            />
          </Grid>
          <Grid lg={4} md={6} xs={12} item>
            <DefaultReviewCard
              color="info"
              date="1 week ago"
              name="Shailesh Kushwaha"
              rating={5}
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
            />
          </Grid>
          <Grid lg={4} md={6} xs={12} item>
            <DefaultReviewCard
              date="3 weeks ago"
              name="Samuel Kamuli"
              rating={5}
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid justifyContent="center" spacing={3} container>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="Apple" component="img" opacity={0.6} src={appleLogo} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="Facebook" component="img" opacity={0.6} src={facebookLogo} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="Nasa" component="img" opacity={0.6} src={nasaLogo} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="Vodafone" component="img" opacity={0.6} src={vodafoneLogo} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox
              alt="DigitalOcean"
              component="img"
              opacity={0.6}
              src={digitalOceanLogo}
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
