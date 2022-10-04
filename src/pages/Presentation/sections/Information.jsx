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
// Material Kit 2 React examples
import RotatingCard from 'examples/Cards/RotatingCard';
import RotatingCardFront from 'examples/Cards/RotatingCard/RotatingCardFront';
import RotatingCardBack from 'examples/Cards/RotatingCard/RotatingCardBack';
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard';

// Images
import bgFront from 'assets/images/rotating-card-bg-front.jpeg';
import bgBack from 'assets/images/rotating-card-bg-back.jpeg';

function Information() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid alignItems="center" spacing={3} sx={{ mx: 'auto' }} xs={11} container item>
          <Grid lg={4} sx={{ mx: 'auto' }} xs={12} item>
            <RotatingCard>
              <RotatingCardFront
                description="All the MUI components that you need in a development have been re-design with the new look."
                icon="touch_app"
                image={bgFront}
                title={
                  <>
                    Feel the
                    <br />
                    Material Kit
                  </>
                }
              />
              <RotatingCardBack
                action={{
                  type: 'internal',
                  route: '/sections/page-sections/page-headers',
                  label: 'start with header',
                }}
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                image={bgBack}
                title="Discover More"
              />
            </RotatingCard>
          </Grid>
          <Grid lg={7} sx={{ ml: 'auto' }} xs={12} item>
            <Grid spacing={3} container>
              <Grid md={6} xs={12} item>
                <DefaultInfoCard
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
                  icon="content_copy"
                  title="Full Documentation"
                />
              </Grid>
              <Grid md={6} xs={12} item>
                <DefaultInfoCard
                  description="The world's most popular react components library for building user interfaces."
                  icon="flip_to_front"
                  title="MUI Ready"
                />
              </Grid>
            </Grid>
            <Grid spacing={3} sx={{ mt: { xs: 0, md: 6 } }} container>
              <Grid md={6} xs={12} item>
                <DefaultInfoCard
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                  icon="price_change"
                  title="Save Time & Money"
                />
              </Grid>
              <Grid md={6} xs={12} item>
                <DefaultInfoCard
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                  icon="devices"
                  title="Fully Responsive"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
