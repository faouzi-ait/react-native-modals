import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native';

import SwipePicker from './SwipePicker'
import ButtonComponent from '../components/Button/ButtonComponent';

const UtilsScreen = () => {
  const [showSwipePicker, setShowSwipePicker] = useState(false);

  return (
    <View>
      <ButtonComponent onClick={() => setShowSwipePicker(true)} />
      <SwipePicker
        isVisible={showSwipePicker}
        hideModal={() => setShowSwipePicker(false)}
        swipeLeftAction={() => Alert.alert('You swiped left!')}
        swipeRightAction={() => Alert.alert('You swiped right!')}
        style={{ flex: 1.5/3, backgroundColor: 'red' }}>
        <View>
            <Text>Swipe left or right</Text>
        </View>
      </SwipePicker>
    </View>
  );
};

export default UtilsScreen;
