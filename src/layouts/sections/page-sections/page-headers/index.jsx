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
// Sections components
import BaseLayout from 'layouts/sections/components/BaseLayout';
import View from 'layouts/sections/components/View';
// PageHeaders page components
import HeaderOne from 'layouts/sections/page-sections/page-headers/components/HeaderOne';

// PageHeaders page components code
import headerOneCode from 'layouts/sections/page-sections/page-headers/components/HeaderOne/code';

function PageHeaders() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/page-sections/page-headers' },
        { label: 'Page Headers' },
      ]}
      title="Page Headers"
    >
      <View code={headerOneCode} height="40rem" title="Header 1">
        <HeaderOne />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
