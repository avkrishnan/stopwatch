import React, { Component, PropTypes } from 'react'
import { Text, View, Animated } from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'
import styles from './styles'

class Lap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.spring(this.state.animation, {
      toValue: 1,
      velocity: 10,
      tension: 40,
      friction: 6
    }).start()
  }

  render() {
    const { lapTime, lapIndex } = this.props

    return (
      <Animated.View
        style={[
          styles.Lap,
          {
            opacity: this.state.animation,
            transform: [{
              translateY: this.state.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [30, 0]
              })
            }]
          }
        ]}>
        <View style={ styles.Lap__number }>
          <Text style={ styles.Lap__numberText }>
            { lapIndex + 1 }
          </Text>
        </View>

        <Text style={ styles.Lap__text }>
          { formatTime(lapTime) }
        </Text>
      </Animated.View>
    )
  }
}

Lap.displayName = 'Lap'
Lap.propTypes = {
  lapTime: PropTypes.number,
  lapIndex: PropTypes.number.isRequired
}

export default Lap
