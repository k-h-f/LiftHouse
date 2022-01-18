import React from 'react';
import { View } from 'react-native';
import GlobalText from '../shared/components/GlobalText';
import PageStyle from '../shared/stylesheets/pages.style';
import styles from './Home.style';

const Home: React.FC = () => {
  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header_wrapper}>
        <GlobalText style={styles.header}>Time to Grind 💪</GlobalText>
        <GlobalText style={styles.caption}>MY ROUTINES</GlobalText>
      </View>
    </View>
  );
};

export default Home;
