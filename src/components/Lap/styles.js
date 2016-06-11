import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/variables'

export default StyleSheet.create({
  Lap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 4,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.fadedBlue
  },
  Lap__text: {
    flex: 1,
    textAlign: 'right',
    fontFamily: fonts.sansSerif,
    fontSize: fonts.lg,
    color: colors.slate
  },
  Lap__number: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: colors.darkBlue,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Lap__numberText: {
    color: colors.darkBlue
  }
})
