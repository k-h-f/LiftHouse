import React from 'react';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../themeConfig';
import styles, { optionsStyles } from './DotsVerticalMenu.style';

/**
 * Interface to define the dropdown options wanted for the 3 dot vertical component
 * @param options Array string of the options you want to see
 * @param onSelected This is the callback method to determine what was selected
 */
interface DotsVerticalMenuProps {
  options: string[];
  onSelected: (option: string) => void;
}

const DotsVerticalMenu: React.FC<DotsVerticalMenuProps> = ({
  options,
  onSelected,
}) => {
  return (
    <Menu>
      <MenuTrigger>
        <MaterialCommunityIcons
          style={styles.three_dots}
          name={'dots-vertical'}
          color={colors.textPrimary}
          size={16}
        />
      </MenuTrigger>
      <MenuOptions>
        {options.map(option => (
          <MenuOption
            key={option}
            customStyles={optionsStyles}
            onSelect={() => onSelected(option)}
            text={option}
          />
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default DotsVerticalMenu;
