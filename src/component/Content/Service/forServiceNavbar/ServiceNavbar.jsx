import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './ServiceNavbar.module.css'

const ServiceNavbar = (params) => {
    return (
        <div className={Style.wrapper}>
            <div className={Style.item}>
                <NavLink to='/ViborZemel'>Выбор земельного участка под строительство</NavLink>
            </div>
            <div className={Style.item}>
                <NavLink to='/Stroitelstvo'>Строительство домов и коттеджей</NavLink>
            </div>
            <div className={Style.item}>
                <NavLink to='/Design'>Дизайн</NavLink>
            </div>
            <div className={Style.item}>
                <NavLink to=''>Строительство бань, беседок и других построек</NavLink>
            </div>
            <div className={Style.item}>
                <NavLink to=''>Благоустройство территории</NavLink>
            </div>
        </div>
    )
}

export default ServiceNavbar;