import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppCalculadoraCopy } from './AppCalculadora copy'
import { Calcprovider } from './context/CalcProvider'
import './styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <Calcprovider>
    <AppCalculadoraCopy/>
  </Calcprovider>
  </React.StrictMode>
)




