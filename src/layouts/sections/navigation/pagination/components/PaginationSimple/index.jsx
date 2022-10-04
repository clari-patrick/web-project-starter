/* eslint-disable no-param-reassign */
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
import React from 'react';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
// Material Kit 2 React components
import MKPagination from 'components/MKPagination';

function PaginationSimple() {
  return (
    <Container sx={{ height: '100%' }}>
      <Grid height="100%" justifyContent="center" lg={6} mx="auto" xs={12} container item>
        <MKPagination>
          <MKPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </MKPagination>
          <MKPagination active item>
            1
          </MKPagination>
          <MKPagination item>2</MKPagination>
          <MKPagination item>3</MKPagination>
          <MKPagination item>4</MKPagination>
          <MKPagination item>5</MKPagination>
          <MKPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </MKPagination>
        </MKPagination>
      </Grid>
    </Container>
  );
}

export default PaginationSimple;