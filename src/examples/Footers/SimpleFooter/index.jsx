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
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

// Material Kit 2 React base styles
import typography from 'assets/theme/base/typography';

function SimpleFooter({ company, links, light }) {
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        lineHeight={1}
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
      >
        <Link href={link.href} target="_blank">
          <MKTypography color={light ? 'white' : 'text'} fontWeight="regular" variant="button">
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        alignItems="center"
        display="flex"
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
        width="100%"
      >
        <MKBox
          alignItems="center"
          color={light ? 'white' : 'text'}
          display="flex"
          flexWrap="wrap"
          fontSize={size.sm}
          justifyContent="center"
        >
          &copy; {new Date().getFullYear()}, made with
          <MKBox color={light ? 'white' : 'text'} fontSize={size.md} mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MKBox>
          by
          <Link href={href} target="_blank">
            <MKTypography color={light ? 'white' : 'dark'} fontWeight="medium" variant="button">
              &nbsp;{name}&nbsp;
            </MKTypography>
          </Link>
          for a better web.
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            listStyle: 'none',
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up('lg')]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  company: { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
  links: [
    { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
    { href: 'https://www.creative-tim.com/presentation', name: 'About Us' },
    { href: 'https://www.creative-tim.com/blog', name: 'Blog' },
    { href: 'https://www.creative-tim.com/license', name: 'License' },
  ],
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  links: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default SimpleFooter;
