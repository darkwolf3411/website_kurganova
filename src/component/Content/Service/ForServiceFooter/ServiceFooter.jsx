import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './ServiceFooter.module.css'

const ServiceFooter = (params) => {
    return(
        <div className={Style.footerWrapper}>
            <div>
                <a href='serviceList' />Вернуться к списку
            </div>
        </div>
    )
}

export default ServiceFooter; 