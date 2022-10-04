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
// Features page components
import FeaturesOne from 'layouts/sections/page-sections/featuers/components/FeaturesOne';

// Features page components code
import featuresOneCode from 'layouts/sections/page-sections/featuers/components/FeaturesOne/code';

function Features() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/page-sections/features' },
        { label: 'Features' },
      ]}
      title="Features"
    >
      <View code={featuresOneCode} title="Features 1">
        <FeaturesOne />
      </View>
    </BaseLayout>
  );
}

export default Features;
