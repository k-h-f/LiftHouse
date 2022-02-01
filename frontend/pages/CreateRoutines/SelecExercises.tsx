import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import GlobalText from '../../shared/components/GlobalText';
import PageStyle from '../../shared/stylesheets/pages.style';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  navigation.setOptions({ title: params?.routineName });

  return (
    <View style={PageStyle.wrapper}>
      <GlobalText isCaption>EXERCISES</GlobalText>
    </View>
  );
};

export default SelectExercises;
