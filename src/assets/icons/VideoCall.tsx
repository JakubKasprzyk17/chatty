import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

import { Colors } from '_styles';

const VideoCall = ({ width = 44, height = 44, color = Colors.PLUM[500] }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 44 44" fill="none">
      <Circle cx="22" cy="22" r="22" fill="white" />
      <Path
        d="M23.643 15H12.357C11.6107 15 11 15.7378 11 16.6601V27.3399C11 28.253 11.6031 29 12.357 29C22.8551 29 22.0949 29 23.643 29C24.3893 29 25 28.2622 25 27.3399V16.6601C25 15.747 24.3893 15 23.643 15Z"
        fill={color}
      />
      <Path
        d="M32.3523 15.2047C31.9456 14.9483 31.4485 14.9328 31.0267 15.1581L27.178 17.2174C26.7939 17.4194 26.5529 17.8313 26.5529 18.282V25.7264C26.5529 26.1771 26.7939 26.5812 27.178 26.791L31.0267 28.8503C31.4485 29.0756 31.9456 29.0601 32.3523 28.8036C32.759 28.5472 33 28.0965 33 27.6147V16.4014C33 15.9119 32.7515 15.4612 32.3523 15.2047Z"
        fill={color}
      />
    </Svg>
  );
};

export default VideoCall;
