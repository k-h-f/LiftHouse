import React from 'react';
import { Text, View } from 'react-native';
import { HouseStyle } from '../shared/themeConfig';
import style from './Home.style';
import Card, { CardSize } from './components/Card/Card';
import CardImages from './components/Card/CardImages/uri';

/**
 * This is the Home Page
 * @returns Home page react component
 */
const Home: React.FC = () => {
  return (
    <View style={style.Home}>
      <Text style={HouseStyle.H1}>Time to grind</Text>
      <Text style={HouseStyle.H2}>Today Session</Text>
      <Card
        size={CardSize.large}
        text="Lower Day"
        source={CardImages.lower_intensity}
      />
    </View>
  );
};

export default Home;
