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
import Breadcrumbs from 'examples/Breadcrumbs';
// Sections components
import BaseLayout from 'layouts/sections/components/BaseLayout';
import View from 'layouts/sections/components/View';

// Breadcrumbs page components code
import breadcrumbsCode from 'layouts/sections/elements/breadcrumbs/code';

function BreadcrumbsEl() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/breadcrumbs' },
        { label: 'Breadcrumbs' },
      ]}
      title="Breadcrumbs"
    >
      <View code={breadcrumbsCode} title="Breadcrumbs">
        <MKBox bgColor="white" component="section" py={8}>
          <Container>
            <Grid lg={10} mx="auto" spacing={2} xs={12} container item>
              <Grid xs={12} item>
                <Breadcrumbs
                  routes={[{ label: 'Home', route: '/sections/elements/breadcrumbs' }]}
                />
              </Grid>
              <Grid xs={12} item>
                <Breadcrumbs
                  routes={[
                    { label: 'Home', route: '/sections/elements/breadcrumbs' },
                    { label: 'Library' },
                  ]}
                />
              </Grid>
              <Grid xs={12} item>
                <Breadcrumbs
                  routes={[
                    { label: 'Home', route: '/sections/elements/breadcrumbs' },
                    { label: 'Library', route: '/sections/elements/breadcrumbs' },
                    { label: 'Data' },
                  ]}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default BreadcrumbsEl;
