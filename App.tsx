import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ripple from './components/Ripple';

export default function App() {
  return (
    <View style={styles.container}>
      <Ripple style={styles.ripple}>
        <Text style={{ fontSize: 25 }}>Tap</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //* IOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    //* Android
    elevation: 2
  }
});
