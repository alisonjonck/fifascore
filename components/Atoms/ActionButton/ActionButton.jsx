import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  buttonStyleWrapper: {
    width: 140,
    height: 140,
    flex: 1,
    margin: 15,
  },
});

export default (props) => (
  <View style={styles.buttonStyleWrapper}>
    <Button {...props} />
  </View>
);
