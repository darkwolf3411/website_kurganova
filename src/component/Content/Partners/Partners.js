import React from 'react';
import Items from './Items/Items';
import Style from './partners.module.css'

const Partners = () => {
    return (
        <div className={Style.wrapper}>
            <div>
                <h2>
                    Наши партнеры
                </h2>
                <span>
                    Строительство дома невозможно без качественных материалов, а это могут обеспечить только проверенные  партнеры. Мы сотрудничаем с ведущими поставщиками строительных смесей, материалов и инструментов, чтобы обеспечить красоту, долговечность вашему дому.
                </span>
            </div>
            <Items />
        </div>
    )
}

export default Partners;