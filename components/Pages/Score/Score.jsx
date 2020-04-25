import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../Mols/Header';
import PlayerContainer from '../../Orgs/PlayerContainer';
import ScoreContainer from '../../Orgs/ScoreContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#d90011',
    alignItems: 'center',
  },
});

export default React.memo(() => (
  <View style={styles.container}>
    <Header />
    <PlayerContainer />
    <ScoreContainer />
  </View>
));
