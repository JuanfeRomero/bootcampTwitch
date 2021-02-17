import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const WarningNotUsed = () => {
    return (
        <p>TODAVIA NO SE HA USADO EL CONTADOR.</p>
    )
}

const ListOfClicks = ({list}) => {
    return (
        <p>{list.join(',')}</p>
    )
}

const App = () => {
    /*
    const [left, setLeft] = useState(0);
    const [right, setRight] =  useState(0)
     */

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Mensaje en el estado',
    });
    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        const newCounterState = {
            ...counters,
            left: counters.left + 1,
        };
        setCounters(newCounterState);
        setClicks((prevClicks) => [...prevClicks, 'L']);
    };

    const handleClickRight = () => {
        const newCounterState = {
            ...counters,
            right: counters.right + 1,
        };
        setCounters(newCounterState);
        setClicks((prevClicks) => [...prevClicks, 'R']);
    }

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {counters.right}
            <p>clicks totales: {clicks.length}</p>
            {clicks.length === 0 ? 
            <WarningNotUsed/> : 
            <ListOfClicks list={clicks} />}
            <p>{counters.mensaje}</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
