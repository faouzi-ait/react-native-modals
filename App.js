import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;

