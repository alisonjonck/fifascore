import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerPicture from '../../Atoms/PlayerPicture';

const styles = StyleSheet.create({
  playerCardStyle: {
    alignItems: 'center'
  },
  playerName: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 10
  },
});

export default (props) => (
  <View style={styles.playerCardStyle}>
    <PlayerPicture source={props.playerPictureSource} />
    <Text style={styles.playerName}>{props.children}</Text>
  </View>
);
