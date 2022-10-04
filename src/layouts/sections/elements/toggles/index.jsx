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
// Toggles page components
import Toggle from 'layouts/sections/elements/toggles/components/Toggle';
import ToggleContext from 'layouts/sections/elements/toggles/components/ToggleContext';

// Toggles page components code
import toggleCode from 'layouts/sections/elements/toggles/components/Toggle/code';
import toggleContextCode from 'layouts/sections/elements/toggles/components/ToggleContext/code';

function Toggles() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/toggles' },
        { label: 'Toggles' },
      ]}
      title="Toggles"
    >
      <View code={toggleCode} title="Toggle">
        <Toggle />
      </View>
      <View code={toggleContextCode} title="Toggle context">
        <ToggleContext />
      </View>
    </BaseLayout>
  );
}

export default Toggles;