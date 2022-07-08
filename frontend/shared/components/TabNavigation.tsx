import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Routes } from '../../../App';
import { colors, sizes } from '../themeConfig';
import style from './TabNavigation.style';

const Tab = createMaterialBottomTabNavigator();

/**
 * Interface to define what information is needed to render for the bottom navigation bar
 * @param reactComponent React component that will be rendered
 * @param name Name of the page e.g. Home
 * @param icon This is a string which identifies the icon you want.
 *             Go to https://materialdesignicons.com/ to see the options
 */
export interface ComponentDefinition {
  reactComponent: React.FC<{}>;
  name: string;
  icon?: string;
}

/**
 * @param components Components that will be mapped to Tabs in order
 * @param initialRouteName Sets the default/initial page based on a route
 */
interface TabNavigationProps {
  components: ComponentDefinition[];
  initialRouteName?: Routes;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  components,
  initialRouteName,
}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      barStyle={style.barStyle}
      labeled={false}
    >
      {components.map(component => (
        <Tab.Screen
          key={component.name}
          name={component.name}
          component={component.reactComponent}
          options={{
            tabBarTestID: `${component.name}_tab`,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                testID={`${component.name}_icon`}
                name={component.icon ?? ''}
                color={focused ? colors.focused : colors.unfocused}
                size={sizes.iconSize}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
