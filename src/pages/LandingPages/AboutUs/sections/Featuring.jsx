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
// Material Kit 2 React examples
import DefaultCounterCard from 'examples/Cards/CounterCards/DefaultCounterCard';

// Images
import coinbase from 'assets/images/logos/gray-logos/logo-coinbase.svg';
import nasa from 'assets/images/logos/gray-logos/logo-nasa.svg';
import netflix from 'assets/images/logos/gray-logos/logo-netflix.svg';
import pinterest from 'assets/images/logos/gray-logos/logo-pinterest.svg';
import spotify from 'assets/images/logos/gray-logos/logo-spotify.svg';
import vodafone from 'assets/images/logos/gray-logos/logo-vodafone.svg';

function Featuring() {
  return (
    <MKBox component="section" pb={8} pt={3}>
      <Container>
        <Grid spacing={3} sx={{ mb: 12 }} container>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="coinbase" component="img" opacity={0.7} src={coinbase} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="nasa" component="img" opacity={0.7} src={nasa} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="netflix" component="img" opacity={0.7} src={netflix} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="pinterest" component="img" opacity={0.7} src={pinterest} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="spotify" component="img" opacity={0.7} src={spotify} width="100%" />
          </Grid>
          <Grid lg={2} md={4} xs={6} item>
            <MKBox alt="vodafone" component="img" opacity={0.7} src={vodafone} width="100%" />
          </Grid>
        </Grid>
        <Grid justifyContent="center" sx={{ textAlign: 'center' }} container>
          <Grid md={3} xs={12} item>
            <DefaultCounterCard
              count={5234}
              description="Of “high-performing” level are led by a certified project manager"
              separator=","
              title="Projects"
            />
          </Grid>
          <Grid md={3} xs={12} item>
            <DefaultCounterCard
              count={3400}
              description="That meets quality standards required by our users"
              separator=","
              suffix="+"
              title="Hours"
            />
          </Grid>
          <Grid md={3} xs={12} item>
            <DefaultCounterCard
              count={24}
              description="Actively engage team members that finishes on time"
              suffix="/7"
              title="Support"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
