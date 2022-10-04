/* eslint-disable react/jsx-no-duplicate-props */
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
import MKTypography from 'components/MKTypography';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';

// Images
import macbook from 'assets/images/macbook.png';

function Newsletter() {
  return (
    <MKBox component="section" my={6} pt={6}>
      <Container>
        <Grid alignItems="center" container>
          <Grid md={6} sx={12} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }} item>
            <MKTypography variant="h4">Be the first to see the news</MKTypography>
            <MKTypography color="text" mb={3} variant="body2">
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </MKTypography>
            <Grid spacing={1} container>
              <Grid xs={8} item>
                <MKInput label="Email Here..." type="email" fullWidth />
              </Grid>
              <Grid xs={4} item>
                <MKButton color="info" sx={{ height: '100%' }} variant="gradient">
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid md={5} sx={{ ml: 'auto' }} xs={12} item>
            <MKBox position="relative">
              <MKBox alt="macbook" component="img" src={macbook} width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
