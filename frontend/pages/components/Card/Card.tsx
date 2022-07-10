import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import style from './Card.style';
import CardImages from './CardImages/uri';

export enum CardSize {
  small,
  large,
}

interface CardProps {
  source: (id: string) => any;
  text?: string;
  size?: CardSize;
}

const Card: React.FC<CardProps> = ({ text, source, size = CardSize.small }) => {
  const cardStyle = style(size);

  return (
    <ImageBackground style={cardStyle.Card} source={source}>
      <View style={cardStyle.TextWrapper}>
        <Text style={cardStyle.Text}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

export default Card;
