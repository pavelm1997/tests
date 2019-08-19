import React from 'react';
import s from './TodoItems.module.css'
import T from 'prop-types'
import cx from 'classnames/bind';

const classes = cx.bind(s);

const TodoItems = ({
                       title,
                       id,
                       completed,
                       onClick,
                       onRemoneClick
                   }) =>{
   const classNames = classes('container',{completed});
   return (
        <div onClick={() => onClick(id)} className={s.container}>
            <div className={classNames}>
                {title}
            </div>
            <button onClick={() => onClick(id)}>x</button>
        </div>
    );
};
TodoItems.propTypes = {
    title: T.string,
    id: T.string,
    completed: T.bool,
    onClick: T.func,
};
export default TodoItems;