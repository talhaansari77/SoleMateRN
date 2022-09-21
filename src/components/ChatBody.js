import {StyleSheet, View, FlatList, Image, Te} from 'react-native';
import React, {useState, useEffect} from 'react';

import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from './CustomText';
// import CustomText from "../CustomText";
// import CustomText from "./CustomText";
// import moment from "moment";

import {colors} from '../utils/Colors';
import profileImages from '../../assets/Profile_images';
import commonStyles from '../utils/CommonStyles';
import icons from '../../assets/icons';
import CustomImage from './CustomImage';
import {Spacer} from './Spacer';
// import colors from "../../Utils/colors";
// import { getMessages } from "../Services/chats";
export const ChatBody = ({
  userId,
  relatedUserId,
  messageText,
  authId,
  otherId,
}) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      mess: 'Hi brother keya hall ha ok ma theak ho ',
      time: '11:50 AM',
    },
  ]);
  //   useEffect(() => {
  //     const messageSubscriber = getMessages(userId, relatedUserId, setMessages);

  //     return () => messageSubscriber();
  //   }, [userId, relatedUserId]);

  // useEffect(() => {

  //   const messageSubscriber = getMessages( otherId,authId, setMessages);
  //   return () => messageSubscriber();

  // }, [authId,otherId]);

  const renderMessages = ({item}) => {
    // const isUser = message?.from == authId;
    return (
      <View style={{padding: 5, flex: 1}}>
        {/* msg1 */}

        {/* date */}
        <View style={{paddingBottom: verticalScale(20)}}>
          <CustomText label="January, 21" textStyle={styles.timerText} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // flexWrap:"wrap",
            display: 'flex',
            flex: 1,
            width: '100%',
          }}>
          <View
            style={{
              flex: 0.2,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 4,
            }}>
            <View
              style={{
                width: '100%',
                height: 60,

                borderRadius: 20,
                overflow: 'hidden',
                marginRight: scale(10),
              }}>
              <Image
                source={profileImages.profile01}
                resizeMode="cover"
                style={commonStyles.img}
              />
            </View>
          </View>
          <View style={{flex: 1, height: '100%', flexDirection: 'row'}}>
            <View style={styles.message2}>
              {/* <CustomText label={item.mess} textStyle={styles.messageText} timer={'10:50'} /> */}

              {/* Testing Extra */}
              <View>
                <CustomText
                  label={item.mess}
                  textStyle={styles.messageText}
                  textAlign={'justify'}
                />
              </View>
              <View
                style={{
                  alignSelf: 'flex-end',
                }}>
                <CustomText label={item.time} textStyle={styles.timerText1} />
              </View>
            </View>
            <View style={{justifyContent: 'center', marginLeft: scale(10)}}>
              <CustomImage
                src={icons.orangeTickReadIcon}
                height={15}
                width={15}
              />
            </View>
          </View>
          {/* <Text>cdjnbcjd</Text> */}
        </View>
        <Spacer height={verticalScale(20)} />

        <View style={styles.message1}>
          <View>
            <CustomText
              label={item.mess}
              textStyle={{...styles.messageText, color: colors.white}}
              textAlign={'justify'}
            />
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <CustomText
              label={item.time}
              textStyle={{...styles.timerText1, color: colors.white}}
            />
          </View>
        </View>
      </View>
    );
  };

  //   <View key={index} style={{ padding: 5 }}>
  //         <View style={isUser ? styles.message1 : styles.message2}>
  //           <CustomText label={message.text} textStyle={styles.messageText} />
  //         </View>
  //         <CustomText
  //           label={message.createdAt}
  //           textStyle={isUser ? styles.timerText : styles.timerText1}
  //         />
  //       </View>
  return (
    <FlatList
      data={messages}
      renderItem={renderMessages}
      style={styles.chat}
      keyExtractor={item => item._id}
      showsVerticalScrollIndicator={false}
    />
  );
};

// const styles = StyleSheet.create({
//   chat: {
//     padding: 15,
//     height: "75%",
//   },

//   message: {
//     backgroundColor: "#F3F3F3",
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     padding: 20,
//     minHeight: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   messageSpoil: {
//     height: 30,
//     width: 30,
//     alignSelf: "flex-end",
//     top: -30,
//     right: -15,
//   },
//   message1: {
//     backgroundColor: colors.primary,
//     alignSelf: "flex-end",
//     paddingHorizontal: verticalScale(15),
//     paddingVertical: verticalScale(5),
//     borderBottomLeftRadius: verticalScale(5),
//     borderBottomRightRadius: verticalScale(5),
//     borderTopLeftRadius: verticalScale(5),
//   },
//   timerText: {
//     fontSize: verticalScale(9),
//     color: colors.lightGray,
//     alignSelf: "flex-end",
//     marginTop: verticalScale(10),
//   },
//   timerText1: {
//     fontSize: verticalScale(10),
//     color: colors.lightGray,
//     alignSelf: "flex-start",
//     marginTop: verticalScale(10),
//   },
//   message2: {
//     backgroundColor:colors.inputBorder,
//     alignSelf: "flex-start",
//     paddingHorizontal: verticalScale(15),
//     paddingVertical: verticalScale(5),
//     borderBottomLeftRadius: verticalScale(5),
//     borderBottomRightRadius: verticalScale(5),
//     borderTopLeftRadius: verticalScale(5),

//   },
//   messageText: {
//     fontSize: verticalScale(10),
//     color: colors.lightBlack,
//   },
// });

const styles = ScaledSheet.create({
  chat: {
    padding: 0,
    height: '75%',
  },

  message: {
    backgroundColor: '#F3F3F3',
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    padding: 20,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageSpoil: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    top: -30,
    right: -15,
  },
  message1: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(10),
    color: colors.white,
    borderBottomLeftRadius: verticalScale(20),
    // borderBottomRightRadius: verticalScale(10),
    borderTopLeftRadius: verticalScale(20),
    borderTopRightRadius: verticalScale(20),
  },
  timerText: {
    fontSize: verticalScale(11),
    color: colors.gray,
    alignSelf: 'center',
    marginTop: verticalScale(10),
    fontFamily: 'regular',
  },
  timerText1: {
    fontSize: verticalScale(10),
    color: colors.gray,

    // marginTop: verticalScale(15),
    fontFamily: 'regular',
    // marginRight: "5@s",

    // marginLeft: "10@s",
  },
  message2: {
    backgroundColor: colors.white,
    // width: 'auto',
    //  alignSelf: "flex-start",
    paddingHorizontal: verticalScale(7),
    // paddingTop: verticalScale(10),
    // paddingBottom: verticalScale(5),
    paddingVertical: verticalScale(5),
    paddingLeft: 15,
    marginLeft: scale(5),
    borderTopRightRadius: verticalScale(22),
    borderBottomLeftRadius: verticalScale(2),
    borderTopLeftRadius: verticalScale(15),
    borderBottomRightRadius: verticalScale(22),
    // borderRadius: 20,
    // flexDirection: "row",
    // alignItems: "center",
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5,
    // backgroundColor: "red",
    // display:"flex",
    // flexWrap: "wrap",

    // width:"100%"
    maxWidth: '85%',
    // flexWrap:"wrap"
  },
  messageText: {
    fontSize: verticalScale(12),
    color: colors.black,
    fontFamily: 'regular',
  },
});
