import 'react-native';
import React from 'react';
import App from '../App';

import { fireEvent, render } from '@testing-library/react-native';
import { Text } from 'react-native';

const homeComponent: React.FC = () => <Text>This is the homepage</Text>;

jest.mock('../frontend/pages/Home', () => homeComponent);

describe('<App />', () => {
  describe('Tab Navigation', () => {
    it('should render the home component when on home', () => {
      const { getByTestId, getByText } = render(<App />);

      fireEvent.press(getByTestId('Home_tab'));
      expect(getByText('This is the homepage')).toBeTruthy();
    });

    it('renders the tab navigation', () => {
      const { getByTestId } = render(<App />);

      expect(getByTestId('Home_tab')).toBeTruthy();
      expect(getByTestId('Exercises_tab')).toBeTruthy();
      expect(getByTestId('5-3-1_tab')).toBeTruthy();
    });
  });
});
