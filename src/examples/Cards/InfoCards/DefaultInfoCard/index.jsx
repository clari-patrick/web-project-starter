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
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Icon from '@mui/material/Icon';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function DefaultInfoCard({ color, icon, title, description, direction, small }) {
  return (
    <MKBox lineHeight={1} p={direction === 'center' ? 2 : 0} textAlign={direction}>
      {typeof icon === 'string' ? (
        <MKTypography
          color={color}
          display="block"
          variant={direction === 'center' ? 'h2' : 'h3'}
          textGradient
        >
          {' '}
          <Icon>{icon}</Icon>{' '}
        </MKTypography>
      ) : (
        icon
      )}
      <MKTypography
        display="block"
        fontWeight="bold"
        mb={1.5}
        mt={direction === 'center' ? 1 : 2}
        variant="5"
      >
        {title}
      </MKTypography>
      <MKTypography
        color="text"
        display="block"
        pl={direction === 'right' ? 6 : 0}
        pr={direction === 'left' ? 6 : 0}
        variant={small ? 'button' : 'body2'}
      >
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: 'info',
  direction: 'left',
  small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
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
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'center']),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
