import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { useState } from 'react';  // esto es un hook de react.

const Counter = ({number})  => {
    return <h1>Valor de contador: {number}</h1>
}

function App(props) {
    // Hooks, intentar tener la menor cantidad de estados posibles
    const [contadorValue, setContador] = useState(0)

    // Es lo mismo que esto de abajo:
    // const contador = useState(0)
    // const contadorValue = contador[0]
    // const updateContador = contador[1]

    const handleClickUp = () => {
        setContador(contadorValue+1)
    }
    const handleClickDown = () => {
        setContador((contadorAnterior) => contadorAnterior-1)
    }
    const handleClickReset = () => {
        setContador(0)
    }
    const isEven = contadorValue %2 === 0;
    const mensajePar = `El numero es ${isEven? 'Par' : 'Impar'}`;
    return (
        <div>
            <Counter number={contadorValue} />
            <h2>{mensajePar}</h2>
            <p>React solo deberia cambiar el h1</p>
            <button onClick={handleClickUp}>
                Subir
            </button>
            <button onClick={handleClickDown}>
                Bajar
            </button>
            <button onClick={handleClickReset}>
                Reiniciar
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
