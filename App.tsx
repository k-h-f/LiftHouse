import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import Home from './frontend/pages/Home/Home';
import HouseTheme, { colors } from './frontend/themeConfig';
import TabNavigation, {
  ComponentDefinition,
} from './frontend/shared/components/TabNavigation';
import { StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import configureStore from './frontend/configureStore';
import { Provider } from 'react-redux';

//Remove this after implemented the three main pages of the app
//This is just needed to render/test the bottom navigation bar
const emptyComponent: React.FC = () => <></>;

const Pages: ComponentDefinition[] = [
  { name: '5-3-1', reactComponent: emptyComponent },
  { name: 'Home', reactComponent: Home, icon: 'home' },
  { name: 'Exercises', reactComponent: emptyComponent, icon: 'dumbbell' },
];

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar backgroundColor={colors.primary} />
        <MenuProvider>
          <NavigationContainer theme={HouseTheme}>
            <TabNavigation components={Pages} initialRouteName="Home" />
          </NavigationContainer>
        </MenuProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
