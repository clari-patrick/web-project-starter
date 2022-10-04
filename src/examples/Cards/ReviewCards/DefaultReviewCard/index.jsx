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
// prop-types is library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Icon from '@mui/material/Icon';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKAvatar from 'components/MKAvatar';
import MKTypography from 'components/MKTypography';

function DefaultReviewCard({ color, image, name, date, review, rating }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  return (
    <MKBox
      bgColor={color}
      borderRadius="xl"
      p={3}
      shadow={color === 'transparent' ? 'none' : 'md'}
      variant={color === 'transparent' ? 'contained' : 'gradient'}
    >
      {image && (
        <MKAvatar
          alt={name}
          shadow="md"
          size="lg"
          src={image}
          sx={{ mt: -5, mb: 1 }}
          variant="rounded"
        />
      )}
      <MKBox lineHeight={1}>
        <MKTypography
          color={color === 'transparent' || color === 'light' ? 'dark' : 'white'}
          display="block"
          fontWeight="bold"
          mb={0.5}
          variant={image ? 'button' : 'h6'}
        >
          {name}
        </MKTypography>
        <MKTypography
          color={color === 'transparent' || color === 'light' ? 'text' : 'white'}
          fontWeight="regular"
          lineHeight={1}
          sx={{ display: 'flex', alignItems: 'center' }}
          variant={image ? 'caption' : 'button'}
        >
          <Icon>schedule</Icon>&nbsp;
          {date}
        </MKTypography>
      </MKBox>
      <MKTypography
        color={color === 'transparent' || color === 'light' ? 'text' : 'white'}
        my={4}
        variant="body2"
      >
        &quot;{review}&quot;
      </MKTypography>
      <MKTypography
        color={color === 'transparent' || color === 'light' ? 'text' : 'white'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: 0.375,

          '& .material-icons-round': {
            ml: -0.375,
          },
        }}
        variant="h4"
      >
        {ratings[rating]}
      </MKTypography>
    </MKBox>
  );
}

// Setting default values for the props of DefaultReviewCard
DefaultReviewCard.defaultProps = {
  color: 'transparent',
  image: '',
};

// Typechecking props for the DefaultReviewCard
DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    'transparent',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default DefaultReviewCard;
