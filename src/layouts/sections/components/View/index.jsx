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

import React, { useState, useEffect } from 'react';
// prop-types is a library for type checking of props
import PropTypes from 'prop-types';
// react-copy-to-clipboard components
import { CopyToClipboard } from 'react-copy-to-clipboard';
// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
// @mui material components
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slide from '@mui/material/Slide';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKAlert from 'components/MKAlert';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

// Material Kit 2 React base styles
import colors from 'assets/theme/base/colors';

function View({ children, code, title, height, ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MKBox
      borderRadius="xl"
      mb={12}
      position="relative"
      shadow="lg"
      sx={{ overflow: 'hidden' }}
      width="100%"
      {...rest}
    >
      <MKBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid justifyContent="space-between" py={1} spacing={2} container>
          <Grid lg={3} xs={12} item>
            <MKTypography pt={0.5} variant="body1">
              {title}
            </MKTypography>
          </Grid>
          <Grid lg={3} xs={12} item>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MKBox
                      className="fas fa-desktop"
                      color="dark"
                      component="i"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                    />
                  }
                  label="Preview"
                />
                <Tab
                  icon={
                    <MKBox
                      className="fas fa-code"
                      color="dark"
                      component="i"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                    />
                  }
                  label="Code"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox display={activeTab === 0 ? 'block' : 'none'}>
        <MKBox p={3} width="100%">
          <MKBox
            bgColor="grey-100"
            borderRadius="xl"
            height={height}
            maxHeight="40rem"
            sx={{ overflowX: 'hidden', overflowY: 'scroll' }}
            width="100%"
          >
            {children}
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox display={activeTab === 1 ? 'block' : 'none'} p={3}>
        <MKBox
          bgColor="grey-100"
          borderRadius="xl"
          position="relative"
          sx={{ overflow: 'hidden' }}
          width="100%"
        >
          <CopyToClipboard text={code}>
            <MKButton
              color="dark"
              size="small"
              sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              variant="gradient"
              onClick={() => setSuccess(true)}
            >
              <MKBox className="fas fa-copy" color="white" mr={0.5} /> Copy
            </MKButton>
          </CopyToClipboard>
          <Slide direction="down" in={success} unmountOnExit>
            <MKBox left={0} position="absolute" top="0.5rem" width="100%">
              <MKAlert
                color="success"
                mx="auto"
                sx={{ minHeight: '2.5rem !important', py: 1, justifyContent: 'center' }}
                width="25%"
              >
                <MKTypography color="white" fontWeight="regular" variant="body2">
                  Code successfully copied!
                </MKTypography>
              </MKAlert>
            </MKBox>
          </Slide>
          <SyntaxHighlighter
            customStyle={{
              height,
              maxHeight: '40rem',
              fontSize: '1rem',
              backgroundColor: grey[100],
              padding: '1rem 1rem 1rem 0.25rem',
              overflowY: 'scroll',
              margin: 0,
            }}
            language="jsx"
            style={prism}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: 'auto',
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default View;
