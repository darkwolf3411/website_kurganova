import React from 'react'
import Style from './Blagoustroistvo.module.css'
import Header from './../forHeader/HeaderService';
import ServiceNavbar from './../forServiceNavbar/ServiceNavbar';
import ServiceFooter from '../ForServiceFooter/ServiceFooter';

const Blagoustroistvo = (params) => {
    return(
        <div>
            <Header a1='Благоустройство территории' nav='Blagoustroistvo' />
            <div className={Style.mainwrapper}>
                <ServiceNavbar />
                <div className={Style.wrapper}>
                    <span>
                    Красивый респектабельный облик дому помогает придать гармоничное благоустройство территории.
                    </span>
                    
                    <span>
                    Ее можно превратить в сад или детскую площадку, зону для отдыха и барбекю, мини-аллею с фонтаном и декоративным водоемом. Компания "33 Коттеджа" поможет создать оригинальный ландшафтный дизайн, который будет идеально сочетаться с архитектурно-планировочными характеристиками дома, а также санитарными и экологическими нормами.
                    </span>
                    
                    <span>
                    Благоустройство территории дома в Омске включает в себя:
                    </span>
                    <ul>
                        <li>очистку участка; </li>
                        <li>разработку плана мероприятий по благоустройству территории; </li>
                        <li>создание тротуарных дорожек из камня, плитки или брусчатки; </li>
                        <li>устройство газона, клумб, кустарников и других форм озеленения; </li>
                        <li>строительство декоративных и ограждающих заборов; </li>
                        <li>устройство водоемов и фонтанов; </li>
                        <li>установку беседок, лавочек, мангалов, декоративных фигур; </li>
                        <li>монтаж системы освещения и дренажных канав.</li>
                    </ul>
                    <div className={Style.imgBlock}>
                        <img src="https://33коттеджа.рф/upload/medialibrary/1ac/1acf45de1da6d137702fa3619d6c90d0.PNG" alt="" srcset=""/>
                        <img src="https://is.gd/1gn8Fw" alt="" srcset=""/>
                    </div>
                    
                    <span>
                    При создании садовых дорожек по желанию заказчика могут быть использованы нестандартные материалы, такие как мраморная крошка или же природный камень.
                    </span>
                    
                    <span>
                    При проектировании благоустройства территории дома опытный и креативный дизайнер предложит сразу несколько интересных вариантов, которые наилучшим образом будут подходить к конкретно вашему дому.
Работы ведут квалифицированные мастера, которые быстро и качественно умеют претворять в жизнь самые смелые и яркие ожидания. 
                    </span>
                    
                    <span>
                    Красивый двор не только дополнит гармонию, но и станет одним из любимых мест для вашего отдыха.
                    </span>
                    
                    <div className={Style.imgBlock}>
                        <img src="https://33коттеджа.рф/upload/medialibrary/b31/b3127684a3df613b3f0bcc630b763345.PNG" alt="" srcset=""/>
                        <img src="https://33коттеджа.рф/upload/medialibrary/f9a/f9abf86caaa151caf925520602d8a1f0.PNG" alt="" srcset=""/>
                    </div>
                    <ServiceFooter />
                </div>
            </div>
        </div>
    )
}

export default Blagoustroistvo;