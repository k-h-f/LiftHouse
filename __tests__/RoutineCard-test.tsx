import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';
import RoutineCard from '../frontend/shared/components/RoutineCard';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-native-paper';

const mockedProps = {
  title: 'footitle',
  routines: ['fooRoutine1', 'fooRoutine2'],
};

describe('<RoutineCard />', () => {
  it('should render with the correct title and routines', () => {
    const { getByText } = render(
      <Provider>
        <MenuProvider>
          <RoutineCard {...mockedProps} />
        </MenuProvider>
      </Provider>,
    );

    expect(getByText('footitle')).toBeTruthy();
    mockedProps.routines.forEach((routine: string) => {
      expect(getByText(routine)).toBeTruthy();
    });
  });
});
