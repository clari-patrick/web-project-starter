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
// Buttons page components
import ButtonsGradient from 'layouts/sections/elements/buttons/components/ButtonsGradient';
import ButtonsContained from 'layouts/sections/elements/buttons/components/ButtonsContained';
import ButtonsOutlined from 'layouts/sections/elements/buttons/components/ButtonsOutlined';
import ButtonsSizes from 'layouts/sections/elements/buttons/components/ButtonsSizes';
import ButtonsIconLeft from 'layouts/sections/elements/buttons/components/ButtonsIconLeft';
import ButtonsIconRight from 'layouts/sections/elements/buttons/components/ButtonsIconRight';

// Buttons page components code
import buttonsGradientCode from 'layouts/sections/elements/buttons/components/ButtonsGradient/code';
import buttonsContainedCode from 'layouts/sections/elements/buttons/components/ButtonsContained/code';
import buttonsOutlinedCode from 'layouts/sections/elements/buttons/components/ButtonsOutlined/code';
import buttonsSizesCode from 'layouts/sections/elements/buttons/components/ButtonsSizes/code';
import buttonsIconLeftCode from 'layouts/sections/elements/buttons/components/ButtonsIconLeft/code';
import buttonsIconRightCode from 'layouts/sections/elements/buttons/components/ButtonsIconRight/code';

function Buttons() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/buttons' },
        { label: 'Buttons' },
      ]}
      title="Buttons"
    >
      <View code={buttonsGradientCode} title="Buttons gradient">
        <ButtonsGradient />
      </View>
      <View code={buttonsContainedCode} title="Buttons contained">
        <ButtonsContained />
      </View>
      <View code={buttonsOutlinedCode} title="Buttons outlined">
        <ButtonsOutlined />
      </View>
      <View code={buttonsSizesCode} title="Buttons sizes">
        <ButtonsSizes />
      </View>
      <View code={buttonsIconLeftCode} title="Buttons icon left">
        <ButtonsIconLeft />
      </View>
      <View code={buttonsIconRightCode} title="Buttons icon right">
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  );
}

export default Buttons;
