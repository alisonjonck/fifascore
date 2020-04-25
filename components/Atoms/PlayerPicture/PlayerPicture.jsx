import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pictureStyle: {
    borderRadius: 60,
    width: 120,
    height: 120
  },
});

export default (props) => (
  <Image {...props} style={styles.pictureStyle} />
);
