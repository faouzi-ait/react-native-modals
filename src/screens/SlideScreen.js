import React, { useState } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';
import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const SlideScreen = () => {
  // uncomment needed state for modal implementation and import useState from React
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ButtonComponent style={styles.buttonTop} onClick={() => setShowFirstModal(true)} />
      <ButtonComponent style={styles.buttonLeft} onClick={() => setShowSecondModal(true)} />
      <ButtonComponent style={styles.buttonRight} onClick={() => setShowThirdModal(true)} />
      <ButtonComponent style={styles.buttonBottom} onClick={() => setShowFourthModal(true)} />
      
      
      {/* FIRST MODAL:  */}
      <ModalComponent
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        swipeDirection="up"
        onSwipeComplete={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        style={styles.topModal}
        />

      {/* SECOND MODAL:  */}
      <ModalComponent
        swipeDirection="left"
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={showSecondModal}
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        hideModal={() => setShowSecondModal(false)}
        onBackdropPress={() => setShowSecondModal(false)}
        onSwipeComplete={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
      />

      {/* THIRD MODAL */}
      <ModalComponent
        isVisible={showThirdModal}
        swipeDirection="right"
        animationIn="bounceInRight"
        animationOut="bounceOutRight"
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        onSwipeComplete={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
        backdropOpacity={1}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionOutTiming={500}
        style={styles.rightModal}
      />

      {/* FOURTH MODAL */}
      <ModalComponent
        isVisible={showFourthModal}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        onBackdropPress={() => setShowFourthModal(false)}
        onBackButtonPress={() => setShowFourthModal(false)}
        onSwipeComplete={() => setShowFourthModal(false)}
        hideModal={() => setShowFourthModal(false)}
        animationInTiming={500}
        animationOutTiming={500}
        style={styles.bottomModal}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTop: {
    position: 'absolute',
    top: heigth / 10,
    left: width / 2 - theme.buttons.standardWidth / 2,
  },
  buttonLeft: {
    position: 'absolute',
    top: heigth / 4,
    left: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonRight: {
    position: 'absolute',
    top: heigth / 4,
    right: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonBottom: {
    position: 'absolute',
    top: heigth / 2.25,
    left: width / 2 - theme.buttons.standardWidth / 2,
  },
  topModal: {
    flex: 1 / 3,
  },
  rightModal: {
    flex: 1,
  },
  bottomModal: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    height: 250,
    width,
    borderRadius: 10,
  },
});

export default SlideScreen;
