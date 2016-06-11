import React, { PropTypes } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const MenuButton = ({ children, onPress }) => (
  <TouchableHighlight
    style={ styles.MenuButton }
    onPress={ onPress }
    activeOpacity={ 0.75 }
    underlayColor={ '#fff' }>
    <Text style={ styles.MenuButtonText }>
      { children }
    </Text>
  </TouchableHighlight>
)

MenuButton.displayName = 'MenuButton'
MenuButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onPress: PropTypes.func.isRequired
}

export default MenuButton
