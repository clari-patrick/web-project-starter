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
// react-router-dom components
import { Link } from 'react-router-dom';
// @mui material components
import MuiLink from '@mui/material/Link';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';

function RotatingCard({ color, image, title, description, action }) {
  return (
    <MKBox
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      display="flex"
      height="100%"
      justifyContent="center"
      left={0}
      position="absolute"
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85)
          )}, url(${image})`,
        backgroundSize: 'cover',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
      }}
      top={0}
      width="100%"
      zIndex={5}
    >
      <MKBox lineHeight={1} pb={2} pt={12} px={2} textAlign="center">
        <MKTypography color="white" variant="h3" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography color="white" opacity={0.8} variant="body2">
          {description}
        </MKTypography>
        {action && (
          <MKBox mb={2} mt={4} mx="auto" width="50%">
            {action.type === 'external' ? (
              <MKButton
                color="white"
                component={MuiLink}
                href={action.route}
                rel="noreferrer"
                size="small"
                target="_blank"
                fullWidth
              >
                {action.label}
              </MKButton>
            ) : (
              <MKButton color="white" component={Link} size="small" to={action.route} fullWidth>
                {action.label}
              </MKButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCard
RotatingCard.defaultProps = {
  color: 'info',
};

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(['external', 'internal']).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default RotatingCard;
