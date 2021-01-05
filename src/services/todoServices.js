import firebaseApp from '../config/firebase';

const todos = firebaseApp.firestore().collection('todos');

export default {
  fetchTodos() {
    return todos.get();
  },
  fetchTodo(todoId) {
    return todos.doc(todoId).get();
  },
  store(todo) {
    return todos.add(todo);
  },
  update(todoId, data) {
    return todos.doc(todoId).set(data, { merge: true });
  },
};
