import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FantasyIcon from './components/FantasyIcon/FantasyIcon';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const safeAreaStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const randomizerButtonStyles = {
    ...styles.randomizerButtonBase,
    ...styles.buttonShadow,
  };
  const settingsButtonStyles = {
    ...styles.settingsButtonBase,
    ...styles.buttonShadow,
  };

  const generate = () => {
    Alert.alert('Personagem gerado');
  };

  const settings = () => {
    Alert.alert('Opções');
  };

  return (
    <>
      <View style={styles.background}>
        <Pressable onPress={generate} style={randomizerButtonStyles}>
          <FantasyIcon name="wizard" size={120} color={'#7a0000'} />
        </Pressable>
        <Pressable onPress={settings} style={settingsButtonStyles}>
          <Text>Opções</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#D5D9A0',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '35%',
  },
  randomizerButtonBase: {
    backgroundColor: '#D5D9A0',
    width: '60%',
    aspectRatio: 1,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButtonBase: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonShadow: {
    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    //android
    elevation: 12,
  },
});

export default App;
