import {GestureResponderEvent, ViewProps} from 'react-native';

export interface SettingsButtonPropsType extends ViewProps {
  onPress: (event: GestureResponderEvent) => void;
}
