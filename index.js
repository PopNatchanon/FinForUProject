/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/navigator/App';
// import App from './src/tools/Tools';
import { name as appName } from './app.json';


AppRegistry.registerComponent(appName, () => App);
