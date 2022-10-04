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
// react-router components
import { Link } from 'react-router-dom';
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';

function CenteredBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <MKBox borderRadius="lg" mt={-3} mx={2} position="relative">
        <MKBox
          alt={title}
          borderRadius="lg"
          component="img"
          position="relative"
          src={image}
          width="100%"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          height="100%"
          left={0}
          position="absolute"
          shadow="md"
          sx={{
            backgroundImage: `url(${image})`,
            transform: 'scale(0.94)',
            filter: 'blur(12px)',
            backgroundSize: 'cover',
          }}
          top={0}
          width="100%"
        />
      </MKBox>
      <MKBox mt={-1} p={3} textAlign="center">
        <MKTypography display="inline" fontWeight="regular" textTransform="capitalize" variant="h5">
          {title}
        </MKTypography>
        <MKBox mb={3} mt={1}>
          <MKTypography color="text" component="p" variant="body2">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === 'external' ? (
          <MKButton
            color={action.color ? action.color : 'dark'}
            component={MuiLink}
            href={action.route}
            rel="noreferrer"
            size="small"
            target="_blank"
            variant="gradient"
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            color={action.color ? action.color : 'dark'}
            component={Link}
            size="small"
            to={action.route}
            variant="gradient"
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(['external', 'internal']).isRequired,
    route: PropTypes.string.isRequired,
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
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
