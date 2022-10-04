/* eslint-disable no-param-reassign */
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
import { Fragment, useState, useEffect } from 'react';
// react-router components
import { Link } from 'react-router-dom';
// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';
// @mui material components
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
// Material Kit 2 React example components
import DefaultNavbarDropdown from 'examples/Navbars/DefaultNavbar/DefaultNavbarDropdown';
import DefaultNavbarMobile from 'examples/Navbars/DefaultNavbar/DefaultNavbarMobile';

// Material Kit 2 React base styles
import breakpoints from 'assets/theme/base/breakpoints';

function DefaultNavbar({ brand, routes, transparent, light, action, sticky, relative, center }) {
  const [dropdown, setDropdown] = useState('');
  const [dropdownEl, setDropdownEl] = useState('');
  const [dropdownName, setDropdownName] = useState('');
  const [nestedDropdown, setNestedDropdown] = useState('');
  const [nestedDropdownEl, setNestedDropdownEl] = useState('');
  const [nestedDropdownName, setNestedDropdownName] = useState('');
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener('resize', displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      collapse={Boolean(collapse)}
      href={href}
      icon={icon}
      light={light}
      name={name}
      route={route}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} px={1.5} py={1} spacing={3} container>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} sx={{ position: 'relative' }} xs={12 / columns} item>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <MKTypography
                      display="block"
                      fontWeight="bold"
                      mt={index !== 0 ? 2 : 0}
                      px={0.5}
                      py={1}
                      textTransform="capitalize"
                      variant="button"
                    >
                      {col.name}
                    </MKTypography>
                    {col.collapse.map((item) => (
                      <MKTypography
                        key={item.name}
                        color="text"
                        component={item.route ? Link : MuiLink}
                        display="block"
                        fontWeight="regular"
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        minWidth="11.25rem"
                        px={2}
                        py={0.625}
                        rel={item.href ? 'noreferrer' : 'noreferrer'}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: 'pointer',
                          transition: 'all 300ms linear',

                          '&:hover': {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                        target={item.href ? '_blank' : ''}
                        textTransform="capitalize"
                        to={item.route ? item.route : ''}
                        variant="button"
                      >
                        {item.name}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '-4px',
                      transform: 'translateY(-45%)',
                      height: '90%',
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: '_blank',
          rel: 'noreferrer',
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <MKTypography
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            alignItems="center"
            color={item.description ? 'dark' : 'text'}
            display="flex"
            fontWeight={item.description ? 'bold' : 'regular'}
            justifyContent="space-between"
            minWidth={item.description ? '14rem' : '12rem'}
            px={2}
            py={item.description ? 1 : 0.625}
            sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
              borderRadius: borderRadius.md,
              cursor: 'pointer',
              transition: 'all 300ms linear',

              '&:hover': {
                backgroundColor: grey[200],
                color: dark.main,

                '& *': {
                  color: dark.main,
                },
              },
            })}
            textTransform="capitalize"
            variant="button"
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <MKBox>
                {item.name}
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
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: 'normal', verticalAlign: 'middle', mr: -0.5 }}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </MKTypography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      modifiers={[
        {
          name: 'arrow',
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      open={Boolean(dropdown)}
      placement="top-start"
      popperRef={null}
      style={{ zIndex: 10 }}
      transition
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName('');
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: 'left top',
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox borderRadius="lg">
            <MKTypography color="white" variant="h1">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <MKBox borderRadius="lg" mt={2} p={2} shadow="lg">
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: '_blank',
                  rel: 'noreferrer',
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <MKTypography
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}
                    alignItems="center"
                    color={item.description ? 'dark' : 'text'}
                    display="flex"
                    fontWeight={item.description ? 'bold' : 'regular'}
                    justifyContent="space-between"
                    minWidth={item.description ? '14rem' : '12rem'}
                    px={2}
                    py={item.description ? 1 : 0.625}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: 'pointer',
                      transition: 'all 300ms linear',

                      '&:hover': {
                        backgroundColor: grey[200],
                        color: dark.main,

                        '& *': {
                          color: dark.main,
                        },
                      },
                    })}
                    textTransform="capitalize"
                    variant="button"
                  >
                    {item.description ? (
                      <MKBox>
                        {item.name}
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
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        fontSize="small"
                        sx={{ fontWeight: 'normal', verticalAlign: 'middle', mr: -0.5 }}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </MKTypography>
                );
              });
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      popperRef={null}
      style={{ zIndex: 10 }}
      transition
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName('');
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: 'left top',
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox borderRadius="lg" ml={2.5} mt={-2.5}>
            <MKBox borderRadius="lg" mt={2} px={1} py={1.5} shadow="lg">
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: 'sticky', top: 0, zIndex: 10 } : null}>
      <MKBox
        borderRadius="xl"
        color={light ? 'white' : 'dark'}
        left={0}
        mx={relative ? 0 : 3}
        my={relative ? 0 : 2}
        position={relative ? 'relative' : 'absolute'}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        py={1}
        shadow={transparent ? 'none' : 'md'}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? 'none' : `saturate(200%) blur(30px)`,
        })}
        width={relative ? '100%' : 'calc(100% - 48px)'}
        zIndex={3}
      >
        <MKBox alignItems="center" display="flex" justifyContent="space-between">
          <MKBox
            component={Link}
            lineHeight={1}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
            py={transparent ? 1.5 : 0.75}
            to="/"
          >
            <MKTypography color={light ? 'white' : 'dark'} fontWeight="bold" variant="button">
              {brand}
            </MKTypography>
          </MKBox>
          <MKBox
            color="inherit"
            display={{ xs: 'none', lg: 'flex' }}
            ml="auto"
            mr={center ? 'auto' : 0}
          >
            {renderNavbarItems}
          </MKBox>
          <MKBox ml={{ xs: 'auto', lg: 0 }}>
            {action &&
              (action.type === 'internal' ? (
                <MKButton
                  color={action.color ? action.color : 'info'}
                  component={Link}
                  size="small"
                  to={action.route}
                  variant={
                    action.color === 'white' || action.color === 'default'
                      ? 'contained'
                      : 'gradient'
                  }
                >
                  {action.label}
                </MKButton>
              ) : (
                <MKButton
                  color={action.color ? action.color : 'info'}
                  component="a"
                  href={action.route}
                  rel="noreferrer"
                  size="small"
                  target="_blank"
                  variant={
                    action.color === 'white' || action.color === 'default'
                      ? 'contained'
                      : 'gradient'
                  }
                >
                  {action.label}
                </MKButton>
              ))}
          </MKBox>
          <MKBox
            color={transparent ? 'white' : 'inherit'}
            display={{ xs: 'inline-block', lg: 'none' }}
            lineHeight={0}
            pl={1.5}
            py={1.5}
            sx={{ cursor: 'pointer' }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? 'close' : 'menu'}</Icon>
          </MKBox>
        </MKBox>
        <MKBox
          bgColor={transparent ? 'white' : 'transparent'}
          borderRadius="xl"
          px={transparent ? 2 : 0}
          shadow={transparent ? 'lg' : 'none'}
        >
          {mobileView && <DefaultNavbarMobile open={mobileNavbar} routes={routes} />}
        </MKBox>
      </MKBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: 'Material Kit 2',
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
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
        'default',
        'white',
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
