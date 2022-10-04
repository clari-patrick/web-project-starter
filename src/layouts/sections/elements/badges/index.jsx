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
// Badges page components
import BadgesGradient from 'layouts/sections/elements/badges/components/BadgesGradient';
import BadgesSimple from 'layouts/sections/elements/badges/components/BadgesSimple';
import BadgesSimpleRounded from 'layouts/sections/elements/badges/components/BadgesSimpleRounded';

// Badges page components code
import badgesGradientCode from 'layouts/sections/elements/badges/components/BadgesGradient/code';
import badgesSimpleCode from 'layouts/sections/elements/badges/components/BadgesSimple/code';
import badgesSimpleRoundedCode from 'layouts/sections/elements/badges/components/BadgesSimpleRounded/code';

function Badges() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/badges' },
        { label: 'Badges' },
      ]}
      title="Badges"
    >
      <View code={badgesGradientCode} title="Badges gradient">
        <BadgesGradient />
      </View>
      <View code={badgesSimpleCode} title="Badges simple">
        <BadgesSimple />
      </View>
      <View code={badgesSimpleRoundedCode} title="Badges simple rounded">
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;
