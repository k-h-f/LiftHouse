import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import QueryAlias from '../../../backend/queryAlias';
import GlobalText from '../../shared/components/GlobalText';
import PageStyle from '../../shared/stylesheets/pages.style';
import { colors } from '../../themeConfig';
import useDatabase from '../../utils/useDatabase';
import styles from '../components/EmptyRoutine.style';
import ExerciseCard from './ExerciseCard';
import searchBarTheme from './Exercises.style';
import BarbellRow from '../../shared/icons/barbell_row.svg';

const Execises: React.FC = () => {
  const { data, isCompleted } = useDatabase(QueryAlias.GET_EXERCISES);

  return (
    <View style={PageStyle.wrapper}>
      <TextInput
        theme={searchBarTheme}
        right={<TextInput.Icon name={'magnify'} color={colors.white} />}
        mode={'outlined'}
        selectionColor={colors.highlight}
        outlineColor={colors.highlight}
        // onChangeText={text => onChange && onChange(text)} //Since function is possibly undefined, check if it exists
      />
      <View>
        <GlobalText style={styles.exercise_header} isCaption>
          PUSH
        </GlobalText>
        <GlobalText style={styles.exercise_header} isCaption>
          PULL
        </GlobalText>
        <GlobalText style={styles.exercise_header} isCaption>
          LEGS
        </GlobalText>
      </View>
    </View>
  );
};

export default Execises;
