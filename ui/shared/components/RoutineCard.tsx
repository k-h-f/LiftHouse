import React, { useState } from 'react';

import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './RoutineCard.style';

import { View } from 'react-native';
import DotsVerticalMenu from './DotsVerticalMenu';
import DeleteConfirmDialog from './DeleteConfirmDialog';

interface RoutineCardProps {
  title: string;
  routines: string[];
}

const RoutineCard: React.FC<RoutineCardProps> = ({ title, routines }) => {
  const [visible, setVisible] = useState(false);

  const onSelected = () => {
    setVisible(true);
  };

  const onConfirm = () => {};

  return (
    <>
      <Card style={styles.wrapper}>
        <Card.Content>
          <View style={styles.title_wrapper}>
            <Title style={styles.title}>{title}</Title>
            <DotsVerticalMenu options={['Delete']} onSelected={onSelected} />
          </View>
          {routines.map(routine => (
            <Paragraph key={routine} style={styles.paragraph}>
              {routine}
            </Paragraph>
          ))}
        </Card.Content>
      </Card>
      <DeleteConfirmDialog
        visible={visible}
        setVisible={setVisible}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default RoutineCard;
