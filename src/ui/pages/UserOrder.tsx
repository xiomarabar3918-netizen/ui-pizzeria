import React from 'react'
import { Footer, Navbar } from '../components'

export const UserOrder = () =>{
  return (
    <>
      <Navbar />
      <section>
        <h2>Pedido del Usuario</h2>
        <p>Aquí podrás gestionar el pedido en curso.</p>
      </section>
      <Footer />
    </>
  )
}
