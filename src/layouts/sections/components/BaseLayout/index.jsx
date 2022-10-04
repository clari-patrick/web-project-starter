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
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import CenteredFooter from 'examples/Footers/CenteredFooter';
import Breadcrumbs from 'examples/Breadcrumbs';
// Routes
import routes from 'routes';

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <MKBox bgColor="white" display="flex" flexDirection="column" minHeight="100vh">
      <MKBox bgColor="white" py={0.25} shadow="sm">
        <DefaultNavbar
          action={{
            type: 'external',
            route: 'https://www.creative-tim.com/product/material-kit-react',
            label: 'free download',
            color: 'info',
          }}
          routes={routes}
          relative
          transparent
        />
      </MKBox>
      <Container sx={{ mt: 6 }}>
        <Grid flexDirection="column" justifyContent="center" mx="auto" xs={12} container item>
          <MKBox mb={3} width={{ xs: '100%', md: '50%', lg: '25%' }}>
            <Breadcrumbs routes={breadcrumb} />
          </MKBox>
          <MKTypography mb={1} variant="h3">
            {title}
          </MKTypography>
          {children}
        </Grid>
      </Container>
      <MKBox mt="auto">
        <CenteredFooter />
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  breadcrumb: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
