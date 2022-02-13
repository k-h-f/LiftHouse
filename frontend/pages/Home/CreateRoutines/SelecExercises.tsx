import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Exercise } from '../../../../backend/dtos/Exercise';
import GlobalText from '../../../shared/components/GlobalText';
import PageStyle from '../../../shared/stylesheets/pages.style';
import { colors, sizes } from '../../../themeConfig';
import useSelectedExercises from '../../Exercises/hooks/useSelectedExercises';
import styles from './SelecExercises.style';
import SelectedExerciseCard from './SelectedExerciseCard';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { selectedExercises, onRemoveExercise } = useSelectedExercises();
  const { params } = useRoute();
  const [enableSwipeGesture, setEnableSwipeGesture] = useState(true);
  const [enableOrderGesture, setEnableOrderGesture] = useState(false);
  const translateY = useSharedValue(0);

  navigation.setOptions({ title: params?.routineName });

  const switchToExercises = () => {
    navigation.navigate('Exercises');
  };

  const orderCallback = useCallback(
    (value: boolean) => {
      setEnableOrderGesture(value);
    },
    [setEnableOrderGesture],
  );

  const swipeCallback = useCallback(
    (value: boolean) => {
      setEnableSwipeGesture(value);
    },
    [setEnableSwipeGesture],
  );

  const longPressGesture =
    useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
      onActive: () => {
        console.log('activate');
        runOnJS(swipeCallback)(false);
        runOnJS(orderCallback)(true);
      },
      onFinish: () => {
        runOnJS(swipeCallback)(true);
      },
    });

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateY.value = event.translationY;
    },
    onEnd: () => {
      translateY.value = withTiming(0);
      runOnJS(orderCallback)(false);
      runOnJS(swipeCallback)(true);
    },
  });

  const cardAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  const scrollRef = useRef(null);
  const panRef = useRef(null);
  const loadRef = useRef(null);

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
      <LongPressGestureHandler
        simultaneousHandlers={panRef}
        onGestureEvent={longPressGesture}
      >
        <Animated.View>
          <PanGestureHandler
            ref={panRef}
            maxPointers={1}
            onGestureEvent={panGesture}
            enabled={enableOrderGesture}
          >
            <Animated.View style={[cardAnimationStyle]}>
              <ScrollView ref={scrollRef}>
                {selectedExercises.map((exercise: Exercise) => (
                  <SelectedExerciseCard
                    key={exercise.exerciseName}
                    exercise={exercise}
                    simultaneousHandlers={[scrollRef, panRef]}
                    enabled={enableSwipeGesture}
                  />
                ))}
              </ScrollView>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </LongPressGestureHandler>
    </View>
  );
};

export default SelectExercises;
