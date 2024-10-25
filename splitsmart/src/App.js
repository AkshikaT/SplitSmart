import React from 'react'
import Header from './Components/Header/header.jsx'
import Order from './Components/Order/Order.jsx'
import NumPpl from './Components/NumPpl/NumPpl.jsx'
import './App.css' 

const App = () => {


    // printed to the screen
    return (
        <>
        <Header/>
        <NumPpl/>
        <Order/>
        </>
    )
}


export default App