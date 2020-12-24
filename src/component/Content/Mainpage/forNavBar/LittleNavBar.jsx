import { React } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './LittleNavBar.module.css';

const LittleNav = () => {
    return (
            <nav className={Style.Navbar_wrapper}>
                <ul className={Style.topmenu}>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='serviceList' className={Style.submenu_link}>УСЛУГИ</NavLink>
                        <ul className={Style.submenu}>
                            <li><NavLink to='ViborZemel'>Выбор земельного участка</NavLink></li>
                            <li><NavLink to='Stroitelstvo'>Строительство домов и коттеджей</NavLink></li>
                            <li><NavLink to='Design'>Дизайн</NavLink></li>
                            <li><NavLink to='Banya'>Строительство бань, беседок и других построек</NavLink></li>
                            <li><NavLink to='Blagoustroistvo'>Благоустройство территории</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/Projects'>Проекты</NavLink></li>
                    <li><NavLink to='about' className={Style.submenu_link}>О нас</NavLink>
                        <ul className={Style.submenu}>
                            <li><NavLink to='about'>О компании</NavLink></li>
                            <li><NavLink to='partners'>Партнеры</NavLink></li>
                            <li><NavLink to='staff'>Сотрудники</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/Contacts'>Контакты</NavLink></li>
                </ul>
            </nav>
    );
}

export default LittleNav;