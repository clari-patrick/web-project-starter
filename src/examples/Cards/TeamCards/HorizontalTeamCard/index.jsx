/**
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
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function HorizontalTeamCard({ image, name, position, description }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid lg={4} md={6} sx={{ mt: -6 }} xs={12} item>
          <MKBox pb={1} pt={2} px={2} width="100%">
            <MKBox
              alt={name}
              borderRadius="md"
              component="img"
              shadow="lg"
              src={image}
              width="100%"
            />
          </MKBox>
        </Grid>
        <Grid lg={8} md={6} sx={{ my: 'auto' }} xs={12} item>
          <MKBox lineHeight={1} pb={2.5} pl={{ xs: 4, lg: 1 }} pr={4} pt={{ xs: 1, lg: 2.5 }}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography color={position.color} mb={1} variant="h6">
              {position.label}
            </MKTypography>
            <MKTypography color="text" variant="body2">
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light',
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
