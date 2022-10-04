/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
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
import Icon from '@mui/material/Icon';
import MuiLink from '@mui/material/Link';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function TransparentBlogCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',

    '& .material-icons, .material-icons-round,': {
      transform: `translateX(2px)`,
      transition: 'transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)',
    },

    '&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round':
      {
        transform: `translateX(6px)`,
      },
  };

  const imageTemplate = (
    <MKBox borderRadius="lg" position="relative">
      <MKBox
        alt={title}
        borderRadius="lg"
        component="img"
        position="relative"
        shadow="md"
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
  );

  return (
    <Card
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        overflow: 'visible',
      }}
    >
      {action.type === 'internal' ? (
        <Link to={action.route}>{imageTemplate}</Link>
      ) : (
        <MuiLink href={action.route} rel="noreferrer" target="_blank">
          {imageTemplate}
        </MuiLink>
      )}
      <MKBox pb={3} pt={2}>
        {action.type === 'internal' ? (
          <Link sx={cardActionStyles} to={action.route}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} rel="noreferrer" sx={cardActionStyles} target="_blank">
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <MKTypography color="text" component="p" mb={3} variant="body2">
          {description}
        </MKTypography>
        {action.type === 'internal' ? (
          <MKTypography
            color={action.color}
            component={Link}
            fontWeight="regular"
            sx={cardActionStyles}
            textTransform="capitalize"
            to={action.route}
            variant="body2"
          >
            {action.label}
            <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
          </MKTypography>
        ) : (
          <MKTypography
            color={action.color}
            component={MuiLink}
            fontWeight="regular"
            href={action.route}
            rel="noreferrer"
            sx={cardActionStyles}
            target="_blank"
            textTransform="capitalize"
            variant="body2"
          >
            {action.label}
            <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
          </MKTypography>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(['external', 'internal']),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      'inherit',
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'light',
      'dark',
      'text',
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;
