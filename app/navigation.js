//@flow
import {
    createAppContainer,
    createStackNavigator,
    NavigationRouteConfig,
    StackNavigatorConfig
} from 'react-navigation';
import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import CityA from './containers/CityA';
import CityB from './containers/CityB';
import SelectCity from './containers/SelectCity';

const routes: NavigationRouteConfig = {
    CityA,
    CityB,
    SelectCity   
}

const stackConfig: StackNavigatorConfig = {
    initialRouteName: 'SelectCity',
    headerMode: 'screen'
}

const appStackNavigator = createStackNavigator(routes, stackConfig);

const appContainer = createAppContainer(appStackNavigator);

export default appContainer;