import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [next, setNext] = useState(false);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={styles.wrapper}>
            {next === false ? (
              <View style={styles.wrapper}>
                <Text style={styles.helloEveryone}>Hello Everyone</Text>
                <View style={styles.separator} />
                <TouchableOpacity
                  onPress={() => setNext(true)}
                  style={styles.btn}
                >
                  <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.blackLivesMatter}>
                <Text style={styles.blackLivesMatterText}>
                  Black Lives Matter.
                </Text>
                <View style={styles.separator} />
                <TouchableOpacity
                  onPress={() => setNext(false)}
                  style={styles.blackLivesMatterBtn}
                >
                  <Text style={styles.blackLivesMatterTB}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  blackLivesMatter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  btn: {
    width: '40%',
    height: '2rem',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  blackLivesMatterBtn: {
    width: '40%',
    height: '2rem',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  separator: {
    marginBottom: '2rem',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  blackLivesMatterTB: {
    color: 'black',
    fontSize: 20,
  },
  blackLivesMatterText: {
    color: 'white',
    fontSize: 25,
  },
  helloEveryone: {
    color: 'black',
    fontSize: 25,
  },
});
