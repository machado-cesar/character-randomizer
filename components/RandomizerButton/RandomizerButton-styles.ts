import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  base: {
    // backgroundColor: '#D5D9A0',
    width: '60%',
    aspectRatio: 1,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DEB100',
    borderWidth: 4,
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
  notPressed: {
    backgroundColor: '#FFD700',
  },
  pressed: {
    backgroundColor: '#FFD764',
  },
});
