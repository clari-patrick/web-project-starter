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
import Tooltip from '@mui/material/Tooltip';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

// Images
import bgImage from 'assets/images/shapes/waves-white.svg';

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        bgColor="dark"
        borderRadius="xl"
        position="relative"
        sx={{ overflow: 'hidden' }}
        variant="gradient"
      >
        <MKBox
          alt="pattern-lines"
          component="img"
          left={0}
          opacity={0.2}
          position="absolute"
          src={bgImage}
          top={0}
          width="100%"
          zIndex={1}
        />
        <Container sx={{ position: 'relative', zIndex: 2, py: 12 }}>
          <Grid justifyContent="center" md={7} mx="auto" textAlign="center" xs={12} container item>
            <MKTypography color="white" variant="h3">
              Do you love this awesome
            </MKTypography>
            <MKTypography color="white" mb={1} variant="h3">
              UI Kit for ReactJS &amp; MUI?
            </MKTypography>
            <MKTypography color="white" mb={6} variant="body2">
              Cause if you do, it can be yours for FREE. Hit the button below to navigate to
              Creative Tim where you can find the Design System in HTML. Start a new project or give
              an old Bootstrap project a new look!
            </MKTypography>
            <MKButton
              color="info"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              size="large"
              sx={{ mb: 2 }}
              variant="gradient"
            >
              Download Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid mx="auto" xs={6} container item>
          <MKBox textAlign="center">
            <MKTypography mb={3} mt={6} variant="h3">
              Available on these technologies
            </MKTypography>
            <Grid justifyContent="center" spacing={3} container>
              <Grid lg={2} xs={4} item>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid lg={2} xs={4} item>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="#"
                    opacity={0.5}
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid lg={2} xs={4} item>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="#"
                    opacity={0.5}
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid lg={2} xs={4} item>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="#"
                    opacity={0.5}
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid lg={2} xs={4} item>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid lg={2} xs={4} item>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="#"
                    opacity={0.5}
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
