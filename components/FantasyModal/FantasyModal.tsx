import React, {Children, useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import styles from './FantasyModal-styles';
import {FantasyModalPropsType} from './FantasyModal-types';

const FantasyModal = ({
  onPress,
  visible,
  children,
  ...rest
}: FantasyModalPropsType): JSX.Element => {
  console.log(visible);

  const [modalVisible, setModalVisible] = useState(visible);

  console.log(modalVisible);

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>x</Text>
          </Pressable>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};
export default FantasyModal;
