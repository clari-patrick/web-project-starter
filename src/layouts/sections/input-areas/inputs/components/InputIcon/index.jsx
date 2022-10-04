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
import InputAdornment from '@mui/material/InputAdornment';
// @mui icons
import SearchIcon from '@mui/icons-material/Search';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKInput from 'components/MKInput';

function InputIcon() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid lg={4} mx="auto" py={1} xs={12} container item>
          <MKInput
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            placeholder="Search"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputIcon;
