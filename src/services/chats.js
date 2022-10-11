import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {reactionData} from '../utils/Data';
import {chatFormat} from '../utils/Time';
import moment from 'moment';



export const sendMessage = async (from, to, text, image, status, reaction,file,audio) => {
  console.log('ImageData', status);
  const id =
    from > to
      ? from + '__' + to + '__' + uuid.v4()
      : to + '__' + from + '__' + uuid.v4();
  const message = {
    id,
    from,
    to,
    text,
    image: image ? image : '',
    status: status,
    reaction: reaction ? reaction : '',
    file:file? file:'',
    audio:audio?audio:'',
    // date:date,

    createdAt: new Date(),
  };
  await firestore().doc(`chats/${id}`).set(message, {merge: true});
  return {id, text, from, to, image, status,file,audio};
};

export const updateMessage = async (id, reactionData) => {
  await firestore().doc(`chats/${id}`).update(reactionData);
};

export const deleteChat = async (id) => {
  // const id =
  //   user1 > user2 ? user1 + '__' + user2 + '__' : user2 + '__' + user1 + '__';

  //     console.log("UserAllIdChat",id)

   // console.log("UserAllId",id)
   try {
    await firestore().doc(`chats/${id}`).delete().then(()=>{

      console.log("Delete Successfully")
    })
  } catch (error) {
    console.log('updateLastMessage', error);
  }


  // try {
  //   await firestore()
  //     .collection('chats')
      
  //     .startAt(id)
  //     .endAt(id + '~')
  //     .delete()
  //     .then(() => {
  //       console.log('Delete Successfully');
  //     });
  // } catch (error) {
  //   console.log('updateLastMessage', error);
  // }
};


export const getMessages = (user1, user2, setMessages,setGetAllChat) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  
  const id =
    user1 > user2 ? user1 + '__' + user2 + '__' : user2 + '__' + user1 + '__';
  return firestore()
    .collection('chats')
    .orderBy('id')
    .startAt(id)
    .endAt(id + '~')
    .onSnapshot(chatsSnapshot => {
      const messages = [];
      chatsSnapshot?.forEach(chatSnapshot => {
        const message = chatSnapshot.data();
        if (message?.id) {
          messages.push({
            _id: message.id,
            text: message?.text,
            date: message.createdAt,
            createdAt: chatFormat(message.createdAt, 'HH:mm A'),
            to: message.to,
            file:message.file,
            audio:message.audio,
            // date:message?.date,
            from: message.from,
            days: chatFormat(message.createdAt,"MMMM - DD"),
            // days:month(message.createdAt.getMonth()),


            image: message.image,
            status: message.status,
            reaction: message.reaction,
          });
        }
      });
      setGetAllChat(messages)
      setMessages(
        messages.sort((a, b) => a?.date?.seconds - b?.date?.seconds || 0),
      );
    });
};
