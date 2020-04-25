import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
});


export default () => <Text style={styles.title}>SCORE</Text>;
