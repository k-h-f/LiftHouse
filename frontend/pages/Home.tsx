import React from 'react';
import { View } from 'react-native';
import GlobalText from '../shared/components/GlobalText';
import RoutineCard from '../shared/components/RoutineCard';
import PageStyle from '../shared/stylesheets/pages.style';
import useDatabase from '../utils/useDatabase';
import EmptyRoutine from './components/EmptyRoutine';
import styles from './Home.style';

const Home: React.FC = () => {
  const { data } = useDatabase('getRoutines');

  const hasRoutines = data && data.rows.length === 0;

  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header_wrapper}>
        <GlobalText style={styles.header}>Time to Grind 💪</GlobalText>
        <GlobalText style={styles.caption}>MY ROUTINES</GlobalText>
      </View>
      <View style={styles.routines_wrapper}>
        {hasRoutines && <EmptyRoutine />}
      </View>
    </View>
  );
};

export default Home;
