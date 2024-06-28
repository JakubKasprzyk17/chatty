import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '_styles';

const Back = ({ width = 32, height = 32, color = Colors.PLUM[500] }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M18 24L10 16L18 8"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Back;
