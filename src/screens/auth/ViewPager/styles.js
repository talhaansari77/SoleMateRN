import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";

export const styles=ScaledSheet.create({
    pagerView: {
        height: "82%",
        backgroundColor:colors.white
      },
      bottomConatiner:{
        flexDirection:"row",alignItems:"center",paddingTop:verticalScale(10)
      }
    

})