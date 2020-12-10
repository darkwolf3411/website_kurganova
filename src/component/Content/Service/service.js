import { React } from 'react';
import Item from './Item/Item';
import Style from './Service.module.css'

const Service = (props) => {
    return (
        <div className={Style.wrapper}>
            <h1>
                Услуги
            </h1>
            <span>
                Наша компания выполняет строительство коттеджей по готовым типовым и индивидуальным проектам. Команда профессионалов выполнит строительство домов "под ключ", возведение фундамента, кровельные, ремонтные и отделочные работы, а также проектирование и прокладку коммуникаций.
            </span>
            <Item />
        </div>
    )
}

export default Service;