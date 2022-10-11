import firestore from '@react-native-firebase/firestore';

export const checkUserRequest = async (from, to) => {
  const id = from > to ? from + '__' + to : to + '__' + from;
  console.log('CompleteIdwith', id);
  const result = await firestore().collection('request').doc(id).get();
  return result.data();
};

export const createRequest = async requestData => {
  const id =
    requestData.from > requestData.to
      ? requestData.from + '__' + requestData.to
      : requestData.to + '__' + requestData.from;

  await firestore()
    .doc(`request/${id}`)
    .set(
      {
        ...requestData,
        createdAt: new Date(),
        id: id,
      },
      {merge: true},
    );
};

export const getAuthRequest = (authId, setData) => {
  console.log("UserRequest",authId)


  try {
    firestore()
      .collection('request')
      .onSnapshot(notesSnapshot => {
        const request = [];

        notesSnapshot?.forEach(note => {

          if (note?.data()?.from === authId) {
            request.push(note.data());
          } else if (note?.data()?.to == authId) {
            request.push(note.data());
          }
        });
        setData({request});
      });
  } catch (error) {
    console.log('getUserNotes line 47', error);
    throw error;
  }
};

export const updateLastMessage = async (from, to, lastMessage) => {
  console.log('fromLastMessage', from);
  const id = from > to ? from + '__' + to : to + '__' + from;
  try {
    await firestore().doc(`request/${id}`).set(
      {
        date: new Date(),
        lastMessage,
      },
      {merge: true},
    );
  } catch (error) {
    console.log('updateLastMessage', error);
  }
};

export const updateLastMessagewithImage = async (from, to, lastMessage) => {
  console.log('fromLastMessage', from);
  const id = from > to ? from + '__' + to : to + '__' + from;
  try {
    await firestore().doc(`request/${id}`).set(
      {
        date: new Date(),
        lastMessage,
      },
      {merge: true},
    );
  } catch (error) {
    console.log('updateLastMessage', error);
  }
};

export const deleteRequest = async (from, to,) => {
  // console.log('fromLastMessage', from);
  const id = from > to ? from + '__' + to : to + '__' + from;

  // console.log("UserAllId",id)
  try {
    await firestore().doc(`request/${id}`).delete().then(()=>{

      console.log("Delete Successfully")
    })
  } catch (error) {
    console.log('updateLastMessage', error);
  }
};
