import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '_styles';

const Eye = ({ width = 18, height = 18, color = Colors.GRAY[300] }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M6.36663 11.1059C4.32406 8.39883 6.76038 4.86563 9.9807 5.77969C7.33695 7.36524 10.5959 10.698 12.2201 8.01563C13.2397 11.9566 8.3846 13.7496 6.36663 11.1059Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8139 9.60465C13.3526 16.2386 4.64787 16.3582 0.179514 9.60817C-0.0630646 9.23903 -0.059549 8.74684 0.186545 8.38473C4.6549 1.80348 13.3104 1.61012 17.8174 8.3777C18.06 8.74332 18.06 9.23903 17.8139 9.60465ZM2.23967 8.99293C6.48655 4.1484 11.6018 4.08512 15.7572 8.99293C11.6018 13.834 6.46545 13.7707 2.23967 8.99293Z"
        fill={color}
      />
    </Svg>
  );
};

export default Eye;
