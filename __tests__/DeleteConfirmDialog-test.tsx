import 'react-native';
import React from 'react';

import { render, within, fireEvent } from '@testing-library/react-native';
import DeleteConfirmDialog from '../ui/shared/components/DeleteConfirmDialog';
import { Provider } from 'react-native-paper';

const setVisible = jest.fn();
const onConfirm = jest.fn();

describe('<DeleteConfirmDialog />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render with the correct message', async () => {
    const { findByText, findByTestId } = render(
      <Provider>
        <DeleteConfirmDialog
          visible={true}
          setVisible={setVisible}
          onConfirm={onConfirm}
        />
      </Provider>,
    );

    const confirmMessage = await findByText('Are you sure you want to delete?');
    const actions = await findByTestId('dialog-actions');

    expect(confirmMessage).toBeTruthy();
    expect(within(actions).getByText('DELETE')).toBeTruthy();
    expect(within(actions).getByText('CANCEL')).toBeTruthy();
  });

  it('should dismiss when clicking DELETE', async () => {
    const { findByTestId } = render(
      <Provider>
        <DeleteConfirmDialog
          visible={true}
          setVisible={setVisible}
          onConfirm={onConfirm}
        />
      </Provider>,
    );

    const actions = await findByTestId('dialog-actions');
    const deleteButton = within(actions).getByText('DELETE');
    fireEvent(deleteButton, 'onPress');

    expect(setVisible).toBeCalled();
    expect(setVisible).toBeCalledWith(false);
    expect(onConfirm).toBeCalled();
  });

  it('should dismiss when clicking on CANCEL', async () => {
    const { findByTestId } = render(
      <Provider>
        <DeleteConfirmDialog
          visible={true}
          setVisible={setVisible}
          onConfirm={onConfirm}
        />
      </Provider>,
    );

    const actions = await findByTestId('dialog-actions');
    const cancelButton = within(actions).getByText('CANCEL');
    fireEvent(cancelButton, 'onPress');

    expect(setVisible).toBeCalled();
    expect(setVisible).toBeCalledWith(false);
    expect(onConfirm).not.toBeCalled();
  });
});
