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
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            lg={4}
            mb={{ xs: 3, lg: 0 }}
            mr="auto"
            textAlign={{ xs: 'center', lg: 'left' }}
            xs={12}
            item
          >
            <MKTypography mb={{ xs: 2, lg: 3 }} textTransform="uppercase" variant="h6">
              Material Design
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              mb={3}
              pl={0}
              spacing={3}
              sx={{ listStyle: 'none' }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  fontWeight="regular"
                  href="https://www.creative-tim.com"
                  opacity={0.8}
                  rel="noreferrer"
                  target="_blank"
                  variant="button"
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  fontWeight="regular"
                  href="https://www.creative-tim.com/presentation"
                  opacity={0.8}
                  rel="noreferrer"
                  target="_blank"
                  variant="button"
                >
                  About
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  fontWeight="regular"
                  href="https://www.creative-tim.com/blog"
                  opacity={0.8}
                  rel="noreferrer"
                  target="_blank"
                  variant="button"
                >
                  Blog
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  fontWeight="regular"
                  href="https://www.creative-tim.com"
                  opacity={0.8}
                  rel="noreferrer"
                  target="_blank"
                  variant="button"
                >
                  Services
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography opacity={0.8} variant="button">
              Copyright © <script>document.write(new Date().getFullYear())</script>2021 Material
              Design by Creative Tim.
            </MKTypography>
          </Grid>
          <Grid lg={6} ml="auto" textAlign={{ xs: 'center', lg: 'right' }} xs={12} item>
            <MKTypography fontWeight="bold" mb={6} sx={{ fontSize: '1.125rem' }} variant="body1">
              The reward for getting on the stage is fame. The price of fame is you can&apos;t get
              off the stage.
            </MKTypography>
            <MKTypography
              color="dark"
              component={Link}
              href="#dribbble"
              mr={3}
              opacity={0.5}
              rel="noreferrer"
              target="_blank"
              variant="body2"
            >
              <i className="fab fa-dribbble" />
            </MKTypography>
            <MKTypography
              color="dark"
              component={Link}
              href="#twitter"
              mr={3}
              opacity={0.5}
              rel="noreferrer"
              target="_blank"
              variant="body2"
            >
              <i className="fab fa-twitter" />
            </MKTypography>
            <MKTypography
              color="dark"
              component={Link}
              href="#pinterest"
              mr={3}
              opacity={0.5}
              rel="noreferrer"
              target="_blank"
              variant="body2"
            >
              <i className="fab fa-pinterest" />
            </MKTypography>
            <MKTypography
              color="dark"
              component={Link}
              href="#github"
              opacity={0.5}
              rel="noreferrer"
              target="_blank"
              variant="body2"
            >
              <i className="fab fa-github" />
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
