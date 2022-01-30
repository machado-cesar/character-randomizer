import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
