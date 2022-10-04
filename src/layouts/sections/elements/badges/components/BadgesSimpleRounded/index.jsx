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
import MKBadge from 'components/MKBadge';

function BadgesSimpleRounded() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <Stack alignItems="flex-end" direction="row" spacing={0.5}>
            <MKBadge
              badgeContent="primary"
              color="primary"
              variant="contained"
              circular
              container
            />
            <MKBadge
              badgeContent="secondary"
              color="secondary"
              variant="contained"
              circular
              container
            />
            <MKBadge
              badgeContent="success"
              color="success"
              variant="contained"
              circular
              container
            />
            <MKBadge badgeContent="error" color="error" variant="contained" circular container />
            <MKBadge
              badgeContent="warning"
              color="warning"
              variant="contained"
              circular
              container
            />
            <MKBadge badgeContent="info" color="info" variant="contained" circular container />
            <MKBadge badgeContent="light" color="light" variant="contained" circular container />
            <MKBadge badgeContent="dark" color="dark" variant="contained" circular container />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BadgesSimpleRounded;
