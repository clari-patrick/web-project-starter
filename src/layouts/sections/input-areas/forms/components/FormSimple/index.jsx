/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState } from 'react';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" lg={7} mx="auto" textAlign="center" xs={10} container item>
          <MKTypography mb={1} variant="h3">
            Contact Us
          </MKTypography>
        </Grid>
        <Grid lg={7} sx={{ mx: 'auto' }} xs={12} container item>
          <MKBox autocomplete="off" component="form" method="post" width="100%">
            <MKBox p={3}>
              <Grid spacing={3} container>
                <Grid md={6} xs={12} item>
                  <MKInput label="First Name" variant="standard" fullWidth />
                </Grid>
                <Grid md={6} xs={12} item>
                  <MKInput label="Last Name" variant="standard" fullWidth />
                </Grid>
                <Grid xs={12} item>
                  <MKInput label="Email Address" type="email" variant="standard" fullWidth />
                </Grid>
                <Grid xs={12} item>
                  <MKInput label="Your Message" rows={6} variant="standard" fullWidth multiline />
                </Grid>
                <Grid alignItems="center" ml={-1} xs={12} item>
                  <Switch checked={checked} onChange={handleChecked} />
                  <MKTypography
                    color="text"
                    fontWeight="regular"
                    ml={-1}
                    sx={{ cursor: 'pointer', userSelect: 'none' }}
                    variant="button"
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </MKTypography>
                  <MKTypography
                    color="dark"
                    component="a"
                    fontWeight="regular"
                    href="#"
                    variant="button"
                  >
                    Terms and Conditions
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid justifyContent="center" my={2} xs={12} container item>
                <MKButton color="dark" type="submit" variant="gradient" fullWidth>
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
