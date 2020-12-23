import { React } from 'react';
import Style from './info_style.module.css'

const Info = () => {
    return(
        <div className={Style.mainpage_info_wrapper}>
            <div className={Style.mainpage_info}>
                <div className={Style.info_block}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/cb9/100_100_2/cb935f39392fedf47769b7f410a129e0.PNG'></img>
                    <p>Возможность бесплатно заказать укрупненную смету на любой понравившийся дом до подготовки проекта, из различных материалов.</p>
                </div>
                <div className={Style.info_block}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/32e/100_100_2/32e8eab30b1f1293ff3e9e8265378ab5.PNG'></img>
                    <p>Строительство дома - самый трудоемкий, длительный и важный этап в полном цикле возведения объекта недвижимости.</p>
                </div>
                <div className={Style.info_block}>
                    <img src='https://33коттеджа.рф/upload/resize_cache/iblock/7fa/100_100_2/7fa8b482937d36c009f39a0a152d186f.PNG'></img>
                    <p>Отделочные работы - это комплекс работ, которые включают в себя внутреннюю отделку помещения.</p>
                </div>
            </div>
        </div>
    )
}
export default Info;