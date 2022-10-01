import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {chatFormat} from '../utils/Time';

export const sendMessage = async (from, to, text, image, status) => {
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

    createdAt: new Date(),
  };

  await firestore().doc(`chats/${id}`).set(message, {merge: true});
  return {id, text, from, to, image, status};
};

export const sendMessageWithImage = async (from, to, image) => {
  const id =
    from > to
      ? from + '__' + to + '__' + uuid.v4()
      : to + '__' + from + '__' + uuid.v4();
  const message = {
    id,
    from,
    to,
    image,
    createdAt: new Date(),
  };

  await firestore().doc(`chats/${id}`).set(message, {merge: true});
  return {id, image, from, to};
};

export const getMessages = (user1, user2, setMessages) => {
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
            from: message.from,
            image: message.image,
          });
        }
      });
      setMessages(
        messages.sort((a, b) => a?.date?.seconds - b?.date?.seconds || 0),
      );
    });
};
