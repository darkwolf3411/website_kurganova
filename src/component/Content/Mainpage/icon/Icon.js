import { React } from 'react';
import Style from './icon.module.css'

const Icon = () => {
    return (
        <div>
            <div className={Style.wrapper}>
                <div className={Style.item}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/180/60_60_0/1801abbba62764f69ebe6a867a3374d3.jpg'></img>
                    <span>Строим дома по СНиП</span>
                </div>
                <div className={Style.item}>
                    <img src='https://33коттеджа.рф/upload/iblock/a74/a743fffedc63e2be2f435ffb7ef7d0b0.png'></img>
                    <span>Строительство коттеджей в Омске любой сложности</span>
                </div>
                <div className={Style.item}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/d98/60_60_0/d9833c9adf81387c021f332dd044bfad.png'></img>
                    <span>ГАРАНТИЙНЫЙ срок более 20 лет</span>
                </div>
                <div className={Style.item}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/76e/60_60_0/76e21e3f9f8f31d66122ea00cd4adffa.png'></img>
                    <span>Индивидуальное проектирование</span>
                </div>
                <div className={Style.item}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/138/60_60_0/1387b2db802b0ea5278d88a903827996.jpg'></img>
                    <span>ТОЛЬКО профессиональные строители</span>
                </div>
            </div>
        </div>
    )
}

export default Icon;