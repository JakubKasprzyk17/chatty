import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '_styles';

const EyeHidden = ({ width = 44, height = 44, color = Colors.PLUM[500] }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 44 44" fill="none">
      <Path
        d="M25.5378 38.5513C26.5866 39.6001 28.372 39.1825 28.8468 37.7773L39.0291 7.64382C39.5591 6.07527 38.0627 4.57879 36.4941 5.10881L6.36061 15.2912C4.95548 15.766 4.53788 17.5514 5.58664 18.6001L12.0232 25.0367C12.6903 25.7038 13.7328 25.814 14.5247 25.3012L18.9131 22.4589C20.7233 21.2865 22.8514 23.4146 21.679 25.2248L18.8367 29.6132C18.3239 30.405 18.4341 31.4476 19.1012 32.1147L25.5378 38.5513Z"
        fill={color}
      />
    </Svg>
  );
};

export default EyeHidden;
