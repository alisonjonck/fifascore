import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.ibb.co/n3ddkLt/fifalogo.png" }} style={{ width: 300, height: 100 }} />
      <Text style={styles.welcome}>FIFA SCORE</Text>

      <View style={styles.playerContainer}>
        <View style={styles.charContainer}>
          <Image source={{ uri: "https://static.myfigurecollection.net/pics/figure/large/782222.jpg" }} style={styles.playerContainerRounded} />
          <Text style={styles.playerName}>SóTE</Text>
        </View>
        <Text style={styles.vs}>VS</Text>
        <View style={styles.charContainer}>
          <Image source={{ uri: "https://static.myfigurecollection.net/pics/figure/large/782229.jpg" }} style={styles.playerContainerRounded} />
          <Text style={styles.playerName}>TóTE</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#d90011',
    alignItems: 'center',
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  charContainer: {
    alignItems: 'center'
  },
  playerName: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 10
  },
  vs: {
    color: "#FFF",
    marginLeft: 10,
    marginRight: 10,
  },
  playerContainerRounded: {
    borderRadius: 60,
    width: 120,
    height: 120
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
