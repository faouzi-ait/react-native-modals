import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Modal from '../components/Modal/ModalComponent';

const SwipePicker = ({
  isVisible,
  hideModal,
  swipeLeftAction,
  swipeRightAction,
  style,
  children
}) => {
  const [swipeDirection, setSwipeDirection] = useState('left');

  const handleSwipe = () => {
    hideModal();
    if (swipeDirection === 'left') {
      swipeLeftAction();
    } else {
      swipeRightAction();
    }
  };

  const handleSwipeDirectionSet = (positionX) => {
    if (positionX > 20 && swipeDirection === 'left') {
      setSwipeDirection('right');
    }
    if (positionX < 20 && swipeDirection === 'right') {
      setSwipeDirection('left');
    }
  };

  return (
    <Modal
        isVisible={isVisible}
        hideModal={hideModal}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        swipeDirection={['left', 'right']}
        onSwipeComplete={handleSwipe}
        onLayout={event => handleSwipeDirectionSet(event.nativeEvent.layout.x)}
        style={style}>
        {children}
    </Modal>
  );
};

export default SwipePicker;