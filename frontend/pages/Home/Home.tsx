import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import QueryAlias from '../../../backend/queryAlias';
import { Routine } from '../../../backend/dtos/Routine';
import GlobalText from '../../shared/components/GlobalText';
import PageStyle from '../../shared/stylesheets/pages.style';
import useDatabase from '../../utils/hooks/useDatabase';
import EmptyRoutine from '../components/EmptyRoutine';
import styles from './Home.style';
import { colors, sizes } from '../../themeConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateRoutine from './CreateRoutines/CreateRoutine';
import SelectExercises from './CreateRoutines/SelecExercises';
import Exercises from '../Exercises/Exercises';
import { useIsFocused } from '@react-navigation/native';
import useSelectedExercises from '../Exercises/hooks/useSelectedExercises';

const Stack = createStackNavigator();

const HomeView: React.FC = () => {
  const { data, isCompleted } = useDatabase(QueryAlias.GET_ROUTINES);
  const routines = data as Routine[];
  const { resetSelectedExercises } = useSelectedExercises();

  const isFocused = useIsFocused();

  useEffect(() => {
    resetSelectedExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const hasRoutines = isCompleted === true && routines.length !== 0;
  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header_wrapper}>
        <GlobalText isHeader>Time to Grind 💪</GlobalText>
        <GlobalText isCaption>MY ROUTINES</GlobalText>
      </View>
      <View style={styles.routines_wrapper}>
        {!isCompleted && (
          <ActivityIndicator
            size={sizes.largeIconSize}
            style={styles.loading}
          />
        )}
        {!hasRoutines && isCompleted && <EmptyRoutine />}
      </View>
    </View>
  );
};

const Home: React.FC = () => {
  const { selectedExercises } = useSelectedExercises();
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerStyle: { backgroundColor: colors.primary },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeView}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerBackImage: () => (
            <MaterialCommunityIcons
              name={'close'}
              size={sizes.iconSize}
              color={colors.white}
            />
          ),
        }}
        name="CreateRoutine"
        component={CreateRoutine}
      />
      <Stack.Screen name="SelectExercises" component={SelectExercises} />
      <Stack.Screen name="Exercises">
        {props => <Exercises {...props} exerciseToFilter={selectedExercises} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Home;
