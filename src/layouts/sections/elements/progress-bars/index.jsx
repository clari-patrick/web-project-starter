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
// ProgressBars page components
import ProgressSimple from 'layouts/sections/elements/progress-bars/components/ProgressSimple';

// ProgressBars page components code
import progressSimpleCode from 'layouts/sections/elements/progress-bars/components/ProgressSimple/code';

function ProgressBars() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/progress-bars' },
        { label: 'Progress Bars' },
      ]}
      title="Progress Bars"
    >
      <View code={progressSimpleCode} title="Progress bar simple">
        <ProgressSimple />
      </View>
    </BaseLayout>
  );
}

export default ProgressBars;