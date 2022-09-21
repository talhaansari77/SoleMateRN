import { ScaledSheet } from "react-native-size-matters";
import { verticalScale } from "react-native-size-matters";

export const styles=ScaledSheet.create({

    bottomConatiner:{
        flexDirection:"row",alignItems:"center",
        paddingTop:verticalScale(10),
      }

})