import firebaseApp from '../config/firebase';

const todos = firebaseApp.firestore().collection('todos');

export default {
  fetchTodos() {
    return todos.get();
  },
};
