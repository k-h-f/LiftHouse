import React from 'react';

import { Card, Title, Paragraph } from 'react-native-paper';
import styles, { optionsStyles } from './RoutineCard.style';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../themeConfig';

interface RoutineCardProps {
  title: string;
  routines: string[];
}

const RoutineCard: React.FC<RoutineCardProps> = ({ title, routines }) => {
  return (
    <Card style={styles.wrapper}>
      <Card.Content>
        <View style={styles.title_wrapper}>
          <Title style={styles.title}>{title}</Title>
          <Menu>
            <MenuTrigger>
              <MaterialCommunityIcons
                style={styles.three_dots}
                name={'dots-vertical'}
                color={colors.textPrimary}
                size={16}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption
                customStyles={optionsStyles}
                onSelect={() => console.log('clicked save')}
                text="Delete"
              />
            </MenuOptions>
          </Menu>
        </View>
        {routines.map(routine => (
          <Paragraph style={styles.paragraph}>{routine}</Paragraph>
        ))}
      </Card.Content>
    </Card>
  );
};

export default RoutineCard;
