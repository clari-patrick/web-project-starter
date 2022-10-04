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
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
// @mui icons
import CloseIcon from '@mui/icons-material/Close';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

function SimpleModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid justifyContent="center" lg={10} mx="auto" xs={12} container item>
          <MKButton color="info" variant="gradient" onClick={toggleModal}>
            Launch Demo Modal
          </MKButton>
        </Grid>
        <Modal open={show} sx={{ display: 'grid', placeItems: 'center' }} onClose={toggleModal}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              position="relative"
              shadow="xl"
              width="500px"
            >
              <MKBox alginItems="center" display="flex" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Your modal title</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: 'pointer' }} onClick={toggleModal} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={2}>
                <MKTypography color="secondary" fontWeight="regular" variant="body2">
                  Society has put up so many boundaries, so many limitations on what&apos;s right
                  and wrong that it&apos;s almost impossible to get a pure thought out.
                  <br />
                  <br />
                  It&apos;s like a little kid, a little boy, looking at colors, and no one told him
                  what colors are good, before somebody tells you you shouldn&apos;t like pink
                  because that&apos;s for girls, or you&apos;d instantly become a gay two-year-old.
                </MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton color="dark" variant="gradient" onClick={toggleModal}>
                  close
                </MKButton>
                <MKButton color="info" variant="gradient">
                  save changes
                </MKButton>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default SimpleModal;
