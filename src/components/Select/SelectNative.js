import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <ChevronDownWrapper />
      <SelectBox value={value} onChange={onChange}>
        {children}
      </SelectBox>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const ChevronDownWrapper = styled(Icon).attrs(p => ({
  id: "chevron-down",
  strokeWidth: 2
}))`
    font-size: 1rem;
    top: 9px;
    right: 10px;
    position: absolute;
    
`;

const SelectBox = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  max-width: 200px;
  border: none;
  padding: 12px 40px 12px 16px;
  color: currentColor;
  field-sizing: content;
  /* This makes it so the chevron-down is rendered behind the select which allows for opening the select options when the chevron is clicked */
  position: relative;
`;

export default Select;
