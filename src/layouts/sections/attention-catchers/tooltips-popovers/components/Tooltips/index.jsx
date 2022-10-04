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
import Tooltip from '@mui/material/Tooltip';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKButton from 'components/MKButton';

function Tooltips() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <Stack direction="row" spacing={1}>
            <Tooltip placement="top" title="Tooltip on top">
              <MKButton color="info" variant="gradient">
                tooltip on top
              </MKButton>
            </Tooltip>
            <Tooltip placement="right" title="Tooltip on right">
              <MKButton color="info" variant="gradient">
                tooltip on right
              </MKButton>
            </Tooltip>
            <Tooltip placement="bottom" title="Tooltip on bottom">
              <MKButton color="info" variant="gradient">
                tooltip on bottom
              </MKButton>
            </Tooltip>
            <Tooltip placement="left" title="Tooltip on left">
              <MKButton color="info" variant="gradient">
                tooltip on left
              </MKButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tooltips;
