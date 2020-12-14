import React from 'react'
import Style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={Style.header_wrapper}>
            <div className={Style.header}>
                <div>
                <NavLink to="Mainpage">
                    Главная
                </NavLink>    
                <NavLink to="ServiceList">
                    Услуги
                </NavLink>
                    <NavLink to={props.nav} className={Style.ass}>
                        {props.a1}
                    </NavLink>
                </div>
                <h1>
                    {props.a1}
                </h1>
            </div>
        </div>
    )
}

export default Header;