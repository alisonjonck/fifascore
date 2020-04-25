import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  playerScore: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
  },
  buttonTextStyle: {
    color: "black"
  },
  buttonStyleWrapper: {
    width: 140,
    height: 140,
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#d90011',
    alignItems: 'center',
  },
  itemScoreContainer: {
    justifyContent: 'center',
    height: 200,
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
    fontSize: 30,
    fontWeight: 'bold'
  },
  playerContainerRounded: {
    borderRadius: 60,
    width: 120,
    height: 120
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

const WrappedButton = (props) => (
  <View style={styles.buttonStyleWrapper}>
    <Button {...props} />
  </View>
);

export default function App() {
  const [leftPlayerScore, setLeftPlayerScore] = React.useState('0');
  const [rightPlayerScore, setRightPlayerScore] = React.useState('0');

  const decreaseLeftScore = () => parseInt(leftPlayerScore) !== 0 && setLeftPlayerScore(parseInt(leftPlayerScore) - 1);
  const increaseLeftScore = () => setLeftPlayerScore(parseInt(leftPlayerScore) + 1);

  const decreaseRightScore = () => parseInt(rightPlayerScore) !== 0 && setRightPlayerScore(parseInt(rightPlayerScore) - 1);
  const increaseRightScore = () => setRightPlayerScore(parseInt(rightPlayerScore) + 1);

  const playerScoreTemplate = {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
  };
  const leftPlayerScoreColorObj = { ...playerScoreTemplate };
  leftPlayerScoreColorObj.color = parseInt(leftPlayerScore) > parseInt(rightPlayerScore) ? "#63c763" : "#f5f577";
  const rightPlayerScoreColorObj = { ...playerScoreTemplate };
  rightPlayerScoreColorObj.color = parseInt(leftPlayerScore) < parseInt(rightPlayerScore) ? "#63c763" : "#f5f577";

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.ibb.co/n3ddkLt/fifalogo.png" }} style={{ width: 300, height: 100 }} />
      <Text style={styles.welcome}>SCORE</Text>

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

      <View style={styles.scoreContainer}>
        <View style={styles.itemScoreContainer}>
          <Text style={leftPlayerScoreColorObj}>{leftPlayerScore}</Text>
          <WrappedButton title="-" onPress={decreaseLeftScore} color="#581717" />
          <WrappedButton title="+" onPress={increaseLeftScore} color="#245624" />
        </View>
        <View style={styles.itemScoreContainer}>
          <Text style={rightPlayerScoreColorObj}>{rightPlayerScore}</Text>
          <WrappedButton title="-" onPress={decreaseRightScore} color="#581717" />
          <WrappedButton title="+" onPress={increaseRightScore} color="#245624" />
        </View>
      </View>

    </View>
  );
}
