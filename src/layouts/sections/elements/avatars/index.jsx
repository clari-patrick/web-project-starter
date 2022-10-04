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
// Avatars page components
import AvatarGroup from 'layouts/sections/elements/avatars/components/AvatarGroup';
import AvatarSize from 'layouts/sections/elements/avatars/components/AvatarSize';

// Avatars page components code
import avatarGroupCode from 'layouts/sections/elements/avatars/components/AvatarGroup/code';
import avatarSizeCode from 'layouts/sections/elements/avatars/components/AvatarSize/code';

function Avatars() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/avatars' },
        { label: 'Avatars' },
      ]}
      title="Avatars"
    >
      <View code={avatarGroupCode} title="Avatar Group">
        <AvatarGroup />
      </View>
      <View code={avatarSizeCode} title="Avatar Size">
        <AvatarSize />
      </View>
    </BaseLayout>
  );
}

export default Avatars;
