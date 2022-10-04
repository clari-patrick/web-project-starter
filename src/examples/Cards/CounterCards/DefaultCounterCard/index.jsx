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
// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';
// react-countup component
import CountUp from 'react-countup';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function DefaultCounterCard({ color, count, title, description, ...rest }) {
  return (
    <MKBox lineHeight={1} p={2} textAlign="center">
      <MKTypography color={color} variant="h1" textGradient>
        <CountUp duration={1} end={count} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography mb={1} mt={2} variant="h5">
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography color="text" variant="body2">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: 'info',
  description: '',
  title: '',
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;