import firebaseApp from '../config/firebase';

export default {
  fetchUsers() {
    return firebaseApp
      .firestore()
      .collection('users')
      .get();
  },
};
