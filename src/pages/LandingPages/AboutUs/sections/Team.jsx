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
// Material Kit 2 React examples
import HorizontalTeamCard from 'examples/Cards/TeamCards/HorizontalTeamCard';

// Images
import team1 from 'assets/images/team-5.jpg';
import team2 from 'assets/images/bruce-mars.jpg';
import team3 from 'assets/images/ivana-squares.jpg';
import team4 from 'assets/images/ivana-square.jpg';

function Team() {
  return (
    <MKBox
      bgColor="dark"
      component="section"
      mx={-2}
      position="relative"
      px={{ xs: 2, lg: 0 }}
      py={6}
      variant="gradient"
    >
      <Container>
        <Grid container>
          <Grid md={8} sx={{ mb: 6 }} xs={12} item>
            <MKTypography color="white" variant="h3">
              The Executive Team
            </MKTypography>
            <MKTypography color="white" opacity={0.8} variant="body2">
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid spacing={3} container>
          <Grid lg={6} xs={12} item>
            <MKBox mb={1}>
              <HorizontalTeamCard
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                image={team1}
                name="Emma Roberts"
                position={{ color: 'info', label: 'UI Designer' }}
              />
            </MKBox>
          </Grid>
          <Grid lg={6} xs={12} item>
            <MKBox mb={1}>
              <HorizontalTeamCard
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                image={team2}
                name="William Pearce"
                position={{ color: 'info', label: 'Boss' }}
              />
            </MKBox>
          </Grid>
          <Grid lg={6} xs={12} item>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                image={team3}
                name="Ivana Flow"
                position={{ color: 'info', label: 'Athlete' }}
              />
            </MKBox>
          </Grid>
          <Grid lg={6} xs={12} item>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                image={team4}
                name="Marquez Garcia"
                position={{ color: 'info', label: 'JS Developer' }}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
