import { React } from 'react';
import Style from './Info.module.css'


const Item = (props) =>{
    return (
        <div className={Style.item}>
                    <span>
                        <a>Многоэтажки</a>
                    </span>
                </div>
    )
}
const Infoimg = () =>{
    return(
        <div>
           <div className={Style.partfolio_wrapper}>
               <Item itemname='Многоэтажки' />
               <Item itemname='Дома из кирпича и газабетона' />
               <Item itemname='Деревянные дома' />
            </div> 
        </div>
    )
}

export default Infoimg;