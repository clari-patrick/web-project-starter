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
import data from 'pages/Presentation/sections/data/pagesData';

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid key={name} md={6} sx={{ mb: { xs: 3, lg: 0 } }} xs={12} item>
      <Link to={route}>
        <ExampleCard display="grid" image={image} minHeight="auto" name={name} />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
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
            badgeContent="boost creativity"
            color="info"
            sx={{ mb: 2 }}
            variant="contained"
            container
          />
          <MKTypography fontWeight="bold" variant="h2">
            With our coded pages
          </MKTypography>
          <MKTypography color="text" variant="body1">
            The easiest way to get started is to use one of our
            <br /> pre-built example pages.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid spacing={3} container>
          <Grid lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }} xs={12} item>
            <Grid spacing={3} container>
              {renderData}
            </Grid>
          </Grid>
          <Grid lg={3} xs={12} item>
            <MKBox pb={{ xs: 2, lg: 6 }} position="sticky" top="100px">
              <MKTypography fontWeight="bold" mb={1} variant="h3">
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </MKTypography>
              <MKTypography color="secondary" fontWeight="regular" mb={1} pr={2} variant="body2">
                These is just a small selection of the multiple possibitilies you have. Focus on the
                business, not on the design.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
