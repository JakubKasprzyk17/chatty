import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '_styles';

const EyeHidden = ({ width = 18, height = 18, color = Colors.GRAY[300] }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M10.4733 2.26051L9.47131 3.96559C6.026 3.81793 2.53147 5.48082 0.186545 8.93668C-0.059549 9.29879 -0.0630646 9.79098 0.179514 10.1636C1.20959 11.7211 2.46819 12.8988 3.84279 13.725L3.34709 14.6215C2.64397 15.9433 4.50373 17.0086 5.29475 15.75L12.4209 3.38903C13.103 2.26051 11.419 0.892934 10.4733 2.26051Z"
        fill={color}
      />
      <Path
        d="M17.8173 8.9297C16.6677 7.20001 15.2439 5.93087 13.6935 5.10118L12.6599 6.89415C13.7287 7.50235 14.7728 8.37774 15.7572 9.54493C13.6865 11.9602 11.3732 13.1555 9.04936 13.1555L7.91733 15.1207C11.556 15.5109 15.3388 13.8445 17.8138 10.1567C18.0599 9.79454 18.0599 9.29532 17.8173 8.9297Z"
        fill={color}
      />
      <Path
        d="M9.17911 12.9163C12.5963 12.5647 12.7194 9.25654 11.9986 8.02959L9.17911 12.9163Z"
        fill={color}
      />
    </Svg>
  );
};

export default EyeHidden;