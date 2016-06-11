import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native'
import styles from './styles'
import Timer from './components/Timer'
import LapList from './components/LapList'
import MenuBar from './components/MenuBar'

export default React.createClass({
  getInitialState() {
    return {
      timeElapsed: null,
      startTime: null,
      running: false,
      laps: []
    }
  },

  resetTimer() {
    this.setState({
      startTime: new Date()
    })
  },

  clearTimer() {
    clearInterval(this.interval)
    this.setState({ running: false })
  },

  handleClearPress() {
    this.setState({ laps: [], timeElapsed: null })
    this.clearTimer()
  },

  handleLapPress() {
    const { timeElapsed, laps } = this.state

    this.setState({
      laps: [...laps, timeElapsed]
    })

    this.resetTimer()
  },

  handleStartPress() {
    if (this.state.running) {
      this.clearTimer()
      return
    }

    this.resetTimer()

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      })
    }, 50)
  },

  render() {
    const actions = {
      toggleStart: this.handleStartPress,
      recordLap: this.handleLapPress,
      clear: this.handleClearPress
    };

    return (
      <View style={ styles.container }>
        <Timer
          running={ this.state.running }
          timeElapsed={ this.state.timeElapsed || 0 } />
        <LapList laps={ this.state.laps } />
        <MenuBar running={ this.state.running } { ...actions } />
      </View>
    )
  }
})
