import './App.css';
import Mensaje from './Mensaje';

const Description = (props) => {
  return <p>Hola, {props.name} tiene {props.age} años</p>
}

function App() {
    return (
        <div className="App">
            <Mensaje color='red' name='FEDE'/>
            <Description name="Juanfe" age="25"/>
            <Mensaje color='green' name='TITI'/>
            <Description name="Virginia" age="33"/>
            <Mensaje color='yellow' name='GUADA'/>
            <Description name="Guadalupe" age="14"/>
        </div>
    );
}

export default App;
