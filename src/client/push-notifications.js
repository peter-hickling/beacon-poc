/**
 * Created by peterhickling on 21/03/2017.
 */

let notifyMe = (message, url, imageUrl) => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function(permission) {
      let notification = new Notification('Notification title', {
        icon: imageUrl,
        body: message,
      });

      notification.onclick = function () {
        window.open(url);
      };
    });
  } else {
    let notification = new Notification('Notification title', {
      icon: imageUrl,
      body: message,
    });

    notification.onclick = function () {
      window.open(url);
    };
  }
};

module.exports = {
  sendNotification: notifyMe
};