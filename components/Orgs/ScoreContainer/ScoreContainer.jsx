import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActionButton from '../../Atoms/ActionButton';

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%'
  },
  itemScoreContainer: {
    justifyContent: 'center',
    height: 200,
    alignItems: 'center',
  },
});

export default React.memo(() => {
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
    <View style={styles.scoreContainer}>
      <View style={styles.itemScoreContainer}>
        <Text style={leftPlayerScoreColorObj}>{leftPlayerScore}</Text>
        <ActionButton title="-" onPress={decreaseLeftScore} color="#581717" />
        <ActionButton title="+" onPress={increaseLeftScore} color="#245624" />
      </View>
      <View style={styles.itemScoreContainer}>
        <Text style={rightPlayerScoreColorObj}>{rightPlayerScore}</Text>
        <ActionButton title="-" onPress={decreaseRightScore} color="#581717" />
        <ActionButton title="+" onPress={increaseRightScore} color="#245624" />
      </View>
    </View>
  );
});
