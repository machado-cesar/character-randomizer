import {GestureResponderEvent, ModalProps, ViewProps} from 'react-native';

export interface FantasyModalPropsType extends ModalProps {
  onPress?: (event: GestureResponderEvent) => void;
  visible: boolean;
}
