import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

import { Colors } from '_styles';

const Eye = ({ width = 18, height = 18, color = Colors.GRAY[300] }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <G clipPath="url(#clip0_1928_78)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM5.66361 5.6636C6.01508 5.31213 6.58493 5.31213 6.93641 5.6636L9.00001 7.7272L11.0636 5.6636C11.4151 5.31213 11.9849 5.31213 12.3364 5.6636C12.6879 6.01508 12.6879 6.58492 12.3364 6.9364L10.2728 9L12.3364 11.0636C12.6879 11.4151 12.6879 11.9849 12.3364 12.3364C11.9849 12.6879 11.4151 12.6879 11.0636 12.3364L9 10.2728L6.9364 12.3364C6.58493 12.6879 6.01508 12.6879 5.66361 12.3364C5.31213 11.9849 5.31213 11.4151 5.66361 11.0636L7.72721 9L5.66361 6.9364C5.31214 6.58492 5.31214 6.01508 5.66361 5.6636Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1928_78">
          <Rect width={width} height={height} fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Eye;
