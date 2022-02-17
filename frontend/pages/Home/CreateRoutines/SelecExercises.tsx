import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Exercise } from '../../../../backend/dtos/Exercise';
import GlobalText from '../../../shared/components/GlobalText';
import PageStyle from '../../../shared/stylesheets/pages.style';
import { colors, sizes } from '../../../themeConfig';
import useSelectedExercises from '../../Exercises/hooks/useSelectedExercises';
import styles from './SelecExercises.style';
import SelectedExerciseCard from './SelectedExerciseCard';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { ScrollView } from 'react-native-gesture-handler';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { selectedExercises, onRemoveExercise } = useSelectedExercises();
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const { params } = useRoute();
  const [enableSwipeGesture, setEnableSwipeGesture] = useState(true);
  const [scroll, setScroll] = useState(true);

  navigation.setOptions({ title: params?.routineName });

  const switchToExercises = () => {
    navigation.navigate('Exercises');
  };

  const cardRef = useRef(null);
  const draggableRef = useRef(null);
  const touchRef = useRef(null);

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
        ref={touchRef}
      >
        <SelectedExerciseCard
          ref={cardRef}
          key={item.exerciseName}
          exercise={item}
          simultaneousHandlers={[touchRef, draggableRef]}
          enabled={enableSwipeGesture}
          onDismiss={onDismiss}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    // <ScrollView ref={scrollRef} scrollEnabled={scroll}>
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
      <View>
        <DraggableFlatList
          data={exerciseList}
          ref={draggableRef}
          simultaneousHandlers={[cardRef, touchRef]}
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
    // </ScrollView>
  );
};

export default SelectExercises;
