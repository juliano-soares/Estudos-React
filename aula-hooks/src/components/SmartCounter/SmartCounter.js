import { useState } from 'react';

function SmartCounter() {
    // Retorna um vetor
    //1. variavel statefull
    //2. funçao amarrada a essa variavel que atualiza esse valor
    const [quantity, upQuantity]  = useState(1);

    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    );
}

export default SmartCounter;