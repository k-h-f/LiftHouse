import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import style from './Card.style';

export enum CardSize {
  small,
  large,
}

interface CardProps {
  source: (id: string) => any;
  text?: string;
  size?: CardSize;
}

/**
 *
 * @text Text to be overlayed on the card. Text will be on the top left
 * @size Can be small or large
 * @source This will be a uri source of the image. If importing a local image
 *         have to use pass a NodeRequire e.g. require('.../image.jpg')
 * @returns A Card image React FC
 */
const Card: React.FC<CardProps> = ({ text, source, size = CardSize.small }) => {
  const cardStyle = style(size);

  return (
    <View style={cardStyle.CardWrapper}>
      <ImageBackground style={cardStyle.Card} source={source}>
        <View style={cardStyle.TextWrapper}>
          <Text style={cardStyle.Text}>{text}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
