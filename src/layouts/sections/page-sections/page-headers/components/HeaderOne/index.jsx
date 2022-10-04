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
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

// Images
import bgImage from 'assets/images/bg-coworking.jpeg';

function HeaderOne() {
  return (
    <MKBox component="header" height="100%" position="relative">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid alignItems="center" flexDirection="row" container>
            <MKTypography
              color="white"
              component={Link}
              fontWeight="regular"
              href="#"
              mr={2}
              py={0.8125}
              variant="button"
            >
              Material Design
            </MKTypography>
            <MKButton
              color="white"
              sx={{ display: { xs: 'block', lg: 'none' }, ml: 'auto' }}
              variant="outlined"
            >
              <MKBox className="fas fa-bars" color="white" component="i" />
            </MKButton>
            <MKBox
              component="ul"
              display={{ xs: 'none', lg: 'flex' }}
              mx="auto"
              my={0}
              p={0}
              sx={{ listStyle: 'none' }}
            >
              <MKBox component="li">
                <MKTypography
                  color="white"
                  component={Link}
                  fontWeight="regular"
                  href="#"
                  p={1}
                  variant="button"
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  color="white"
                  component={Link}
                  fontWeight="regular"
                  href="#"
                  p={1}
                  variant="button"
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  color="white"
                  component={Link}
                  fontWeight="regular"
                  href="#"
                  p={1}
                  variant="button"
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              component="ul"
              display={{ xs: 'none', lg: 'flex' }}
              m={0}
              p={0}
              sx={{ listStyle: 'none' }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  p={1}
                  variant="button"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox className="fab fa-twitter" color="white" component="i" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  p={1}
                  variant="button"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox className="fab fa-facebook" color="white" component="i" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  p={1}
                  variant="button"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox className="fab fa-instagram" color="white" component="i" />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        alignItems="center"
        display="flex"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid flexDirection="column" justifyContent="center" lg={6} md={7} xs={12} container item>
            <MKTypography
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
              variant="h1"
            >
              Material Kit
            </MKTypography>
            <MKTypography color="white" mr={6} opacity={0.8} pr={6} variant="body1">
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </MKTypography>
            <Stack direction="row" mt={3} spacing={1}>
              <MKButton color="white">Get Started</MKButton>
              <MKButton color="white" variant="text">
                Read more
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;
