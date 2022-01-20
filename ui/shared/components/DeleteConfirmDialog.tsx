import React from 'react';
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper';
import { colors } from '../../themeConfig';
import styles from './DeleteConfirmDialog.style';

interface DeleteConfirmDialogProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onConfirm: () => void;
}

const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  visible,
  setVisible,
  onConfirm,
}) => {
  return (
    <Portal>
      <Dialog
        style={styles.wrapper}
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        <Dialog.Content testID="dialog-content">
          <Paragraph style={styles.paragraph}>
            Are you sure you want to delete?
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions testID="dialog-actions">
          <Button
            onPress={() => {
              setVisible(false);
            }}
            color={colors.highlight}
          >
            CANCEL
          </Button>
          <Button
            onPress={() => {
              setVisible(false);
              onConfirm();
            }}
            color={colors.highlight}
          >
            DELETE
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DeleteConfirmDialog;
