import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  alignItems,
  responsiveStyle,
  flex,
  flexDirection,
  borderWidth
} from 'styled-system';

const wrap = responsiveStyle({
  prop: 'wrap',
  cssProperty: 'flexWrap'
});

export const Box = styled.div`
  overflow: hidden;
  ${space} ${width} ${fontSize} ${color} ${textAlign} ${borderWidth};
`;

export const Flex = styled.div`
  display: flex;
  ${justifyContent} ${alignItems} ${wrap} ${flexDirection};
`;

export const FlexChild = styled.div`
  ${flex};
`;
