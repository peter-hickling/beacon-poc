/**
 * Created by peterhickling on 21/03/2017.
 */

function initialiseState() {
  if (Notification.permission !== 'granted') {
    console.log('The user has not granted the notification permission.');
    return;
  } else if (Notification.permission === 'blocked') {
    console.log('The user has blocked notification permission and they cannot be rerequested.');
  } else {
    /* show a prompt to the user */
  }

  // Use serviceWorker.ready so this is only invoked
  // when the service worker is available.
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        if (!subscription) {
          // Set appropriate app states.
          return;
        }
      })
      .catch(function(err) {
        console.log('Error during getSubscription()', err);
      });
  });
}

function subscribeToNotifications() {
  if ('showNotification' in ServiceWorkerRegistration.prototype) {
    navigator.serviceworker.ready
      .then(registration => {
        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: new Uint8Array()
        });
      })
      .then(subscription => {
        // Do something with the subscription.
      })
      .catch(error => {
        // Do something with the error.
      });
  }
}