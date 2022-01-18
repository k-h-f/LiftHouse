import 'react-native';
import React from 'react';
import App from '../App';

import { render } from '@testing-library/react-native';

describe('<App />', () => {
  describe('Tab Navigation', () => {
    it('renders the tab navigation', () => {
      const { getByTestId } = render(<App />);

      expect(getByTestId('Home_tab')).toBeTruthy();
      expect(getByTestId('Exercises_tab')).toBeTruthy();
      expect(getByTestId('5-3-1_tab')).toBeTruthy();
    });
  });
});
