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
import Stack from '@mui/material/Stack';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKButton from 'components/MKButton';

function ButtonsGradient() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <Stack alignItems="flex-end" direction="row" spacing={1}>
            <MKButton color="primary" variant="gradient">
              primary
            </MKButton>
            <MKButton color="secondary" variant="gradient">
              secondary
            </MKButton>
            <MKButton color="info" variant="gradient">
              info
            </MKButton>
            <MKButton color="success" variant="gradient">
              success
            </MKButton>
            <MKButton color="warning" variant="gradient">
              warning
            </MKButton>
            <MKButton color="error" variant="gradient">
              error
            </MKButton>
            <MKButton color="light" variant="gradient">
              light
            </MKButton>
            <MKButton color="dark" variant="gradient">
              dark
            </MKButton>
            <MKButton color="white" variant="gradient">
              White
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsGradient;
