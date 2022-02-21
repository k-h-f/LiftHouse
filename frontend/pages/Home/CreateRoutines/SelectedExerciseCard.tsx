import React from 'react';
import { Exercise } from '../../../../backend/dtos/Exercise';
import { useWindowDimensions, View } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import styles from './SelectedExerciseCard.style';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { colors, sizes } from '../../../themeConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useSelectedExercises from '../../Exercises/hooks/useSelectedExercises';

interface SelectedExerciseCardProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  exercise: Exercise;
  enabled: boolean;
  onDismiss: (exerciseToRemove: Exercise) => void;
}

const SelectedExerciseCard: React.FC<SelectedExerciseCardProps> = ({
  exercise,
  simultaneousHandlers,
  enabled,
  onDismiss,
}) => {
  const translateX = useSharedValue(0);
  const { width } = useWindowDimensions();
  const { onRemoveExercise } = useSelectedExercises();

  const TRANSLATE_X_THRESHOLD = -width * 0.3;

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX <= 0 ? event.translationX : 0;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-width, undefined, isFinished => {
          if (isFinished) {
            runOnJS(onDismiss)(exercise); //Have to pass in the exercise object for callback
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const cardAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const iconAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0),
    };
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.iconContainer, iconAnimationStyle]}>
        <MaterialCommunityIcons
          style={styles.iconContainer}
          name={'delete'}
          color={colors.error}
          size={sizes.iconSize}
        />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
        enabled={enabled}
      >
        <Animated.View style={[styles.card, cardAnimationStyle]}>
          <Text style={styles.text}>{exercise.exerciseName}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SelectedExerciseCard;
