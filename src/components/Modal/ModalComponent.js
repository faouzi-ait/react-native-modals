import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {theme} from '../../theme/theme';

import Modal from 'react-native-modal';
import ButtonComponent from '../Button/ButtonComponent';

const ModalComponent = ({
  hideModal,
  onModalHide,
  hideCloseButton,
  style,
  children,
  ...props
 }) => {
  return (
    <Modal {...props} style={{ margin: 0 }}>
      <View style={[styles.modal, style]}>
        {!hideCloseButton && (
          <ButtonComponent
            title="Close"
            style={styles.closeButton}
            onClick={hideModal}
          />
        )}
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: theme.buttons.smallWidth,
    height: theme.buttons.smallHeight,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 30,
  },
});

export default ModalComponent;
