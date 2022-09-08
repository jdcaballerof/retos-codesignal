import { useContext } from "react";
import "./App.css";
import {Input} from "./components/Input";
import { TecladoApp } from "./components/Teclado";
import { CalcContext } from "./context/CalcContext";

export const AppCalculadoraCopy = () => {

  const {text, result} = useContext(CalcContext)


  return (

    <div className="App mt-3em">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="contenedor">
          <TecladoApp  />
        </div>
      </div>
    </div>

  );
};

