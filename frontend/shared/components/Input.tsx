import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { colors } from '../../themeConfig';
import { textInputTheme, errorHelperTheme } from './Input.style';

export enum HelperType {
  error = 'error',
  info = 'info',
}

interface HelperMessage {
  type: HelperType;
  message: string;
}

interface InputProps {
  style?: any;
  label?: string;
  right?: string;
  height?: number;
  onChange?: (text: string) => void;
  helperMessage?: HelperMessage;
}

const Input: React.FC<InputProps> = ({
  label,
  right,
  style,
  height,
  onChange,
  helperMessage,
}) => {
  const isError = helperMessage?.message ? true : false;

  return (
    <View style={style}>
      <TextInput
        label={label}
        style={{ height: height }}
        right={
          right && <TextInput.Icon name={right} color={colors.highlight} />
        }
        theme={textInputTheme}
        mode={'flat'}
        selectionColor={colors.highlight}
        outlineColor={colors.highlight}
        onChangeText={text => onChange && onChange(text)} //Since function is possibly undefined, check if it exists
      />
      <HelperText
        theme={errorHelperTheme}
        type={helperMessage?.type}
        visible={isError}
      >
        {helperMessage?.message}
      </HelperText>
    </View>
  );
};

export default Input;
