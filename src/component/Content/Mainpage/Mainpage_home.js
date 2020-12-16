import React from 'react';
import Slider from './Slider/Mainpage_home_slider';
import Info from './Info/Mainpage_info'
import Mail from './mail/Mail';
import Icon from './icon/Icon';
import Infoimg from './Info_img/Infoimg';
import Works from './Works/Works';
import About from './About/About';
import Style from './Mainpage_home.module.css'

const Home = () => {
    return (
        <div className={Style.wrapper}>
            <Slider />
            <Info />
            <Mail />
            <Infoimg />
            <Icon />
            <Works />
            <About />
        </div>
    )
}

export default Home;