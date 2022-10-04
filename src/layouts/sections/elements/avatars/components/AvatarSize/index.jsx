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
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKAvatar from 'components/MKAvatar';

// Images
import team4 from 'assets/images/team-4.jpg';

function AvatarSize() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <Stack alignItems="flex-end" direction="row" spacing={1}>
            <MKAvatar alt="xs" size="xs" src={team4} />
            <MKAvatar alt="sm" size="sm" src={team4} />
            <MKAvatar alt="md" size="md" src={team4} />
            <MKAvatar alt="lg" size="lg" src={team4} />
            <MKAvatar alt="xl" size="xl" src={team4} />
            <MKAvatar alt="xxl" size="xxl" src={team4} />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarSize;
