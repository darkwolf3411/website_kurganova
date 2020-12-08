import { React } from 'react';
import Style from './Works.module.css'

const Works = () => {
    return(
        <div className={Style.wrapper}>
            <div className={Style.item}>
                <span>
                    <a>
                        Недавние объекты
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в к.п. "Пушкино-2", 293 кв.м.
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в к.п. "Курортный", 204 кв.м.
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в к.п. Чукреевка, 325 кв.м
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в п. Чукреевка, 393 кв.м.
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в к.п. "Тихая речка", 306 кв.м.
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в к.п. "Чукреевка", 162 кв.м.
                    </a>
                </span>
            </div>
            <div className={Style.item}>
                <span>
                    <a>
                    Коттедж в к.п. ПушкинЪ, 314 кв.м
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Works;