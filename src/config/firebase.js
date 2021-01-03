import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECT_ID,
};

const firebaseApp = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebaseApp;
