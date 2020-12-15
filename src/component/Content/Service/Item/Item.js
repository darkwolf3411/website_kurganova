import { React } from 'react';
import Style from './Item.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className={Style.wrapper}>
            <div className={Style.item}>
                <img src={props.src}></img>
                <div>
                    <div>
                        <a href={props.nav}>
                            {props.header}
                        </a>
                    </div>
                    <span>
                        {props.content}
                    </span>
                    <a href={props.nav} className={Style.button_kyc}>
                        подробнее
                    </a>
                </div>
            </div>
        </div>
    )
}

const Items = (props) => {

    let urls = [
        {
            src: "https://33коттеджа.рф/upload/iblock/5bc/5bc10d13be910f08927d34d3d5baddf3.PNG",
            header: "Выбор земельного участка под строительство",
            content: "Выбор земельного участка — одна из ключевых задач при строительстве жилого объекта.",
            nav: "ViborZemel"
        },
        {
            src: "https://33коттеджа.рф/upload/iblock/32e/32e8eab30b1f1293ff3e9e8265378ab5.PNG",
            header: "Строительство домов и коттеджей",
            content: "Строительство дома - самый трудоемкий, длительный и важный этап в полном цикле возведения объекта недвижимости..",
            nav: "Stroitelstvo"
        },
        {
            src: "https://33коттеджа.рф/upload/iblock/a7b/a7b191beda6653ab4e1445248832fd06.PNG",
            header: "Дизайн",
            content: "Вы мечтаете о собственном доме. Вы представляете его себе красивым, удобным и уютным.  И кажется, это так просто....",
            nav: "Design"
        },
        {
            src: "https://33коттеджа.рф/upload/iblock/a99/a99ed3f8e63acb88468fccd07d772abb.PNG",
            header: "Строительство бань, беседок и других построек",
            content: "Наличие свободного участка земли подразумевает строительство дома или коттеджа. Если сам дом уже построен, можно позаботиться о строительстве бани.",
            nav: "Banya"
        },
        {
            src: "https://33коттеджа.рф/upload/iblock/77d/77d8f827eb5599c99d82d7e6291bccc1.PNG",
            header: "Благоустройство территории",
            content: "Красивый респектабельный облик дому помогает придать гармоничное благоустройство территории.",
            nav: "Blagoustroistvo"
        },
    ];

    let itemElement = urls.map(el => <Item src={el.src} header={el.header} content={el.content} nav={el.nav} />)

    return (
        <div>
            {itemElement}
        </div>
    )
}


export default Items;
