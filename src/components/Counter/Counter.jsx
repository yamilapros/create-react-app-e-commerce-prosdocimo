import React from 'react'
/* import { useState } from 'react' */
import './Counter.css'

const Counter = ({counter, setCounter}) => {
    /* const [counter, setCounter] = useState(1) */

    const handlerClickLess = () => {
        setCounter(counter - 1)
        if(counter <= 1){
            alert('Ops...No puedes ingresar un número menor a 1')
            setCounter(1)
        }
    }
    const handlerClickMore = () => {
        setCounter(counter + 1)
        /* console.log(counter) */
    }
    return (
        <div className="counter-wrapper">
            <div className="button" onClick={handlerClickLess}><i class="fas fa-angle-left"></i></div>
            <input value={counter}/>
            <div className="button" onClick={handlerClickMore}><i class="fas fa-angle-right"></i></div>
        </div>
    )
}

export default Counter
