import React from 'react'
import Style from './Stroitelstvo.module.css'
import { NavLink } from 'react-router-dom'
import Header from './../forHeader/HeaderService';


const Stroitelstvo = (params) => {
    return(
        <div className={Style.wrapper}>
            <Header a1='Строительство домов и котетджей' />
        </div>
    )
}

export default Stroitelstvo;