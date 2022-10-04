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
// react-router-dom components
import { Link } from 'react-router-dom';
// @mui material components
import Icon from '@mui/material/Icon';
import MuiLink from '@mui/material/Link';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function FilledInfoCard({ variant, color, icon, title, description, action }) {
  const buttonStyles = {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',

    '& .material-icons-round': {
      fontSize: '1.125rem',
      transform: `translateX(3px)`,
      transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
    },

    '&:hover .material-icons-round, &:focus .material-icons-round': {
      transform: `translateX(6px)`,
    },
  };

  let iconColor = color;

  if (variant === 'gradient' && color !== 'light') {
    iconColor = 'white';
  } else if (variant === 'gradient' && color === 'light') {
    iconColor = 'dark';
  }

  return (
    <MKBox
      bgColor={variant === 'contained' ? 'grey-100' : color}
      borderRadius="xl"
      display={{ xs: 'block', md: 'flex' }}
      pb={3}
      pt={3.5}
      px={3}
      variant={variant}
    >
      <MKTypography
        color={iconColor}
        display="block"
        mt={-0.625}
        textGradient={variant === 'contained'}
        variant="h3"
      >
        {typeof icon === 'string' ? <Icon>{icon}</Icon> : icon}
      </MKTypography>
      <MKBox lineHeight={1} pl={{ xs: 0, md: 2 }} pt={{ xs: 3, md: 0 }}>
        <MKTypography
          color={variant === 'contained' || color === 'light' ? 'dark' : 'white'}
          display="block"
          fontWeight="bold"
          mb={1}
          variant="5"
        >
          {title}
        </MKTypography>
        <MKTypography
          color={variant === 'contained' || color === 'light' ? 'text' : 'white'}
          display="block"
          mb={2}
          variant="body2"
        >
          {description}
        </MKTypography>
        {action && action.type === 'external' ? (
          <MKTypography
            color={variant === 'contained' ? color : 'white'}
            component={MuiLink}
            fontWeight="regular"
            href={action.route}
            rel="noreferrer"
            sx={buttonStyles}
            target="_blank"
            variant="body2"
          >
            {action.label} <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
          </MKTypography>
        ) : null}
        {action && action.type === 'internal' ? (
          <MKTypography
            color={variant === 'contained' ? color : 'white'}
            component={Link}
            fontWeight="regular"
            sx={buttonStyles}
            to={action.route}
            variant="body2"
          >
            {action.label} <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
          </MKTypography>
        ) : null}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
  variant: 'contained',
  color: 'info',
  action: false,
};

// Typechecking props for the FilledInfoCard
FilledInfoCard.propTypes = {
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
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(['external', 'internal']).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default FilledInfoCard;
