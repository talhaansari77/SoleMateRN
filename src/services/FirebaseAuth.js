import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import moment from 'moment';

// import auth from '@react-native-firebase/auth';

// export const SignupEmailPassword = async (email, password) => {
//   try {
//     const userCredentials = await auth().createUserWithEmailAndPassword(
//       email,
//       password,
//     );
//     return userCredentials;
//   } catch (error) {
//     throw error;
//   }
// };

export const deleteFile = async (file) => {
  const storageRef = firebase.storage().ref();

  // [START storage_delete_file]
  // Create a reference to the file to delete
  var desertRef = storageRef.child(file);

  // Delete the file
  desertRef
    .delete()
    .then(() => {
      // File deleted successfully
      console.log('File deleted successfully');
    })
    .catch(error => {
      // Uh-oh, an error occurred!
      console.log('Uh-oh, an error occurred! ✋',error);
    });
  // [END storage_delete_file]
};

export const getTime = async () => {
  return firebase.firestore.Timestamp.now();
};

export const fromNow = time => {
  const fireBaseTime = new Date(
    time.seconds * 100 + time.nanoseconds / 1000000,
  );
  return moment(fireBaseTime).fromNow();
};

export const signout = async () => {
  return auth().signOut();
};

export const AuthLogin = async (email, password) => {
  // try {
  //   const userCredentials = await auth.signInWithEmailAndPassword(
  //     email,
  //     password
  //   );
  //   return userCredentials;
  // } catch (error) {
  //   throw error;
  // }
};
export const saveUser = async (authId, data) => {
  try {
    const response = await firestore()
      .collection('users')
      .doc(authId)
      .set(data, {merge: true});
    return response;
  } catch (error) {
    throw error;
  }
};
export const uploadImage = async (uri, path) => {
  console.log('ImagrAndPath', uri, path);
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage().ref(path + uuid.v4());
    const task = ref.put(blob);
    return new Promise((resolve, reject) => {
      task.on(
        'state_changed',
        () => {},
        err => {
          reject(err);
        },
        async () => {
          const url = await task.snapshot.ref.getDownloadURL();
          resolve(url);
        },
      );
    });
  } catch (err) {
    console.log('uploadImage error: ' + err.message);
  }
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const ref = storage().ref().child(filename).put(blob);
    const link = await (await ref).ref.getDownloadURL();
    return link;
  } catch (error) {
    // console.log("upload error", error);
  }
};

// export const addUserData = async (id, phone, email, name, image) => {
//   await firestore().doc(`users/${id}`).set(
//     {
//       id,
//       email,
//       phone,
//       name,
//       image,
//     },
//     {merge: true},
//   );
// };

export const getSpecificeUser = async userId => {
  try {
    const user = await firestore().collection('users').doc(userId).get();
    return user.data();
  } catch (error) {
    // console.log('getUser line 51', error);
    throw error;
  }
};

// export const getUser = (setAuthData, authId,) => {
//   try {
//     return firestore.collection("users").onSnapshot((querySnap) => {
//       const announcements = [];
//       querySnap.forEach((announcement) => {
//         let temp = announcement.data();
//         console.log("tempData",temp)
//         if (temp.id != authId) {
//           setAuthData(announcements);

//         }

//       });
//     });
//   } catch (error) {
//     console.log("user error", error);
//   }
// };

export const getAuthId = async () => await AsyncStorage.getItem('userAuth');
