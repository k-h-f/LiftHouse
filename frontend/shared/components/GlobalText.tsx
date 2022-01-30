import React from 'react';
import { Text } from 'react-native';
import styles from './GlobalText.style';

interface GlobalTextProps {
  style?: any;
  isCaption?: boolean;
  isHeader?: boolean;
}

const GlobalText: React.FC<GlobalTextProps> = props => {
  return (
    <Text
      style={[
        props.isCaption && styles.caption,
        props.isHeader && styles.header,
        styles.text,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};

export default GlobalText;
