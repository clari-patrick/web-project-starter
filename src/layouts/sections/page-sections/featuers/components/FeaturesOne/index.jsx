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
import Stack from '@mui/material/Stack';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid alignItems="center" container>
          <Grid lg={5} xs={12} item>
            <MKTypography my={1} variant="h3">
              Read More About Us
            </MKTypography>
            <MKTypography color="text" mb={2} variant="body2">
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            <MKTypography
              color="info"
              component="a"
              fontWeight="regular"
              href="#"
              sx={{
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',

                '& .material-icons-round': {
                  fontSize: '1.125rem',
                  transform: 'translateX(3px)',
                  transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                },

                '&:hover .material-icons-round, &:focus .material-icons-round': {
                  transform: 'translateX(6px)',
                },
              }}
              variant="body2"
            >
              More about us
              <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid lg={6} sx={{ ml: { xs: -2, lg: 'auto' }, mt: { xs: 6, lg: 0 } }} xs={12} item>
            <Stack>
              <MKBox alignItems="center" display="flex" p={2}>
                <MKBox
                  alignItems="center"
                  bgColor="info"
                  borderRadius="xl"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  height="3rem"
                  justifyContent="center"
                  variant="gradient"
                  width="3rem"
                >
                  <Icon fontSize="small">mediation</Icon>
                </MKBox>
                <MKTypography color="text" pl={2} variant="body2">
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </MKTypography>
              </MKBox>
              <MKBox alignItems="center" display="flex" p={2}>
                <MKBox
                  alignItems="center"
                  bgColor="info"
                  borderRadius="xl"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  height="3rem"
                  justifyContent="center"
                  variant="gradient"
                  width="3rem"
                >
                  <Icon fontSize="small">settings_overscan</Icon>
                </MKBox>
                <MKTypography color="text" pl={2} variant="body2">
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </MKTypography>
              </MKBox>
              <MKBox alignItems="center" display="flex" p={2}>
                <MKBox
                  alignItems="center"
                  bgColor="info"
                  borderRadius="xl"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  height="3rem"
                  justifyContent="center"
                  variant="gradient"
                  width="3rem"
                >
                  <Icon fontSize="small">token</Icon>
                </MKBox>
                <MKTypography color="text" pl={2} variant="body2">
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
