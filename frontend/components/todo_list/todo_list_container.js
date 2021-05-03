import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodos, receiveTodo, fetchTodos } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import { receiveErrors } from '../../actions/error_actions';


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
