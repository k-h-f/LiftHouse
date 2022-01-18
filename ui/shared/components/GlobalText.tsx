import React from 'react';
import { Text } from 'react-native';
import styles from './GlobalText.style';

interface GlobalTextProps {
  style?: any;
}

const GlobalText: React.FC<GlobalTextProps> = props => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

export default GlobalText;
