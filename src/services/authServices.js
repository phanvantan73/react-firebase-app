import firebaseApp from '../config/firebase';

export default {
  register(email, password) {
    return firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
  login(email, password) {
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password);
  },
  logout() {
    return firebaseApp.auth().signOut();
  },
};
