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
import Icon from '@mui/material/Icon';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKAvatar from 'components/MKAvatar';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

// Images
import profilePicture from 'assets/images/bruce-mars.jpg';

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid justifyContent="center" mx="auto" xs={12} container item>
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar alt="Burce Mars" shadow="xl" size="xxl" src={profilePicture} />
          </MKBox>
          <Grid justifyContent="center" py={6} container>
            <Grid md={7} mx={{ xs: 'auto', sm: 6, md: 1 }} xs={12} item>
              <MKBox alignItems="center" display="flex" justifyContent="space-between" mb={1}>
                <MKTypography variant="h3">Michael Roven</MKTypography>
                <MKButton color="info" size="small" variant="outlined">
                  Follow
                </MKButton>
              </MKBox>
              <Grid mb={3} spacing={3} container>
                <Grid item>
                  <MKTypography component="span" fontWeight="bold" variant="body2">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography color="text" component="span" variant="body2">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" fontWeight="bold" variant="body2">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography color="text" component="span" variant="body2">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" fontWeight="bold" variant="body2">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography color="text" component="span" variant="body2">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography color="text" fontWeight="light" variant="body1">
                Decisions: If you can&apos;t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain avoidance is creating an
                illusion of equality). Choose the path that leaves you more equanimous. <br />
                <MKTypography
                  color="info"
                  component="a"
                  fontWeight="light"
                  href="#"
                  mt={3}
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    alignItems: 'center',

                    '& .material-icons-round': {
                      transform: `translateX(3px)`,
                      transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                    },

                    '&:hover .material-icons-round, &:focus .material-icons-round': {
                      transform: `translateX(6px)`,
                    },
                  }}
                  variant="body1"
                >
                  More about me <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
