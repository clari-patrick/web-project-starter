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
// Tooltips and popovers page components
import Popovers from 'layouts/sections/attention-catchers/tooltips-popovers/components/Popovers';
import Tooltips from 'layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips';
// Sections components
import BaseLayout from 'layouts/sections/components/BaseLayout';
import View from 'layouts/sections/components/View';

// Tooltips and popovers page components code
import popoversCode from 'layouts/sections/attention-catchers/tooltips-popovers/components/Popovers/code';
import tooltipsCode from 'layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips/code';

function TooltipsPopovers() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/attention-catchers/tooltips-popovers' },
        { label: 'Tooltip & Popovers' },
      ]}
      title="Tooltip & Popovers"
    >
      <View code={popoversCode} title="Popovers">
        <Popovers />
      </View>
      <View code={tooltipsCode} title="Tooltips">
        <Tooltips />
      </View>
    </BaseLayout>
  );
}

export default TooltipsPopovers;