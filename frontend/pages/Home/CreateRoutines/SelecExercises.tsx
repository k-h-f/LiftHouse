import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import GlobalText from '../../../shared/components/GlobalText';
import PageStyle from '../../../shared/stylesheets/pages.style';
import { colors, sizes } from '../../../themeConfig';
import styles from './SelecExercises.style';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  navigation.setOptions({ title: params?.routineName });

  const switchToExercises = () => {
    navigation.navigate('Exercises');
  };

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
    </View>
  );
};

export default SelectExercises;
