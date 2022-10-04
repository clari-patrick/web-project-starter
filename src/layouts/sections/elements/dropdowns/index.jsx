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
// Dropdowns page components
import DropdownAndDropup from 'layouts/sections/elements/dropdowns/components/DropdownAndDropup';

// Dropdowns page components code
import dropdownAndDropupCode from 'layouts/sections/elements/dropdowns/components/DropdownAndDropup/code';

function Dropdowns() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/dropdowns' },
        { label: 'Dropdowns' },
      ]}
      title="Dropdowns"
    >
      <View code={dropdownAndDropupCode} title="Dropdown and Dropup">
        <DropdownAndDropup />
      </View>
    </BaseLayout>
  );
}

export default Dropdowns;