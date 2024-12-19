import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const style = {
  small: {
    '--border-thickness': `1px`,
    '--padding-left': 24 / 16 + 'rem',
    '--font-size': '0.875rem'
  },
  large: {
    '--border-thickness': `2px`,
    '--padding-left': 36 / 16 + 'rem',
    '--font-size': '1.125rem'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <SearchWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={size === 'small' ? 16 : 24} strokeWidth={size === 'small' ? 1 : 2} />
      <SearchBar id="searchbar" placeholder={placeholder} style={style[size]} width={width} />
    </SearchWrapper>
  );
};

const SearchBar = styled.input.attrs(p => ({
  type: "search"
}))`
  border: none;
  width: ${p => p.width}px;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--padding-left);
  height: var(--padding-left);
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
`;

const SearchWrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
