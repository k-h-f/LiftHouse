import 'react-native';
import React from 'react';

import { render, within } from '@testing-library/react-native';
import EmptyRoutine from '../ui/pages/components/EmptyRoutine';

describe('<EmptyRoutine />', () => {
  it('should render the correct message', () => {
    const { getByText } = render(<EmptyRoutine />);

    expect(
      getByText('No Routines added. Start creating routines'),
    ).toBeTruthy();
  });

  it('should render the create button', () => {
    const { getByTestId } = render(<EmptyRoutine />);

    expect(getByTestId('create-btn')).toBeTruthy();
    expect(within(getByTestId('create-btn')).getByText('CREATE')).toBeTruthy();
  });
});
