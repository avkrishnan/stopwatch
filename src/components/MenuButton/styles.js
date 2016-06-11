import { StyleSheet } from 'react-native'
import { colors } from '../../styles/variables'

export default StyleSheet.create({
  MenuButton: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MenuButtonText: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    color: colors.darkBlue
  }
})
