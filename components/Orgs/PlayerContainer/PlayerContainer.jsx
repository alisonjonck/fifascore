import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PlayerCard from '../../Mols/PlayerCard';

const mockPlayer1 = { playerPictureSource: { uri: "https://static.myfigurecollection.net/pics/figure/large/782222.jpg" } };
const mockPlayer2 = { playerPictureSource: { uri: "https://static.myfigurecollection.net/pics/figure/large/782229.jpg" } };

const styles = StyleSheet.create({
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  vs: {
    color: "#FFF",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default () => (
  <View style={styles.playerContainer}>
    <PlayerCard {...mockPlayer1} >SóTE</PlayerCard>
    <Text style={styles.vs}>VS</Text>
    <PlayerCard {...mockPlayer2}>TóTE</PlayerCard>
  </View>
);
