import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#d90011',
    alignItems: 'center',
  },
});

export default (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
)
