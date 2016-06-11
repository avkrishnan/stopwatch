import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/variables'

export default StyleSheet.create({
  Timer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Timer__text: {
    fontSize: fonts.xxl,
    fontFamily: fonts.sansSerif,
    fontWeight: 'bold',
    color: colors.slate
  },
  Timer__clock: {
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: colors.darkBlue,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Timer__hands: {
    flex: 1,
    height: 100,
    width: 5
  },
  Timer__handTop: {
    flex: 1,
    width: 5,
    borderRadius: 5,
    backgroundColor: colors.darkBlue
  },
  Timer__handBottom: {
    flex: 1,
    width: 5,
    backgroundColor: 'transparent'
  }
})
