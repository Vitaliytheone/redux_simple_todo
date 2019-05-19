import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { store } from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    );
  }
}

export default App;
