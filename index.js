/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './backgend/db-service';

AppRegistry.registerComponent(appName, () => App);
