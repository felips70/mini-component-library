/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--height': '24px',
    '--outer-border-radius': '8px',
    '--padding': '4px',
  },
  medium: {
    '--height': '12px',
    '--outer-border-radius': '4px',
    '--padding': '0',
  },
  small: {
    '--height': '8px',
    '--outer-border-radius': '4px',
    '--padding': '0',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Progress
      style={styles}
      max={100}
      value={value}
      size={size}
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
    </Progress>
  )
};

const getBorderRadius = p => {
  const diff = p.max - p.value;
  return diff > 3 ? '4px 0 0 4px' : `4px ${4 - diff}px ${4 - diff}px 4px / 4px 4px 4px 4px`;
};

const Progress = styled.progress`
  &[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border: none;
    height: var(--height);
    border-radius: var(--outer-border-radius);
    background-color: ${COLORS.gray50};
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};

    &[value]::-moz-progress-bar {
      border-radius: ${getBorderRadius};
      background-color: ${COLORS.primary};
    }

    &[value]::-webkit-progress-bar {
      border-radius: 8px;
      background-color: ${COLORS.gray50};
    }

    &[value]::-webkit-progress-value {
      border-radius: ${getBorderRadius};
      background-color: ${COLORS.primary};
    }
  }
`;

export default ProgressBar;
