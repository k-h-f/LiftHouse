import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import Home from './ui/pages/Home';
import HouseTheme, { colors } from './ui/themeConfig';
import TabNavigation, {
  ComponentDefinition,
} from './ui/shared/components/TabNavigation';
import { StatusBar } from 'react-native';

//Remove this after implemented the three main pages of the app
//This is just needed to render/test the bottom navigation bar
const emptyComponent: React.FC = () => <></>;

const Pages: ComponentDefinition[] = [
  { name: '5-3-1', reactComponent: emptyComponent },
  { name: 'Home', reactComponent: Home, icon: 'home' },
  { name: 'Exercises', reactComponent: emptyComponent, icon: 'dumbbell' },
];

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer theme={HouseTheme}>
        <StatusBar backgroundColor={colors.primary} />
        <TabNavigation components={Pages} initialRouteName="Home" />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
