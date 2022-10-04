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
import MKButton from 'components/MKButton';

function ButtonsOutlined() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <Stack alignItems="flex-end" direction="row" spacing={1}>
            <MKButton color="primary" variant="outlined">
              primary
            </MKButton>
            <MKButton color="secondary" variant="outlined">
              secondary
            </MKButton>
            <MKButton color="info" variant="outlined">
              info
            </MKButton>
            <MKButton color="success" variant="outlined">
              success
            </MKButton>
            <MKButton color="warning" variant="outlined">
              warning
            </MKButton>
            <MKButton color="error" variant="outlined">
              error
            </MKButton>
            <MKButton color="light" variant="outlined">
              light
            </MKButton>
            <MKButton color="dark" variant="outlined">
              dark
            </MKButton>
            <MKButton color="white" variant="outlined">
              White
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsOutlined;
