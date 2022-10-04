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
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

// Images
import bgImage from 'assets/images/examples/blog2.jpg';

function Contact() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            mb={6}
            shadow="xl"
            sx={{ overflow: 'hidden' }}
            width="100%"
          >
            <Grid spacing={2} container>
              <Grid
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: 'cover',
                }}
                xs={12}
                item
              >
                <MKBox
                  alignItems="center"
                  display="flex"
                  height="100%"
                  justifyContent="center"
                  width="100%"
                >
                  <MKBox my="auto" pl={{ xs: 6, sm: 12 }} pr={6} py={6}>
                    <MKTypography color="white" mb={1} variant="h3">
                      Contact Information
                    </MKTypography>
                    <MKTypography color="white" mb={3} opacity={0.8} variant="body2">
                      Fill up the form and our Team will get back to you within 24 hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography color="white" variant="button">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        color="white"
                        component="span"
                        fontWeight="regular"
                        ml={2}
                        opacity={0.8}
                        variant="button"
                      >
                        (+40) 772 100 200
                      </MKTypography>
                    </MKBox>
                    <MKBox color="white" display="flex" p={1}>
                      <MKTypography color="white" variant="button">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        color="white"
                        component="span"
                        fontWeight="regular"
                        ml={2}
                        opacity={0.8}
                        variant="button"
                      >
                        hello@creative-tim.com
                      </MKTypography>
                    </MKBox>
                    <MKBox color="white" display="flex" p={1}>
                      <MKTypography color="white" variant="button">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        color="white"
                        component="span"
                        fontWeight="regular"
                        ml={2}
                        opacity={0.8}
                        variant="button"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton color="white" size="large" variant="text" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: '1.25rem' }} />
                      </MKButton>
                      <MKButton color="white" size="large" variant="text" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: '1.25rem' }} />
                      </MKButton>
                      <MKButton color="white" size="large" variant="text" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: '1.25rem' }} />
                      </MKButton>
                      <MKButton color="white" size="large" variant="text" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: '1.25rem' }} />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid lg={7} xs={12} item>
                <MKBox component="form" method="post" p={2}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography mb={1} variant="h2">
                      Say Hi!
                    </MKTypography>
                    <MKTypography color="text" mb={2} variant="body1">
                      We&apos;d like to talk with you.
                    </MKTypography>
                  </MKBox>
                  <MKBox pb={3} pt={0.5} px={3}>
                    <Grid container>
                      <Grid mb={6} pr={1} xs={12} item>
                        <MKInput
                          InputLabelProps={{ shrink: true }}
                          label="My name is"
                          placeholder="Full Name"
                          variant="standard"
                          fullWidth
                        />
                      </Grid>
                      <Grid mb={6} pr={1} xs={12} item>
                        <MKInput
                          InputLabelProps={{ shrink: true }}
                          label="I'm looking for"
                          placeholder="What you love"
                          variant="standard"
                          fullWidth
                        />
                      </Grid>
                      <Grid mb={6} pr={1} xs={12} item>
                        <MKInput
                          InputLabelProps={{ shrink: true }}
                          label="Your message"
                          placeholder="I want to say that..."
                          rows={6}
                          variant="standard"
                          fullWidth
                          multiline
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      justifyContent="flex-end"
                      md={6}
                      ml="auto"
                      textAlign="right"
                      xs={12}
                      container
                      item
                    >
                      <MKButton color="info" variant="gradient">
                        Send Message
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
