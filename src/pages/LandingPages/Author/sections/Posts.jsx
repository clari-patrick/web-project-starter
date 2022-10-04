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
// Material Kit 2 React components
import TransparentBlogCard from 'examples/Cards/BlogCards/TransparentBlogCard';
import BackgroundBlogCard from 'examples/Cards/BlogCards/BackgroundBlogCard';

// Images
import post1 from 'assets/images/examples/testimonial-6-2.jpg';
import post2 from 'assets/images/examples/testimonial-6-3.jpg';
import post3 from 'assets/images/examples/blog-9-4.jpg';
import post4 from 'assets/images/examples/blog2.jpg';

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid lg={6} xs={12} container item>
          <MKTypography mb={6} variant="h3">
            Check my latest blogposts
          </MKTypography>
        </Grid>
        <Grid spacing={3} container>
          <Grid lg={3} sm={6} xs={12} item>
            <TransparentBlogCard
              action={{
                type: 'internal',
                route: '/pages/blogs/author',
                color: 'info',
                label: 'read more',
              }}
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              image={post1}
              title="Rover raised $65 million"
            />
          </Grid>
          <Grid lg={3} sm={6} xs={12} item>
            <TransparentBlogCard
              action={{
                type: 'internal',
                route: '/pages/blogs/author',
                color: 'info',
                label: 'read more',
              }}
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              image={post2}
              title="MateLabs machine learning"
            />
          </Grid>
          <Grid lg={3} sm={6} xs={12} item>
            <TransparentBlogCard
              action={{
                type: 'internal',
                route: '/pages/blogs/author',
                color: 'info',
                label: 'read more',
              }}
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              image={post3}
              title="MateLabs machine learning"
            />
          </Grid>
          <Grid lg={3} sm={6} xs={12} item>
            <BackgroundBlogCard
              action={{
                type: 'internal',
                route: '/pages/blogs/author',
                label: 'read more',
              }}
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              image={post4}
              title="Flexible work hours"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
