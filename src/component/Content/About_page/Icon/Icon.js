import { React } from 'react';
import Style from './Icon.module.css'
const Icon = () => {
    return (
        <div className={Style.wrapper}>
            <h2>
                Почему выбирают нас
        </h2>
            <div className={Style.items}>
                <div>
                    <img src='https://is.gd/F6aXKe'></img>
                    <span>Строим дома по СНИПам</span>
                </div>
                <div>
                    <img src='https://is.gd/3NMwKS'></img>
                    <span>ТОЛЬКО профессиональные строители</span>
                </div>
                <div>
                    <img src='https://is.gd/el4cwD'></img>
                    <span>Гарантия более 20 ЛЕТ</span>
                </div>
                <div>
                    <img src='https://is.gd/Frg9C1'></img>
                    <span>Строительство коттеджей в Омске любой сложности</span>
                </div>
            </div>
        </div>
    )
}

export default Icon;