import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import QueryAlias from '../../backend/queryAlias';
import { Routine } from '../../backend/responseTypes.ts/getRoutines';
import GlobalText from '../shared/components/GlobalText';
import RoutineCard from '../shared/components/RoutineCard';
import PageStyle from '../shared/stylesheets/pages.style';
import useDatabase from '../utils/useDatabase';
import EmptyRoutine from './components/EmptyRoutine';
import styles from './Home.style';
import CreateRoutine from './CreateRoutine';

const Stack = createStackNavigator();

const HomeView: React.FC = () => {
  const { data, isCompleted } = useDatabase(QueryAlias.GET_ROUTINES);
  const routines = data as Routine[];

  const hasRoutines = isCompleted === true && routines.length !== 0;
  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header_wrapper}>
        <GlobalText style={styles.header}>Time to Grind 💪</GlobalText>
        <GlobalText style={styles.caption}>MY ROUTINES</GlobalText>
      </View>
      {!isCompleted && <ActivityIndicator />}
      <View style={styles.routines_wrapper}>
        {!hasRoutines && <EmptyRoutine />}
      </View>
    </View>
  );
};

const Home: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <Stack.Screen name="Home" component={HomeView} />
    <Stack.Screen name="CreateRoutine" component={CreateRoutine} />
  </Stack.Navigator>
);

export default Home;
