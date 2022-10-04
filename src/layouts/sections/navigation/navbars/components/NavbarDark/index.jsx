/* eslint-disable no-param-reassign */
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
// Material Kit 2 React components
import MKBox from 'components/MKBox';
// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
// Routes
import routes from 'routes';

function NavbarDark() {
  return (
    <MKBox bgColor="dark" py={0.25} shadow="sm" variant="gradient">
      <DefaultNavbar
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        routes={routes}
        center
        light
        relative
        transparent
      />
    </MKBox>
  );
}

export default NavbarDark;
