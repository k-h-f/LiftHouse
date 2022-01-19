import React from 'react';
import { View } from 'react-native';
import GlobalText from '../shared/components/GlobalText';
import PageStyle from '../shared/stylesheets/pages.style';
import styles from './Home.style';
import RoutineCard from '../shared/components/RoutineCard';

const Home: React.FC = () => {
  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header_wrapper}>
        <GlobalText style={styles.header}>Time to Grind 💪</GlobalText>
        <GlobalText style={styles.caption}>MY ROUTINES</GlobalText>
      </View>
      <View style={styles.routines_wrapper}>
        <RoutineCard title="Test" routines={['x3 test', '3x test 2']} />
      </View>
    </View>
  );
};

export default Home;
