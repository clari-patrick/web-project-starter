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
import Grid from '@mui/material/Grid';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';
// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';
// Routes
import routes from 'routes';
import footerRoutes from 'footer.routes';

// Image
import bgImage from 'assets/images/illustrations/illustration-reset.jpg';

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          action={{
            type: 'external',
            route: 'https://www.creative-tim.com/product/material-kit-react',
            label: 'free download',
            color: 'info',
          }}
          routes={routes}
        />
      </MKBox>
      <Grid alignItems="center" spacing={3} container>
        <Grid lg={6} xs={12} item>
          <MKBox
            borderRadius="lg"
            display={{ xs: 'none', lg: 'flex' }}
            height="calc(100vh - 2rem)"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
            width="calc(100% - 2rem)"
          />
        </Grid>
        <Grid
          lg={6}
          md={7}
          ml={{ xs: 'auto', lg: 6 }}
          mr={{ xs: 'auto', lg: 6 }}
          sm={10}
          xl={4}
          xs={12}
          item
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mb={{ xs: 20, sm: 18, md: 20 }}
            mt={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
            shadow="lg"
          >
            <MKBox
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              mt={-3}
              mx={2}
              p={2}
              variant="gradient"
            >
              <MKTypography color="white" variant="h3">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography color="text" mb={3} variant="body2">
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form.
              </MKTypography>
              <MKBox autocomplete="off" component="form" method="post" width="100%">
                <Grid spacing={3} container>
                  <Grid md={6} xs={12} item>
                    <MKInput
                      InputLabelProps={{ shrink: true }}
                      label="Full Name"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid md={6} xs={12} item>
                    <MKInput
                      InputLabelProps={{ shrink: true }}
                      label="Email"
                      type="email"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <MKInput
                      InputLabelProps={{ shrink: true }}
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      rows={6}
                      variant="standard"
                      fullWidth
                      multiline
                    />
                  </Grid>
                </Grid>
                <Grid justifyContent="center" mb={2} mt={5} xs={12} container item>
                  <MKButton color="info" type="submit" variant="gradient">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox mt={6} pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
