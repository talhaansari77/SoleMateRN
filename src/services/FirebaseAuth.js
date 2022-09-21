import { auth,firestore, storage } from "../utils/firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignupEmailPassword = async (email, password) => {
    try {
      const userCredentials = await auth.
      createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredentials;
    } catch (error) {
      throw error;
    }
  };

  export const AuthLogin = async (email, password) => {
    try {
      const userCredentials = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredentials;
    } catch (error) {
      throw error;
    }
  };
  export const saveUser = async (authId, data) => {
    try {
      const response = await firestore
        .collection("users")
        .doc(authId)
        .set(data, { merge: true });
  
      return response;
    } catch (error) {
      throw error;
    }
  };
  export const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const filename = uri.substring(uri.lastIndexOf("/") + 1);
      const ref = storage.ref().child(filename).put(blob);
  
      const link = await (await ref).ref.getDownloadURL();
      return link;
    } catch (error) {
      // console.log("upload error", error);
    }
  };
  export const getSpecificeUser = async (userId) => {
    try {
      const user = await firestore.collection("users").doc(userId).get();
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

  export const getAuthId = async () => await AsyncStorage.getItem("userAuth");

