/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBKp2Z9FMnv7ZZtLUVSqDr8oEgFX-jTNzI",
  authDomain: "supper-chat-a6ac0.firebaseapp.com",
  projectId: "supper-chat-a6ac0",
  storageBucket: "supper-chat-a6ac0.appspot.com",
  messagingSenderId: "968639429044",
  appId: "1:968639429044:web:e04150fb51c974b0835ae1",
  measurementId: "G-0TYD6YPNM3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
