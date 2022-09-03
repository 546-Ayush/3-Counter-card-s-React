import React, { useState } from 'react';
import style from './App.module.css';

const COUNTER_CARD = () => {
    let [current, setCurrent] = useState(0);

    function handleOnIncre() {
        setCurrent(current + 1);
    }

    function handleOnDecre() {
        let a = current - 1;
        if (a < 0) {
            setCurrent(0);
            alert('You cannot decrement it more')
        }
        else { setCurrent(a) }
    }

    return (
        <>
            <div className={style.parent}>
                <div className={style.box}>
                    <br />
                    <h2>{current}</h2>
                    <br />
                    <div className={style.btn}>
                        <button onClick={handleOnDecre} className={style.decre}>-</button>
                        <button onClick={handleOnIncre} >+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default COUNTER_CARD;