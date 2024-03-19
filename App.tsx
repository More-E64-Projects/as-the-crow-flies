import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 40,
    color: 'red',
    alignSelf: 'center',
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello Crow Fans!</Text>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  </View>
);
