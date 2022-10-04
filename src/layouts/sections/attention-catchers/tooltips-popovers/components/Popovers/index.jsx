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

import React, { useState } from 'react';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

function Popovers() {
  const [popover, setPopover] = useState(null);
  const [popoverOrigin, setPopoverOrigin] = useState({
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  });

  const togglePopover = ({ currentTarget }) => setPopover(currentTarget);
  const closePopover = () => setPopover(null);

  const popoverTemplate = (
    <Popover anchorEl={popover} open={Boolean(popover)} onClose={closePopover} {...popoverOrigin}>
      <MKBox bgColor="white" lineHeight={0.8} px={2} py={1.5}>
        <MKTypography color="text" variant="caption">
          That&apos;s the main thing people are controlled
          <br /> by! Thoughts- their perception of themselves!
        </MKTypography>
      </MKBox>
    </Popover>
  );

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid justifyContent="center" container>
          <Stack direction="row" spacing={1}>
            <MKButton
              color="info"
              variant="gradient"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                  },
                  transformOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                });
              }}
            >
              popover on top
            </MKButton>
            <MKButton
              color="info"
              variant="gradient"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: 'center',
                    horizontal: 'right',
                  },
                  transformOrigin: {
                    vertical: 'center',
                    horizontal: 'left',
                  },
                });
              }}
            >
              popover on right
            </MKButton>
            <MKButton
              color="info"
              variant="gradient"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: 'center',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'center',
                    horizontal: 'right',
                  },
                });
              }}
            >
              popover on left
            </MKButton>
            <MKButton
              color="info"
              variant="gradient"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                  },
                });
              }}
            >
              popover on bottom
            </MKButton>
          </Stack>
        </Grid>
        {popoverTemplate}
      </Container>
    </MKBox>
  );
}

export default Popovers;
