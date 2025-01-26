console.log("Service Worker loaded"); // Debugging log
importScripts("https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging.js");

// Firebase configuration (use the same config as in your firebase.ts)
firebase.initializeApp({
  apiKey: "AIzaSyBdXLjkFMIRdguQjfrALhv8ODBZOhjCCjk",
  authDomain: "chatting-77e99.firebaseapp.com",
  databaseURL: "https://chatting-77e99-default-rtdb.firebaseio.com",
  projectId: "chatting-77e99",
  storageBucket: "chatting-77e99.appspot.com",
  messagingSenderId: "907371115156",
  appId: "1:907371115156:web:793f741b58f0c3cc75fa81",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification?.title || "Default Title";
  const notificationOptions = {
    body: payload.notification?.body || "Default message body.",
    icon: "/icon.png", // Add a valid icon path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
