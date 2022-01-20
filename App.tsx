import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import Home from './frontend/pages/Home';
import HouseTheme, { colors } from './frontend/themeConfig';
import TabNavigation, {
  ComponentDefinition,
} from './frontend/shared/components/TabNavigation';
import { StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

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
        <MenuProvider>
          <TabNavigation components={Pages} initialRouteName="Home" />
        </MenuProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
