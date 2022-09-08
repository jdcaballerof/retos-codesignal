export const teclas = [{
    symbol:"/",
    symbolSec:"÷",
    nombreClase:"colorOrange",
},
{
    symbol:"*",
    symbolSec:"x",
    nombreClase:"colorOrange",
},
{
    symbol:"-",
    nombreClase:"colorOrange",
},
{
    symbol:"+",
    nombreClase:"colorOrange",
},
{
    symbol:"7"
},
{
    symbol:"8"
},
{
    symbol:"9"
},
{
    symbol:"^2",
    symbolSec:"<<",
    nombreClase:"colorOrange",
},
{
    symbol:"4"
},
{
    symbol:"5"
},
{
    symbol:"6"
},
{
    symbol:"C",
    handleClick: 'resetInput',
    nombreClase:"colorOrange",
},
{
    symbol:"1"
},
{
    symbol:"2"
},
{
    symbol:"3"
},
{
    symbol:"=",
    nombreClase:"subigual colorOrange",
    handleClick: 'calculateResult',
},
{
    symbol:"."
},
{
    symbol:"0",
    nombreClase:"subzero",
}
]



/*     
    <Button symbol="C" handleClick={resetInput} />  

    <Button nombreClase="subigual" symbol="="  handleClick={() => calculateResult(text)} />

    */