import { React } from 'react';
import Style from './Item.module.css'

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
            src: "https://is.gd/bXPF1b",
            header: "Выбор земельного участка под строительство",
            content: "Выбор земельного участка — одна из ключевых задач при строительстве жилого объекта.",
            nav: "ViborZemel"
        },
        {
            src: "https://is.gd/VOSPUC",
            header: "Строительство домов и коттеджей",
            content: "Строительство дома - самый трудоемкий, длительный и важный этап в полном цикле возведения объекта недвижимости..",
            nav: "Stroitelstvo"
        },
        {
            src: "https://is.gd/u6sz3o",
            header: "Дизайн",
            content: "Вы мечтаете о собственном доме. Вы представляете его себе красивым, удобным и уютным.  И кажется, это так просто....",
            nav: "Design"
        },
        {
            src: "https://is.gd/xWNu4q",
            header: "Строительство бань, беседок и других построек",
            content: "Наличие свободного участка земли подразумевает строительство дома или коттеджа. Если сам дом уже построен, можно позаботиться о строительстве бани.",
            nav: "Banya"
        },
        {
            src: "https://is.gd/R6FduS",
            header: "Благоустройство территории",
            content: "Красивый респектабельный облик дому помогает придать гармоничное благоустройство территории.",
            nav: "Blagoustroistvo"
        },
    ];

    let itemElement = urls.map(el => <Item src={el.src}
         header={el.header}
          content={el.content}
           nav={el.nav} />)

    return (
        <div>
            {itemElement}
        </div>
    )
}


export default Items;
