/**
 * Created by peterhickling on 21/03/2017.
 */

function notifyMe(message, url) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function(permission) {
      let notification = new Notification('Notification title', {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: message,
      });

      notification.onclick = function () {
        window.open(url);
      };
    });
  } else {
    let notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: message,
    });

    notification.onclick = function () {
      window.open(url);
    };
  }
}

module.exports = {
  sendNotification: notifyMe
};