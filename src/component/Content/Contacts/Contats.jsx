import React from 'react'
import Style from './Contax.module.css'
import Header from './../Service/forHeader/HeaderService';

const Contacts = (porps) => {
    return (
        <div>
            <Header a1='Контакты' nav='Контакты' />
            <div className={Style.mainwrapper}>
                <div className={Style.wrapper}>
                    <div className={Style.office_img_wrapper}>
                        <img src="https://is.gd/mq3mN7" alt="" />
                        <img src="https://is.gd/Va6xSP" alt="" />
                    </div>
                    <div className={Style.contact_info_wrapper}>
                        <div className={Style.info}>
                            <p >
                                Хотите заказать проект дома мечты, рассчитать стоимость реализации уже существующего или просто пообщаться и задать вопрос?
                        </p>
                            <span>
                                Пишите письма, звоните или заходите в гости - наш офис находится почти в центре города Омска.
                            </span>
                        </div>
                        <div>
                            <div className={Style.adress}>
                                <p className={Style.one_span}>
                                    Адрес
                                </p>
                                <span>
                                    644116, г. Омск, ул. 27 Северная, 48(офис 320)
                                </span>
                            </div>
                            <div className={Style.email}>
                                <p className={Style.one_span}>
                                    E-mail
                                </p>
                                <span>
                                    33kott@mail.ru
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={Style.phone}>
                                <p className={Style.one_span}>
                                    Телефон
                                </p>
                                <span>
                                    8 (3812) 680-690 8 (3812) 680-090
                                </span>
                                <div className={Style.time_works}>
                                    <p className={Style.one_span}>
                                        Режим работы
                                    </p>
                                    <span>
                                        БЕЗ ВЫХОДНЫХ <br/>
                                        Пн-Пт: 9:00 - 18:00 <br/>
                                        Пн-Пт: 18:00 - 20:00 (по записи) <br/>
                                        Сб-Вс 9:00 - 18:00 (по записи) <br/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1af5d06539c29dabacbb688a848b34bc3d105156bce855919571541ab332d15c&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
            </div>
        </div>
    )
}

export default Contacts;