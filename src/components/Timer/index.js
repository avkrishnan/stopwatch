import React, { Component, PropTypes } from 'react'
import { Text, View, Animated, Easing } from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'
import styles from './styles'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.running && this.props.running) {
      this.startClockAnimation()
    }
  }

  startClockAnimation() {
    this.state.animation.setValue(0)
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }).start(() => {
      if (this.props.running) {
        this.startClockAnimation()
      }
    })
  }

  render() {
    return (
      <View style={ styles.Timer }>
        <View style={ styles.Timer__clock }>
          <Animated.View style={[
            styles.Timer__hands,
            {
              transform: [{
                rotate: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg']
                })
              }]
            }
          ]}>
            <View style={ styles.Timer__handTop } />
            <View style={ styles.Timer__handBottom } />
          </Animated.View>
        </View>

        <Text style={ styles.Timer__text }>
          { formatTime(this.props.timeElapsed) }
        </Text>
      </View>
    )
  }
}

Timer.displayName = 'Timer'
Timer.propTypes = {
  timeElapsed: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired
}

export default Timer
