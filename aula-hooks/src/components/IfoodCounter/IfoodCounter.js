import {useState, useEffect} from 'react';
import './IfoodCounter.css';
// import { Container } from './styles';

function IfoodCounter() {
    const [value, setValue]  = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")
    
    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value;
    },[value])

    function down() {
        if(value <= 1) {
            setButtonStyle("counter-button-minus-desactive");
        }
        if(value > 0) {
            setValue(value - 1);
            setButtonStyle("counter-button-minus-active");
        }
    }

    function up() {
        setValue(value + 1);
    }

    return (
        <div className="countex-wrapper">
            <button 
                className={buttonStyle}
                onClick={() => down()}
            >
                -
            </button>
            <p>{value}</p>
            <button 
                className="counter-button-plus-active"
                onClick={() => up()}
            >
                +
            </button>
            <button id="moeda">2.00</button>
        </div>
    );
}

export default IfoodCounter;