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
// ALerts page components
import SimpleAlerts from 'layouts/sections/attention-catchers/alerts/components/SimpleAlerts';
// Sections components
import BaseLayout from 'layouts/sections/components/BaseLayout';
import View from 'layouts/sections/components/View';

// ALerts page components code
import simpleAlertsCode from 'layouts/sections/attention-catchers/alerts/components/SimpleAlerts/code';

function Alerts() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/attention-catchers/alerts' },
        { label: 'Alerts' },
      ]}
      title="Alerts"
    >
      <View code={simpleAlertsCode} title="Simple alerts">
        <SimpleAlerts />
      </View>
    </BaseLayout>
  );
}

export default Alerts;