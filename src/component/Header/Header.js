import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LittleNav from './../Content/Mainpage/forNavBar/LittleNavBar';

const Header = () => {
    return (
      <div className='Header-wrapper'>
        <NavLink exact to='/' className='logo'>
          <img src='https://is.gd/z5LrkR'></img>
        </NavLink>
        <h1>Houses 55</h1>
        <div className='phone'>
        <span>тел</span>: (3232)-690-680<br></br>
        <span>тел</span>: (3232)-690-680<br></br>
          Звоните до 21ч!
        </div>
        <div className='button'>
          <a href='#'>Хочу звонок</a>
        </div>
        {/* <div className='littlNav_button'>
            <a>gfd</a>
        </div>
        <div className='littlNav'>
        <LittleNav /> 
        </div> */}
      </div>
    );
  }

  export default Header;