import React from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../../themeConfig';
import styles, { textInputTheme } from './Input.style';

interface InputProps {
  style?: any;
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, style }) => (
  <TextInput
    label={label}
    style={[styles.wrapper, style]}
    theme={textInputTheme}
    mode={'flat'}
    selectionColor={colors.highlight}
    outlineColor={colors.highlight}
  />
);

export default Input;
