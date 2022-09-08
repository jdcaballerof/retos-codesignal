import * as math from "mathjs";
import { useState } from "react";
import { CalcContext } from "./CalcContext";



export const Calcprovider = ({children}) => {

    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const addToText = (val) => {
        setText((text) => text + val);
    };

    const calculateResult = (texto) => {
        const operacion = math.evaluate(texto);

        setResult(operacion);
    };

    const resetInput = () => {
        setText("");
        setResult("");
    };

return (
    <CalcContext.Provider value={{
        text,
        result,
        addToText,
        calculateResult,
        resetInput,
      }}>
  
        { children }
    </CalcContext.Provider>
);
};