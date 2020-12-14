import { React } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={Style.Navbar_wrapper}>
            <nav>
                <ul className={Style.topmenu}>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='about' className={Style.submenu_link}>О нас</NavLink>
                        <ul className={Style.submenu}>
                            <li><NavLink to='about'>О компании</NavLink></li>
                            <li><NavLink to='partners'>Партнеры</NavLink></li>
                            <li><NavLink to='staff'>Сотрудники</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='serviceList' className={Style.submenu_link}>УСЛУГИ</NavLink>
                        <ul className={Style.submenu}>
                            <li><NavLink to='ViborZemel'>Выбор земельного участка</NavLink></li>
                            <li><NavLink to='Stroitelstvo'>Строительство домов и коттеджей</NavLink></li>
                            <li><NavLink to='Design'>Дизайн</NavLink></li>
                            <li><NavLink to=''>Строительство бань, беседок и других построек</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to=''>Проекты</NavLink></li>
                    <li><NavLink to=''>Контакты</NavLink></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;