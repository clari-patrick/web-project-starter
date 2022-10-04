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
// Material Kit 2 React examples
import DefaultCounterCard from 'examples/Cards/CounterCards/DefaultCounterCard';

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid lg={9} sx={{ mx: 'auto' }} xs={12} container item>
          <Grid md={4} xs={12} item>
            <DefaultCounterCard
              count={70}
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
              suffix="+"
              title="Coded Elements"
            />
          </Grid>
          <Grid display="flex" md={4} xs={12} item>
            <Divider orientation="vertical" sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }} />
            <DefaultCounterCard
              count={15}
              description="Mix the sections, change the colors and unleash your creativity"
              suffix="+"
              title="Design Blocks"
            />
            <Divider orientation="vertical" sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }} />
          </Grid>
          <Grid md={4} xs={12} item>
            <DefaultCounterCard
              count={4}
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
              title="Pages"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
