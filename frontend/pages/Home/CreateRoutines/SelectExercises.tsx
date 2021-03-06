import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Exercise } from '../../../../backend/dtos/Exercise';
import GlobalText from '../../../shared/components/GlobalText';
import PageStyle from '../../../shared/stylesheets/pages.style';
import { colors, sizes } from '../../../themeConfig';
import useSelectedExercises from '../../Exercises/hooks/useSelectedExercises';
import styles from './SelectExercises.style';
import SelectedExerciseCard from './SelectedExerciseCard';
import DraggableFlatList from 'react-native-draggable-flatlist';
import QueryAlias from '../../../../backend/queryAlias';
import {
  ExerciseIdWithOrder,
  InsertIntoRoutines,
} from '../../../../backend/types';
import useDatabase from '../../../utils/hooks/useDatabase';
import FloatingActionButton from '../../../shared/components/FloatingActionButton';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { selectedExercises, onRemoveExercise } = useSelectedExercises();
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const { params } = useRoute();
  const [enableSwipeGesture, setEnableSwipeGesture] = useState(true);
  const [routineName, setRoutineName] = useState<string>('');
  const { isCompleted, executeQuery } = useDatabase();

  //Need to store the routine name as a state in order to avoid losing when navigating
  useEffect(() => {
    setRoutineName(params?.routineName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  navigation.setOptions({ title: routineName });

  const switchToExercises = () => {
    navigation.navigate('Exercises');
  };

  const hasSelected = selectedExercises.length === 0 ? false : true;

  useEffect(() => {
    if (isCompleted) {
      navigation.navigate('Home1');
    }
  }, [isCompleted, navigation]);

  const saveRoutine = () => {
    const exercisesIdsWithOrder: ExerciseIdWithOrder[] = exerciseList.map(
      (exercise, index) => {
        return { id: exercise.id, order: index };
      },
    );

    executeQuery(QueryAlias.INSERT_ROUTINE, {
      args: { routineName, exercisesIdsWithOrder } as InsertIntoRoutines,
    });
  };

  //updates the selected exercises without duplication
  useEffect(() => {
    selectedExercises
      .filter(
        selectedExercise =>
          !exerciseList.some(target => selectedExercise.id === target.id),
      )
      .map((exercise: Exercise) => {
        setExerciseList(oldList => oldList && [...oldList, exercise]);
      });
  }, [exerciseList, selectedExercises]);

  const onDismiss = useCallback(
    (exerciseToRemove: Exercise) => {
      onRemoveExercise(exerciseToRemove);
      setExerciseList(oldList =>
        oldList.filter(exercise => exercise.id !== exerciseToRemove.id),
      );
    },
    [onRemoveExercise],
  );

  const renderItem = ({
    item,
    drag,
  }: {
    item: Exercise;
    drag: (event: GestureResponderEvent) => void;
  }) => (
    <View>
      <TouchableOpacity
        delayPressIn={100}
        delayLongPress={100}
        onLongPress={drag}
      >
        <SelectedExerciseCard
          key={item.exerciseName}
          exercise={item}
          enabled={enableSwipeGesture}
          onDismiss={onDismiss}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header}>
        <GlobalText style={styles.exercise_header} isCaption>
          EXERCISES
        </GlobalText>
        <IconButton
          onPress={() => switchToExercises()}
          icon="plus"
          size={sizes.iconSize}
          color={colors.highlight}
        />
      </View>
      {hasSelected && (
        <FloatingActionButton
          icon="content-save"
          onPress={() => saveRoutine()}
        />
      )}
      <View style={styles.wrapper}>
        <DraggableFlatList
          data={exerciseList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onDragBegin={() => {
            setEnableSwipeGesture(false);
          }}
          onDragEnd={({ data }) => {
            setEnableSwipeGesture(true);
            setExerciseList(data);
          }}
        />
      </View>
    </View>
  );
};

export default SelectExercises;
