import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';


export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    await messaging().registerDeviceForRemoteMessages(); 

    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken();
    }
}



export const notificationServices = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        // nav here ...
    });
    // ForeGround
    messaging().onMessage(async remoteMessage => {
        // console.log(' new ForeGround message arrived!', JSON.stringify(remoteMessage));
    });
    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
        });
}


export const getFCMToken = async (setToken) => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("Old FCM Token:✌", fcmToken)
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();

            if (fcmToken) {
                console.log("New FCM Token:🖐", fcmToken)
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        } catch (error) {
            console.log(error)
        }
    }

}

export const getCurrentFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    return fcmToken;
}
// import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'https://fcm.googleapis.com/fcm/send',
//   headers: {
//     Authorization: 'key=AAAAntfCcWI:APA91bGvB4v_-ERQEr5c9uAUbgB4OO5eqzGklQtRDSy0nuBCl488yFVTM0VqfjJKVfg21ABmip856AK_R9x8rYqvTq3AMowRdEqdYj9wrCDajnNUEkpeN0lpVo-lEptGSZ3WAqyIPLV_',
//     'Content-Type': 'application/json'
//   },
//   data: {
//     registration_ids: [
//       'fvFIGkPqQPiWgI-VT-CJjv:APA91bHbN0ZnAvdI0cN8vlZxd-q44UPoGOU2j2ILyFaYN73a2Bv2cc9-bE2oz6VAm4PnbopQOcOZImoQ4gfe6PnPbuVEu5Pv482j5ncmH-8uRMHtDugqC-Wzi7hMqM-zjMo3d76IeEJO'
//     ],
//     notification: {body: 'This is an FCM notification message!', title: 'FCM Message'}
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });