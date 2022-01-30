import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
} from 'react-native';

import FantasyIcon from './components/FantasyIcon/FantasyIcon';
import FantasyModal from './components/FantasyModal/FantasyModal';
import RandomizerButton from './components/RandomizerButton/RandomizerButton';
import SettingsButton from './components/SettingsButton/SettingsButton';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const generate = () => {
    Alert.alert('Personagem gerado');
  };

  return (
    <>
      <View style={styles.background}>
        <FantasyModal visible={modalVisible}>
          <Text style={styles.modalText}>Opções</Text>
        </FantasyModal>

        {/* <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalText}>x</Text>
              </Pressable>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Opções</Text>
              </View>
            </View>
          </View>
        </Modal> */}

        <RandomizerButton onPress={generate} />
        <SettingsButton onPress={() => setModalVisible(true)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    // backgroundColor: '#D5D9A0',
    backgroundColor: '#B39A7B',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '35%',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#7a0000',
    borderWidth: 4,
    borderColor: '#424242',
  },
  modalContent: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  buttonClose: {
    alignSelf: 'flex-end',
    paddingEnd: 10,
  },

  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
