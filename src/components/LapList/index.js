import React, { Component, PropTypes } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import Lap from '../Lap'

class LapList extends Component {
  renderLaps() {
    return this.props.laps.map((lapTime, lapIndex) => {
      return (
        <Lap
          lapTime={ lapTime }
          lapIndex={ lapIndex }
          key={ lapIndex } />
      )
    })
  }

  render() {
    return (
      <ScrollView style={ styles.LapList }>
        <View>
          { this.renderLaps() }
        </View>
      </ScrollView>
    )
  }
}

LapList.displayName = "LapList"
LapList.propTypes = {
  laps: PropTypes.arrayOf(PropTypes.number)
}

export default LapList
