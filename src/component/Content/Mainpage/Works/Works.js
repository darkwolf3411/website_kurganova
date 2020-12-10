import { React } from 'react';
import Style from './Works.module.css'

const Item = (props) =>{
    return (
        <div className={Style.item}>
                <span>
                    <a>
                        {props.itemname}
                    </a>
                </span>
            </div>
    )
}

const Works = () => {
    return(
        <div className={Style.wrapper}>
            <Item itemname='Недавние объекты'/>
            <Item itemname=' Коттедж в к.п. "Пушкино-2", 293 кв.м.' />
            <Item itemname='Коттедж в к.п. "Курортный", 204 кв.м.' />
            <Item itemname='Коттедж в к.п. Чукреевка, 325 кв.м' />
            <Item itemname='Коттедж в п. Чукреевка, 393 кв.м.' />
            <Item itemname='Коттедж в к.п. "Тихая речка", 306 кв.м.' />
            <Item itemname='Коттедж в к.п. "Чукреевка", 162 кв.м.' />
            <Item itemname='Коттедж в к.п. ПушкинЪ, 314 кв.м' />
        </div>
    )
}

export default Works;