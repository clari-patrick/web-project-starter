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
// Modals page components
import SimpleModal from 'layouts/sections/attention-catchers/modals/components/SimpleModal';
// Sections components
import BaseLayout from 'layouts/sections/components/BaseLayout';
import View from 'layouts/sections/components/View';

// Modals page components code
import simpleModalCode from 'layouts/sections/attention-catchers/modals/components/SimpleModal/code';

function Modals() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/attention-catchers/modals' },
        { label: 'Modals' },
      ]}
      title="Modals"
    >
      <View code={simpleModalCode} title="Simple modal">
        <SimpleModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;