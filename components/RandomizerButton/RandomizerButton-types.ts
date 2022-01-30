import {GestureResponderEvent, ViewProps} from 'react-native';

export interface RandomizerButtonPropsType extends ViewProps {
  onPress: (event: GestureResponderEvent) => void;
}
