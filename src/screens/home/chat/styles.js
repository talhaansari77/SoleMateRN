import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import {verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  Padding: {
    padding: '10@s',
  },
  textInputContainer: {
    backgroundColor: colors.white,
    paddingTop: verticalScale(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: verticalScale(5),
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0.2,
    borderColor: colors.gray,
  },
  textInputContainer1: {
    width: '83%',

    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: verticalScale(20),
    maxHeight:verticalScale(100),
    padding:5,
    minHeight:verticalScale(32),
    // height: verticalScale(35),
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    paddingRight: verticalScale(5),
  },
  innerMainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // borderTopLeftRadius: verticalScale(30),
    // borderTopRightRadius: verticalScale(30)
    paddingHorizontal: verticalScale(15),

    // padding: verticalScale(15),
  },
  addContainer: {
    width: '23@s',
    height: '21@vs',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: moderateScale(8),
    left: 12,
  },
  endConversion:{
    width:"100%",height:"70%",position:"absolute",marginTop:verticalScale(45),
  },
  endHeader:{
    width: '100%',
    height: verticalScale(150),
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  endBottom:{

    width:"100%",height:"85%",backgroundColor:colors.gray,opacity:0.5

  }
});
