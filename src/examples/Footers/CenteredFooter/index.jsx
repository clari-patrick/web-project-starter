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
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function CenteredFooter({ company, links, socials, light }) {
  const { href, name } = company;

  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      color={light ? 'white' : 'secondary'}
      component={Link}
      fontWeight="regular"
      href={link.href}
      variant="body2"
    >
      {link.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      color={light ? 'white' : 'secondary'}
      component={Link}
      fontWeight="regular"
      href={social.link}
      variant="body2"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Grid justifyContent="center" container>
        <Grid lg={8} xs={10} item>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            mb={3}
            spacing={{ xs: 2, lg: 3, xl: 6 }}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid lg={8} xs={12} item>
          <Stack direction="row" display="flex" justifyContent="center" mb={3} mt={1} spacing={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid lg={8} sx={{ textAlign: 'center' }} xs={12} item>
          <MKTypography color={light ? 'white' : 'secondary'} variant="body2">
            Copyright &copy; {year} Material by{' '}
            <MKTypography
              color={light ? 'white' : 'secondary'}
              component={Link}
              href={href}
              rel="noreferrer"
              target="_blank"
              variant="body2"
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
  links: [
    { href: 'https://www.creative-tim.com/', name: 'Company' },
    { href: 'https://www.creative-tim.com/presentation', name: 'About Us' },
    { href: 'https://www.creative-tim.com/presentation', name: 'Team' },
    { href: 'https://www.creative-tim.com/templates/react', name: 'Products' },
    { href: 'https://www.creative-tim.com/blog', name: 'Blog' },
    { href: 'https://www.creative-tim.com/license', name: 'License' },
  ],
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: 'https://www.facebook.com/CreativeTim/' },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: 'https://twitter.com/creativetim',
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: 'https://www.instagram.com/creativetimofficial/',
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: 'https://ro.pinterest.com/thecreativetim/',
    },
    { icon: <GitHubIcon fontSize="small" />, link: 'https://github.com/creativetimofficial' },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  links: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/forbid-prop-types
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default CenteredFooter;
