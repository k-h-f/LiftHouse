import React from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../../themeConfig';
import styles, { textInputTheme } from './Input.style';

interface InputProps {
  style?: any;
  label?: string;
  right?: string;
}

const Input: React.FC<InputProps> = ({ label, right, style }) => (
  <TextInput
    label={label}
    right={right && <TextInput.Icon name={right} color={colors.highlight} />}
    style={[styles.wrapper, style]}
    theme={textInputTheme}
    mode={'flat'}
    selectionColor={colors.highlight}
    outlineColor={colors.highlight}
  />
);

export default Input;
