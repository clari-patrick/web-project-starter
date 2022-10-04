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

import React, { useState } from 'react';
// react-router-dom components
import { Link } from 'react-router-dom';
// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';
// Material Kit 2 React example components
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import SimpleFooter from 'examples/Footers/SimpleFooter';
// Material Kit 2 React page layout routes
import routes from 'routes';

// Images
import bgImage from 'assets/images/bg-sign-in-basic.jpeg';

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <DefaultNavbar
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        routes={routes}
        light
        transparent
      />
      <MKBox
        left={0}
        minHeight="100vh"
        position="absolute"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        top={0}
        width="100%"
        zIndex={1}
      />
      <MKBox height="100vh" mx="auto" position="relative" px={1} width="100%" zIndex={2}>
        <Grid alignItems="center" height="100%" justifyContent="center" spacing={1} container>
          <Grid lg={4} md={5} sm={9} xl={3} xs={11} item>
            <Card>
              <MKBox
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mb={1}
                mt={-3}
                mx={2}
                p={2}
                textAlign="center"
                variant="gradient"
              >
                <MKTypography color="white" fontWeight="medium" mt={1} variant="h4">
                  Sign in
                </MKTypography>
                <Grid justifyContent="center" spacing={3} sx={{ mt: 1, mb: 2 }} container>
                  <Grid xs={2} item>
                    <MKTypography color="white" component={MuiLink} href="#" variant="body1">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid xs={2} item>
                    <MKTypography color="white" component={MuiLink} href="#" variant="body1">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid xs={2} item>
                    <MKTypography color="white" component={MuiLink} href="#" variant="body1">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pb={3} pt={4} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput label="Email" type="email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput label="Password" type="password" fullWidth />
                  </MKBox>
                  <MKBox alignItems="center" display="flex" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      color="text"
                      fontWeight="regular"
                      sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                      variant="button"
                      onClick={handleSetRememberMe}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mb={1} mt={4}>
                    <MKButton color="info" variant="gradient" fullWidth>
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mb={1} mt={3} textAlign="center">
                    <MKTypography color="text" variant="button">
                      Don&apos;t have an account?{' '}
                      <MKTypography
                        color="info"
                        component={Link}
                        fontWeight="medium"
                        to="/authentication/sign-up/cover"
                        variant="button"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox bottom="1.625rem" position="absolute" width="100%" zIndex={2}>
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
