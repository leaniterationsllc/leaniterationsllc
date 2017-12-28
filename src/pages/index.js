/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'react-emotion';
import { Flex, FlexChild } from '../components/Layout';
import ButtonPrimary from '../components/Buttons';

const CenteredText = styled.p`
  text-align: center;
`;

export default () => (
  <Flex
    justify="center"
    align="center"
    flexDirection="column"
    wrap={['wrap', 'wrap', 'nowrap']}
    style={{ height: '100%' }}
  >
    <FlexChild flex={1}>
      <h1>Lean Iterations LLC</h1>
    </FlexChild>
    <FlexChild flex={1}>
      <Flex justify="center" align="center" style={{ height: '100%' }}>
        <FlexChild flex={10}>
          <a href="mailto:support@leaniterationsllc.com">
            <ButtonPrimary>Contact Us</ButtonPrimary>
          </a>
        </FlexChild>
      </Flex>
    </FlexChild>
    <FlexChild flex={2}>
      <CenteredText>
        We are lean consultants that provide go to market strategy and pricing.
      </CenteredText>
      <CenteredText>
        We can help you scale so that your competition is an afterthought.
      </CenteredText>
    </FlexChild>
  </Flex>
);

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
