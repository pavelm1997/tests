import React from 'react';
import s from './TodoList.module.css'
import T from 'prop-types'
import TodoItems from "../TodoItems/TodoItems";


const TodoList = ({
                      items,
                      onTodoClick,
                      onTodoRemoveClick
                  }) =>
    (
        <ul className={s.conteiner}>
            {
                items.map(i => (<TodoItems onClick={onTodoClick} onRemoneClick={onTodoRemoveClick} key={i.id}{...i}/>))
            }
        </ul>
    );

TodoList.propTypes = {
    value: T.string,
    onClick: T.func,
    onChangeText: T.func,
};
export default TodoList;