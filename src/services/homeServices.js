import firebase from '../config/firebase';

export default {
  fetchUsers() {
    return firebase
      .firestore()
      .collection('users')
      .get();
  },
};
