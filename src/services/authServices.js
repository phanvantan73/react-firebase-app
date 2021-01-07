import firebaseApp from '../config/firebase';

const authInstance = firebaseApp.auth();

export default {
  register(email, password) {
    return authInstance.createUserWithEmailAndPassword(email, password);
  },
  login(email, password) {
    return authInstance.signInWithEmailAndPassword(email, password);
  },
  logout() {
    return authInstance.signOut();
  },
};
