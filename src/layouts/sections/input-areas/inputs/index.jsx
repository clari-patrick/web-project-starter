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
// Inputs page components
import InputDynamic from 'layouts/sections/input-areas/inputs/components/InputDynamic';
import InputStatic from 'layouts/sections/input-areas/inputs/components/InputStatic';
import InputOutlined from 'layouts/sections/input-areas/inputs/components/InputOutlined';
import InputIcon from 'layouts/sections/input-areas/inputs/components/InputIcon';
import InputSuccess from 'layouts/sections/input-areas/inputs/components/InputSuccess';
import InputError from 'layouts/sections/input-areas/inputs/components/InputError';
import InputDisabled from 'layouts/sections/input-areas/inputs/components/InputDisabled';

// Inputs page components code
import inputDynamicCode from 'layouts/sections/input-areas/inputs/components/InputDynamic/code';
import inputStaticCode from 'layouts/sections/input-areas/inputs/components/InputStatic/code';
import inputOutlinedCode from 'layouts/sections/input-areas/inputs/components/InputOutlined/code';
import inputIconCode from 'layouts/sections/input-areas/inputs/components/InputIcon/code';
import inputSuccessCode from 'layouts/sections/input-areas/inputs/components/InputSuccess/code';
import inputErrorCode from 'layouts/sections/input-areas/inputs/components/InputError/code';
import inputDisabledCode from 'layouts/sections/input-areas/inputs/components/InputDisabled/code';

function Inputs() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/input-areas/inputs' },
        { label: 'Inputs' },
      ]}
      title="Inputs"
    >
      <View code={inputDynamicCode} title="Input dynamic">
        <InputDynamic />
      </View>
      <View code={inputStaticCode} title="Input static">
        <InputStatic />
      </View>
      <View code={inputOutlinedCode} title="Input outlined">
        <InputOutlined />
      </View>
      <View code={inputIconCode} title="Input icon">
        <InputIcon />
      </View>
      <View code={inputSuccessCode} title="Input success">
        <InputSuccess />
      </View>
      <View code={inputErrorCode} title="Input error">
        <InputError />
      </View>
      <View code={inputDisabledCode} title="Input disabled">
        <InputDisabled />
      </View>
    </BaseLayout>
  );
}

export default Inputs;
