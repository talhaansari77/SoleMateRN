import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'

const ShowError = ({error}) => {
  return (
    error ? (
        <CustomText
          color={colors.red}
          fontFamily={'ProximaNova-Regular'}
          fontSize={11}
          marginTop={4}>
          * {error}
        </CustomText>
      ) : null
  )
}

export default ShowError