import axios from 'axios';

export const NotificationSender = (fcmToken, message, title) => {
  console.log('FcmAohter', fcmToken, message, title);

  const NotificationData = {
    method: 'POST',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: {
      Authorization:
        'key=AAAAntfCcWI:APA91bGvB4v_-ERQEr5c9uAUbgB4OO5eqzGklQtRDSy0nuBCl488yFVTM0VqfjJKVfg21ABmip856AK_R9x8rYqvTq3AMowRdEqdYj9wrCDajnNUEkpeN0lpVo-lEptGSZ3WAqyIPLV_',
      'Content-Type': 'application/json',
    },
    data: {
      registration_ids: [fcmToken],
      notification: {body: message, title: title},
    },
  };

  try {
    axios
      .request(NotificationData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    console.log('NotificationError', error);
  }
};
