import React, { useState } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import Button from '../components/Button/ButtonComponent';
import Modal from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const FadeScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button onClick={() => setShowFirstModal(true)} style={styles.buttonTopLeft} />
      <Button onClick={() => setShowSecondModal(true)} style={styles.buttonTopRight} />
      <Button onClick={() => setShowThirdModal(true)} style={styles.buttonBottomLeft} />
      <Button onClick={() => setShowFourthModal(true)} style={styles.buttonBottomRight} />
    
      <Modal
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
      />

      <Modal
        isVisible={showSecondModal}
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
        animationIn="pulse"
        animationOut="fadeOut"
        style={styles.smallModal}
      />

      <Modal
        isVisible={showThirdModal}
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
        animationIn="tada"
        animationOut="fadeOut"
        backdropOpacity={1}
      />

      <Modal
        isVisible={showFourthModal}
        onBackdropPress={() => setShowFourthModal(false)}
        onBackButtonPress={() => setShowFourthModal(false)}
        hideModal={() => setShowFourthModal(false)}
        animationIn="shake"
        animationInTiming={500}
        animationOut="fadeOut"
        style={styles.bottomModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTopLeft: {
    position: 'absolute',
    top: heigth / 3 - theme.buttons.standardHeight / 2,
    left: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonTopRight: {
    position: 'absolute',
    top: heigth / 3 - theme.buttons.standardHeight / 2,
    right: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonBottomLeft: {
    position: 'absolute',
    top: heigth - heigth / 3 - theme.buttons.standardHeight / 2,
    left: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonBottomRight: {
    position: 'absolute',
    top: heigth - heigth / 3 - theme.buttons.standardHeight / 2,
    right: width / 4 - theme.buttons.standardWidth / 2,
  },
  smallModal: {
    flex: 1.25 / 3,
    margin: 30,
  },
  bottomModal: {
    height: 250,
    width,
    position: 'absolute',
    bottom: -10,
    borderRadius: 10,
  },
});

export default FadeScreen;
