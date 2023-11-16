import React, { useState } from 'react'
import { Header } from './Header'

export const Home = () => {

  const [numero, actualizarNumero] = useState(0)

  return (
    <div>
      <Header/>

      <h2>Haz clic</h2>
      <h1>{ numero }</h1>
      <button onClick={() => {
        actualizarNumero(numero + 1);
      }}>
      Sumar
      </button>
      
    </div>
  )
}

