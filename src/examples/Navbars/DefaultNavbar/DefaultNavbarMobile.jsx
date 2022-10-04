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
import { useState } from 'react';
// react-router components
import { Link } from 'react-router-dom';
// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';
// @mui material components
import Collapse from '@mui/material/Collapse';
import MuiLink from '@mui/material/Link';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
// Material Kit 2 React example components
import DefaultNavbarDropdown from 'examples/Navbars/DefaultNavbar/DefaultNavbarDropdown';

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState('');

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        collapse={Boolean(navCollapse)}
        collapseStatus={name === collapse}
        href={href}
        icon={icon}
        name={name}
        route={route}
        onClick={() => handleSetCollapse(name)}
      >
        <MKBox sx={{ height: '15rem', maxHeight: '15rem', overflowY: 'scroll' }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      fontWeight="bold"
                      px={0.5}
                      py={1}
                      textTransform="capitalize"
                      variant="button"
                    >
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        color="text"
                        component={el.route ? Link : MuiLink}
                        display="block"
                        fontWeight="regular"
                        href={el.href ? el.href : ''}
                        minWidth="11.25rem"
                        px={2}
                        py={0.625}
                        rel={el.href ? 'noreferrer' : 'noreferrer'}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: 'pointer',
                          transition: 'all 300ms linear',

                          '&:hover': {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                        target={el.href ? '_blank' : ''}
                        textTransform="capitalize"
                        to={el.route ? el.route : ''}
                        variant="button"
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    component={item.route ? Link : MuiLink}
                    display="block"
                    href={item.href ? item.href : ''}
                    rel={item.href ? 'noreferrer' : 'noreferrer'}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: 'pointer',
                      transition: 'all 300ms linear',
                      py: 1,
                      px: 1.625,

                      '&:hover': {
                        backgroundColor: grey[200],
                        color: dark.main,

                        '& *': {
                          color: dark.main,
                        },
                      },
                    })}
                    target={item.href ? '_blank' : ''}
                    to={item.route ? item.route : ''}
                  >
                    <MKTypography
                      display="block"
                      fontWeight="bold"
                      textTransform="capitalize"
                      variant="button"
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      color="text"
                      display="block"
                      fontWeight="regular"
                      sx={{ transition: 'all 300ms linear' }}
                      variant="button"
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox ml={-2} my={2} width="calc(100% + 1.625rem)">
        {renderNavbarItems}
      </MKBox>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
