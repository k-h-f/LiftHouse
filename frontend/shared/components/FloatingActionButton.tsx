import React from 'react';
import { FAB } from 'react-native-paper';
import styles from './FloatingActionButton.style';

interface FloatingActionButtonProps {
  icon: string;
  style?: any;
  onPress: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  style,
  onPress,
}) => {
  return (
    <FAB icon={icon} style={[styles.fab, style]} onPress={() => onPress()} />
  );
};

export default FloatingActionButton;
