import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  base: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
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
