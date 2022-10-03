import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Keyboard,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProfileNav from '../profile/molecules/ProfileNav';
import commonStyles from '../../../utils/CommonStyles';
import {styles} from './styles';
import CustomText from '../../../components/CustomText';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import HeaderConatiner from './request/Molecules/HeaderConatiner';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Divider} from 'react-native-elements';
import {ChatBody} from '../../../components/ChatBody';
import CustomButton from '../../../components/CustomButton';
import {sendMessage, sendMessageWithImage,  updateMessage} from '../../../services/chats';
import {
  updateLastMessage,
  updateLastMessagewithImage,
} from '../../../services/request';
import AddDocuments from './molecules/AddDocuments';
import {uploadImage} from '../../../services/FirebaseAuth';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Emoji from '../../../components/Emoji';
// import EmojisTab from '../../../components/EmojisTab';
// import EmojiContext from '../../../utils/context';
// import emojis from '../../../utils/emojis.json';
import {emojjisData} from '../../../utils/Data';
import AddReaction from './molecules/AddReaction';

const Tab = createMaterialTopTabNavigator();

const Chat = ({navigation, route}) => {
  const [textMessage, setTextMessage] = useState([]);
  const [settingModal, setSettingModal] = useState(false);
  const [documentsModal, setDocumentsModal] = useState(false);
  const [image, setImage] = useState('');
  const [status, setStatus] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [reaction, setReaction] = useState('')
  const [reactionModal,setReactionModal] = useState(false)
  const [reactionObject, setReactionObject] = useState({})

  console.log("ReactionObject",reactionObject)

  const onSend = async result => {
    console.log('Resimage', result);
    let imgResponse = '';
    if (result) {
      imgResponse = await uploadImage(result.uri, route.params?.authId);
      console.log('imageRes', imgResponse);
    }

    const messageData = await sendMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      textMessage ? textMessage : '',
      imgResponse ? imgResponse : '',
      status,
      reaction?reaction:''
    );

    updateLastMessage(
      route.params?.authId,
      route?.params?.otherUserId,
      messageData,
    );
    


    setTextMessage('');
    setImage('');
  };

  const saveReaction= async(reaction)=>{

    // console.log("reactionObject",reactionObject._id)
    // reactionObject

    // uniqueId,from, to, image,date,reaction

    // await UpdateUser(authId, {
    //   wishlist: firebase.firestore.FieldValue.arrayUnion({
    //     wishlist_id: id,
    //     createdAt: firebase.firestore.Timestamp.now(),
    //   }),

    await updateMessage(reactionObject._id,{

      reaction:reaction

    });


    

  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowEmojis(!showEmojis);
          setTextMessage(...item.char);
        }}
        style={{padding: 15}}>
        <Text style={{fontSize:14}} >{item.char}</Text>
      </TouchableOpacity>
    );
  };

  return (
    // <EmojiContext.Provider value={{emoji, setEmoji}}>
    <SafeAreaView style={commonStyles.commonMain}>
      <View style={styles.mainContainer}>
        <HeaderConatiner
          label="Samer"
          back={() => {
            navigation.goBack();
          }}
          setting={() => {
            setSettingModal(!settingModal);
          }}
        />

        <Spacer height={verticalScale(1)} />
        <View style={styles.innerMainContainer}>
          <ChatBody
          setReactionObject={setReactionObject}
          reactionModal={reactionModal}
          setReactionModal={setReactionModal}
            authId={route.params?.authId}
            otherId={route?.params?.otherUserId}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setDocumentsModal(true);
            }}
            style={styles.addContainer}>
            <Feather
              name="plus"
              size={moderateScale(18)}
              color={colors.white}
            />
          </TouchableOpacity>
          <View style={{width: verticalScale(20)}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.textInputContainer1}>
              <TextInput
                placeholder="message"
                multiline={true}
                placeholderTextColor="#667085"
                style={{
                  fontSize: verticalScale(12),
                  width: '90%',
                  color: colors.black,
                  paddingLeft: 10,
                }}
                value={textMessage}
                onChangeText={value => setTextMessage(value)}
              />
              <TouchableOpacity
                onPress={() => {
                  setShowEmojis(!showEmojis);
                }}
                activeOpacity={0.6}>
                <SimpleLineIcons
                  name="emotsmile"
                  size={moderateScale(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={{width: verticalScale(5)}} />
            {textMessage ? (
              <TouchableOpacity
                onPress={() => {
                  onSend();
                }}
                activeOpacity={0.6}>
                <Feather
                  name="send"
                  size={moderateScale(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6}>
                <MaterialCommunityIcons
                  name="microphone-outline"
                  size={moderateScale(30)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {settingModal ? (
          <View>
            <View
              style={{
                width: '100%',
                height: verticalScale(150),
                backgroundColor: colors.white,
                top: verticalScale(-78),
                alignItems: 'center',
              }}>
              <View
                style={{
                  paddingVertical: 30,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <CustomButton
                  title={"View Samer's Profile"}
                  fontSize={verticalScale(18)}
                  borderRadius={25}
                  backgroundColor={colors.primary}
                  width="90%"
                  fontFamily="ProximaNova-Bold"
                />
              </View>
              <View style={{width: '100%', alignItems: 'center'}}>
                <CustomButton
                  backgroundColor={colors.darkOrange}
                  borderRadius={25}
                  fontSize={verticalScale(18)}
                  fontFamily="ProximaNova-Bold"
                  onPress={() => {
                    navigation.navigate('Report');

                    // Report
                  }}
                  width="90%"
                  title={'End Conversation'}
                />
              </View>
            </View>
            <View
              style={{
                // height: "70%",
                backgroundColor: 'rgba(0,0,0,0.7)',

                opacity: 0.5,
                marginTop: verticalScale(-80),
              }}
            />
          </View>
        ) : (
          <></>
        )}

        {/* <SettingModal  settingModal={settingModal}setSettingModal={setSettingModal}/> */}
      </View>

      {showEmojis && (
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: '#e5e5e5',
          }}>
          <FlatList
            data={emojjisData}
            keyExtractor={item => item.char}
            numColumns={8}
            renderItem={renderItem}
          />
          {/* <FlatList
            // style={styles.container}
            data={emojjisData}
            keyExtractor={item => item.char}
            // numColumns={8}
            renderItem={item => {
              return (
                <TouchableOpacity>
                  <Text>{item.char}</Text>
                </TouchableOpacity>
              );
            }}
          /> */}
          {/* <ScrollView horizontal>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {emojjisData.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setShowEmojis(!showEmojis);
                      setTextMessage(...item.char);
                    }}
                    style={{padding: 20}}>
                    <Text>{item.char}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView> */}

          {/* <Tab.Navigator>
              {Object.keys(emojis).map(key => (
                <Tab.Screen key={key} name={emojis[key][0].char}>
                  {() => <EmojisTab emojis={emojis[key]} />}
                </Tab.Screen>
              ))}
            </Tab.Navigator> */}
        </View>
      )}

      <AddDocuments
        image={image}
        setImage={setImage}
        onSend={onSend}
        documentsModal={documentsModal}
        setDocumentsModal={setDocumentsModal}
      />
      <AddReaction 
      setReaction={setReaction}
      reactionModal={reactionModal}
      saveReaction={saveReaction}
      setReactionModal={setReactionModal}
      />
    </SafeAreaView>
    // </EmojiContext.Provider>
  );
};

export default Chat;
