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
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
// @mui material components
import Tooltip from '@mui/material/Tooltip';
// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function ExampleCard({ image, name, count, pro, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      minHeight="10rem"
      shadow="lg"
      sx={{
        overflow: 'hidden',
        transform: 'perspective(999px) rotateX(0deg) translate3d(0, 0, 0)',
        transformOrigin: '50% 0',
        backfaceVisibility: 'hidden',
        willChange: 'transform, box-shadow',
        transition: 'transform 200ms ease-out',

        '&:hover': {
          transform: 'perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)',
        },
      }}
      {...rest}
    >
      {pro && (
        <MKBox p={1} position="absolute" right={0} top={0} zIndex={2}>
          <svg
            height="24px"
            version="1.1"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g fill="none" fillRule="evenodd" id="lock-black" stroke="none" strokeWidth="1">
              <circle cx="12" cy="12" fill="#1F2937" id="Oval" r="12" />
              <g
                fill="#FFFFFF"
                fillRule="nonzero"
                id="padlock"
                transform="translate(7.000000, 5.000000)"
              >
                <path d="M5,0 C3.16666667,0 1.66666667,1.5 1.66666667,3.33333333 L1.66666667,4.58333333 C0.666666667,5.5 0,6.83333333 0,8.33333333 C0,11.0833333 2.25,13.3333333 5,13.3333333 C7.75,13.3333333 10,11.0833333 10,8.33333333 C10,6.83333333 9.33333333,5.5 8.33333333,4.58333333 L8.33333333,3.33333333 C8.33333333,1.5 6.83333333,0 5,0 Z M5.83333333,8.91666667 L5.83333333,10.8333333 L4.16666667,10.8333333 L4.16666667,8.91666667 C3.66666667,8.66666667 3.33333333,8.08333333 3.33333333,7.5 C3.33333333,6.58333333 4.08333333,5.83333333 5,5.83333333 C5.91666667,5.83333333 6.66666667,6.58333333 6.66666667,7.5 C6.66666667,8.08333333 6.33333333,8.66666667 5.83333333,8.91666667 Z M6.66666667,3.66666667 C6.16666667,3.41666667 5.58333333,3.33333333 5,3.33333333 C4.41666667,3.33333333 3.83333333,3.41666667 3.33333333,3.66666667 L3.33333333,3.33333333 C3.33333333,2.41666667 4.08333333,1.66666667 5,1.66666667 C5.91666667,1.66666667 6.66666667,2.41666667 6.66666667,3.33333333 L6.66666667,3.66666667 Z" />
              </g>
            </g>
          </svg>
        </MKBox>
      )}
      <MKBox
        alt={name}
        component="img"
        my="auto"
        opacity={pro ? 0.6 : 1}
        src={image}
        width="100%"
      />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {pro ? (
        <Tooltip placement="top" title="Pro Element">
          {imageTemplate}
        </Tooltip>
      ) : (
        imageTemplate
      )}
      {name || count > 0 ? (
        <MKBox lineHeight={1} ml={1} mt={1}>
          {name && (
            <MKTypography fontWeight="bold" variant="h6">
              {name}
            </MKTypography>
          )}
          {count > 0 && (
            <MKTypography color="secondary" fontWeight="regular" variant="button">
              {count} {count === 1 ? 'Example' : 'Examples'}
            </MKTypography>
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: '',
  count: 0,
  pro: false,
};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
  pro: PropTypes.bool,
};

export default ExampleCard;
