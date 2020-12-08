import { React } from 'react';
import Style from './Info.module.css'

const Infoimg = () =>{
    return(
        <div>
           <div className={Style.partfolio_wrapper}>
                <div className={Style.item}>
                    <span>
                        <a>Многоэтажки</a>
                    </span>
                </div>
                <div className={Style.item}>
                    <span>
                    <a>Дома из кирпича и газабетона</a>
                    </span>
                </div>
                <div className={Style.item}>
                    <span>
                    <a>Деревянные дома</a>
                    </span>
                </div>
            </div> 
        </div>
    )
}

export default Infoimg;