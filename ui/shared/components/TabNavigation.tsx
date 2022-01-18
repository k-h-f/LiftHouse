import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { colors, sizes } from '../../themeConfig';

const Tab = createMaterialBottomTabNavigator();

/**
 * Interface to define what information is needed to render for the bottom navigation bar
 * @param icon This is a string which identifies the icon you want.
 *             Go to https://materialdesignicons.com/ to see the options
 */
export interface ComponentDefinition {
  reactComponent: React.FC<{}>;
  name: string;
  icon?: string;
}

/**
 * @param initialRouteName The name of the route to render on first load of the navigator.
 */
interface TabNavigationProps {
  components: ComponentDefinition[];
  initialRouteName?: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  components,
  initialRouteName,
}) => {
  return (
    <Tab.Navigator
      activeColor={colors.highlight}
      barStyle={{ backgroundColor: colors.primary }}
      initialRouteName={initialRouteName}
    >
      {components.map(component => (
        <Tab.Screen
          key={component.name}
          name={component.name}
          component={component.reactComponent}
          options={{
            tabBarTestID: `${component.name}_tab`,
            tabBarLabel: component.name,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                testID={`${component.name}_icon`}
                name={component.icon ?? ''}
                color={focused ? colors.highlight : colors.unfocused}
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
