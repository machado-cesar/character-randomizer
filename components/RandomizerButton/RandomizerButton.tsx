import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import FantasyIcon from '../FantasyIcon/FantasyIcon';
import {RandomizerButtonPropsType} from './RandomizerButton-types';
import styles from './RandomizerButton-styles';

const RandomizerButton = ({
  onPress,
  ...rest
}: RandomizerButtonPropsType): JSX.Element => {
  const randomizerButtonStyles = {...styles.base, ...styles.shadow};

  const iconNames = ['wizard', 'wizard2'];
  const chosenIcon = iconNames[Math.floor(Math.random() * 2)];

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? styles.pressed.backgroundColor
            : styles.notPressed.backgroundColor,
        },
        randomizerButtonStyles,
      ]}>
      <FantasyIcon name={chosenIcon} size={135} color={'#DEB100'} />
    </Pressable>
  );
};
export default RandomizerButton;

// cor antiga do ícone: #7a0000
