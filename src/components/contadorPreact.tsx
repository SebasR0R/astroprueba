import React from "react";
const ContadorPreact = () => {
    const [valor, setValor] = React.useState(0);
    const incrementar = () => {
        setValor(valor + 1);
    }
    const decrementar = () => {
        setValor(valor - 1);
    }
    return<div className="flex flex-col gap-2 items-center justify-content">
        {valor}
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
    </div>
};

export default ContadorPreact;