import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './frontend/pages/Home';
import TabNavigation, {
  ComponentDefinition,
} from './frontend/shared/components/TabNavigation';

//Remove this after implemented the three main pages of the app
//This is just needed to render/test the bottom navigation bar
const emptyComponent: React.FC = () => <></>;

/**
 * Routes for the Stacked navigation
 */
export const enum Routes {
  HOME = 'Home',
  EXERCISES = 'Exercises',
  FIVETHREEONE = '5-3-1',
}

const Pages: ComponentDefinition[] = [
  { name: Routes.FIVETHREEONE, reactComponent: emptyComponent },
  { name: Routes.HOME, reactComponent: Home, icon: 'home' },
  { name: Routes.EXERCISES, reactComponent: emptyComponent, icon: 'dumbbell' },
];

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigation components={Pages} initialRouteName={Routes.HOME} />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
