import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import styles from './SettingsButton-styles';
import {SettingsButtonPropsType} from './SettingsButton-types';

const SettingsButton = ({
  onPress,
  ...rest
}: SettingsButtonPropsType): JSX.Element => {
  const settingsButtonStyles = {...styles.base, ...styles.shadow};

  return (
    <Pressable onPress={onPress} style={settingsButtonStyles}>
      <Text>Opções</Text>
    </Pressable>
  );
};
export default SettingsButton;
