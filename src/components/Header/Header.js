import React from 'react';
import s from './Header.module.css'
import T from 'prop-types'


const Header = ({
                    value,
                    onClick,
                    onChangeText,
                    importRef
                }) =>
    (
        <div className={s.conteiner}>
            <input
                value={value}
                ref={importRef}
                onChange={event => onChangeText(event.target.value)}/>
            <button onClick={onClick}>
                add todo
            </button>
        </div>
    );

Header.propTypes = {
    value: T.string,
    onClick: T.func,
    onChangeText: T.func,
};
export default Header;