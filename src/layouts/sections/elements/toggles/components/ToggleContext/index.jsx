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
import { useState } from 'react';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function ToggleContext() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(!checked);

  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid justifyContent="center" mx="auto" xs={4} container item>
          <MKBox alignItems="center" display="flex">
            <Switch checked={checked} onChange={toggleSwitch} />
            <MKBox lineHeight={0.5} ml={2}>
              <MKTypography display="block" fontWeight="bold" variant="button">
                Remember me
              </MKTypography>
              <MKTypography color="text" fontWeight="regular" variant="caption">
                Be sure that you will always be logged in.
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ToggleContext;
