import { React } from 'react';
import Style from './About.module.css'
import About_content from './about/About_conent';
import Icon from './Icon/Icon';
import Work from './Works/Works';


const About = () =>{
    return(
        <div className={Style.wrapper}>
            <About_content />
            <Icon />
            <Work />
        </div>
    )
}


export default About;