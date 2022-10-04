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
// react-router-dom components
import { Link } from 'react-router-dom';
// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid spacing={3} container>
          <Grid md={3} sx={{ ml: 'auto', mb: 3 }} xs={12} item>
            <MKBox>
              <Link to={brand.route}>
                <MKBox alt={brand.name} component="img" maxWidth="2rem" mb={2} src={brand.image} />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox alignItems="center" display="flex" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  color="dark"
                  component="a"
                  href={link}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                  opacity={0.8}
                  rel="noreferrer"
                  target="_blank"
                  variant="h5"
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} md={2} sx={{ mb: 3 }} xs={6} item>
              <MKTypography
                display="block"
                fontWeight="bold"
                mb={1}
                textTransform="capitalize"
                variant="button"
              >
                {title}
              </MKTypography>
              <MKBox component="ul" m={0} p={0} sx={{ listStyle: 'none' }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" lineHeight={1.25} m={0} p={0}>
                    {href ? (
                      <MKTypography
                        component="a"
                        fontWeight="regular"
                        href={href}
                        rel="noreferrer"
                        target="_blank"
                        textTransform="capitalize"
                        variant="button"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        fontWeight="regular"
                        textTransform="capitalize"
                        to={route}
                        variant="button"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid sx={{ textAlign: 'center', my: 3 }} xs={12} item>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
