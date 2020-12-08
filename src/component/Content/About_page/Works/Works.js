import { React } from 'react';
import Style from './works.module.css'
import Works from './../../Mainpage/Works/Works';

const Work = () =>{
    return(
        <div className={Style.wrapper}>
            <h2>
            Мы гордимся своей работой 
            </h2>
            <Works />
        </div>
    )
}


export default Work;