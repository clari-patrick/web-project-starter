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
// react-router-dom components
import { Link } from 'react-router-dom';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKBadge from 'components/MKBadge';
import MKTypography from 'components/MKTypography';
// Presentation page components
import ExampleCard from 'pages/Presentation/components/ExampleCard';
// Data
import data from 'pages/Presentation/sections/data/designBlocksData';

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid key={title} spacing={3} sx={{ mb: 10 }} container>
      <Grid lg={3} xs={12} item>
        <MKBox pb={{ xs: 2, lg: 6 }} position="sticky" top="100px">
          <MKTypography fontWeight="bold" mb={1} variant="h3">
            {title}
          </MKTypography>
          <MKTypography color="secondary" fontWeight="regular" mb={1} pr={2} variant="body2">
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid lg={9} xs={12} item>
        <Grid spacing={3} container>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid key={name} md={4} sx={{ mb: 2 }} xs={12} item>
              <Link to={pro ? '/' : route}>
                <ExampleCard count={count} image={image} name={name} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          alignItems="center"
          flexDirection="column"
          lg={6}
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
          xs={12}
          container
          item
        >
          <MKBadge
            badgeContent="Infinite combinations"
            color="info"
            sx={{ mb: 2 }}
            variant="contained"
            container
          />
          <MKTypography fontWeight="bold" variant="h2">
            Huge collection of sections
          </MKTypography>
          <MKTypography color="text" variant="body1">
            We have created multiple options for you to put together and customise into pixel
            perfect pages.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
