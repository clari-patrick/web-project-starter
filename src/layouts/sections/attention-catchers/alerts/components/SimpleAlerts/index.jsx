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
import MKAlert from 'components/MKAlert';

function SimpleAlerts() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid lg={10} mx="auto" xs={12} container item>
          <Grid xs={12} item>
            <MKAlert color="primary">A simple primary alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="secondary">A simple secondary alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="success">A simple success alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="error">A simple error alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="warning">A simple warning alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="info">A simple info alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="light">A simple light alert—check it out!</MKAlert>
          </Grid>
          <Grid xs={12} item>
            <MKAlert color="dark">A simple dark alert—check it out!</MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SimpleAlerts;
