import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { fontSize } from 'styled-system';
import PropTypes from 'prop-types';
import colors from '../utils/colors';

/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  * {
      font-family: -apple-system, BlinkMacSystemFont,
             'avenir next', avenir,
             'helvetica neue', helvetica,
             ubuntu,
             roboto, noto,
             'segoe ui', arial,
             sans-serif;
      box-sizing: border-box;
  };
  body,html, #___gatsby {
    height: 100%;
  }
  body: {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
  p {
    color: ${colors.accent}
  }
`;
/* eslint-enable */

const FontConfig = styled.div`
  height: 100%;
  ${fontSize};
`;

const Layout = ({ children }) => (
  <FontConfig fontSize={[2, 3, 4]}>{children()}</FontConfig>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
