import React, { useState } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Button from '../components/Button/ButtonComponent';
import Modal from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const RotateScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button onClick={() => setShowFirstModal(true)} />
      <Button onClick={() => setShowSecondModal(true)} />
      <Button onClick={() => setShowThirdModal(true)} />

      <Modal
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
        animationIn="rotate"
        animationInTiming={500}
        animationOut="slideOutRight"
        backdropOpacity={0.8}
        backdropTransitionOutTiming={500}
      />

      <Modal
        isVisible={showSecondModal}
        hideCloseButton
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
        animationIn="rotate"
        animationInTiming={600}
        animationOut="slideOutDown"
        backdropTransitionInTiming={600}
        backdropOpacity={0.7}
        style={styles.circleBottomRightModal}
      />

      <Modal
        hideCloseButton
        isVisible={showThirdModal}
        animationIn="rotate"
        animationOut="rotate"
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
        backdropOpacity={1}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={styles.circleCenteredModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  circleCenteredModal: {
    position: 'absolute',
    top: heigth / 2 - 169,
    left: width / 2 - 169,
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  circleBottomRightModal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 200,
    height: 200,
    borderRadius: 200,
  },
});

export default RotateScreen;
