import React, {Component} from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import Header from "./components/Header/Header";
import {creteTodo} from './components/utils/creators'
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ' ',
            todos: []
        };
        this.onChangeInputText = this.onChangeInputText.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this._importRef = React.createRef();
    };

    onChangeInputText(inputValue) {
        this.setState({inputValue})
    }

    handleAddTodo() {
        const todo = creteTodo(this.state.inputValue);

        this.setState({
            inputValue: '',
            todos: [todo].concat(this.state.todos)
        })
        this._importRef.current.focus();
    }

    handleTodoClick(id) {
const currentTodoIndex = this.state.todos.findIndex(i => i.id ===id);
if (currentTodoIndex === -1){
    return;
}
const  todo = {...this.state.todos[currentTodoIndex]};
todo.completed =!todo.completed;
const newTodos = [...this.state.todos]
    newTodos[currentTodoIndex] = todo;

    this.setState({
        todos:newTodos,
    })
    }

    handleTodoRemoveClick(id) {

    }

    render() {
        return (
            <div className={s.App}>
                <div><Header
                    value={this.state.inputValue}
                    onChangeText={this.onChangeInputText}
                    onClick={this.handleAddTodo}
                    importRef={this._importRef}
                />
                </div>
                <div>
                    <TodoList items={this.state.todos}
                              onTodoClick={this.handleTodoClick}
                              onTodoRemoveClick={this.handleTodoRemoveClick}
                    />
                </div>
            </div>
        );
    }
}

export default App;
