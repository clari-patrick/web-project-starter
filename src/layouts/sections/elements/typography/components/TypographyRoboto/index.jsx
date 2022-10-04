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
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function Typography() {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <MKTypography mb={6} variant="h2">
          Typography - Font Family Roboto
        </MKTypography>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Heading 1
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography variant="h1">H1 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Heading 2
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography variant="h2">H2 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Heading 3
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography variant="h3">H3 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Heading 4
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography variant="h4">H4 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Heading 5
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography variant="h5">H5 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Heading 6
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography variant="h6">H6 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Lead Text
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography color="text" variant="body1">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Paragraph
            </MKTypography>
          </Grid>

          <Grid sm={9} xs={12} item>
            <MKTypography color="text" variant="body2">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Small
            </MKTypography>
          </Grid>

          <Grid lineHeight={1} sm={9} xs={12} item>
            <MKTypography color="text" variant="button">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid alignItems="center" py={2} container>
          <Grid sm={3} xs={12} item>
            <MKTypography color="text" fontWeight="bold" textTransform="uppercase" variant="button">
              Tiny
            </MKTypography>
          </Grid>

          <Grid lineHeight={1} sm={9} xs={12} item>
            <MKTypography color="text" variant="caption">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Typography;
