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
import MuiAvatarGroup from '@mui/material/AvatarGroup';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKAvatar from 'components/MKAvatar';

// Images
import team1 from 'assets/images/team-1.jpg';
import team2 from 'assets/images/team-2.jpg';
import team3 from 'assets/images/team-3.jpg';
import team4 from 'assets/images/team-4.jpg';

function AvatarGroup() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <MuiAvatarGroup spacing={12}>
            <MKAvatar alt="team 1" size="lg" src={team1} />
            <MKAvatar alt="team 2" size="lg" src={team2} />
            <MKAvatar alt="team 3" size="lg" src={team3} />
            <MKAvatar alt="team 4" size="lg" src={team4} />
          </MuiAvatarGroup>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarGroup;
