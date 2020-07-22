import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Slide from './Slide/index';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';
import Animated from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
const OnBoarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColorAnimated = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ['#BFEAF5', '#BEECC4', '#FFE409', '#FFDDDD'],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slider,
          { backgroundColor: backgroundColorAnimated as any },
        ]}
      >
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColorAnimated }}
        />
        <View
          style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}
        ></View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: 0.61 * height,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});
