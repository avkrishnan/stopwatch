import React, { PropTypes } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import MenuButton from '../MenuButton'

const MenuBar = ({ toggleStart, recordLap, clear, running }) => (
  <View style={ styles.MenuBar }>
    <MenuButton onPress={ clear }>
      CLEAR
    </MenuButton>
    <MenuButton onPress={ recordLap }>
      LAP
    </MenuButton>
    <MenuButton onPress={ toggleStart }>
      { running ? 'STOP' : 'START' }
    </MenuButton>
  </View>
)

MenuBar.displayName = 'MenuBar'
MenuBar.propTypes = {
  toggleStart: PropTypes.func.isRequired,
  recordLap: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
}

export default MenuBar
