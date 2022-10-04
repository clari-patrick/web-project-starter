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

import React, { forwardRef } from 'react';
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// Material Kit 2 React components
import MKTypography from 'components/MKTypography';

// Custom styles for MKProgress
import MKProgressRoot from 'components/MKProgress/MKProgressRoot';

const MKProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <MKTypography color="text" fontWeight="medium" variant="button">
        {value}%
      </MKTypography>
    )}
    <MKProgressRoot
      {...rest}
      ref={ref}
      ownerState={{ color, value, variant }}
      value={value}
      variant="determinate"
    />
  </>
));

MKProgress.displayName = 'MKProgress';

// Setting default values for the props of MKProgress
MKProgress.defaultProps = {
  variant: 'contained',
  color: 'info',
  value: 0,
  label: false,
};

// Typechecking props for the MKProgress
MKProgress.propTypes = {
  variant: PropTypes.oneOf(['contained', 'gradient']),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MKProgress;
