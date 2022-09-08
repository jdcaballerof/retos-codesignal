import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import "./styles/Button.css";


export const Button = ({ symbol, color, handleClick, symbolSec, nombreClase }) => {

  const {addToText, resetInput, calculateResult, text} = useContext(CalcContext)

  return (
    <div
      onClick={() => {
        if(handleClick === 'resetInput'){
          return resetInput()
        } else if(handleClick === 'calculateResult'){
          return calculateResult(text)
        }

        return addToText(symbol)
      }}
      className={ !!nombreClase ? `button-wrapper ${nombreClase}`: "button-wrapper" }
      style={{ backgroundColor: color }}
    >
      {!!symbolSec ? symbolSec:symbol }
    </div>
  );
};


