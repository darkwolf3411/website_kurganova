import React from 'react'
import Style from './Stroitelstvo.module.css'
import { NavLink } from 'react-router-dom'
import Header from './../forHeader/HeaderService';
import ServiceNavbar from './../forServiceNavbar/ServiceNavbar';
import ServiceFooter from './../ForServiceFooter/ServiceFooter';


const Stroitelstvo = (params) => {
    return (
        <div>
            <Header a1='Строительство домов и котетджей' nav='Stroitelstvo' />
            <div className={Style.mainwrapper}>
                <ServiceNavbar />
                <div className={Style.wrapper}>
                    <div>
                        <span>
                            Строительство домов - самый трудоемкий, длительный и важный этап в полном цикле возведения объекта недвижимости. В него входят проектно-изыскательные, инженерные работы, подготовка строительной площадки, а также земляные и геодезические услуги. Мы ответим на вопрос: «Как выбрать строительную компанию?».
                    </span>
                    </div>
                    <div>
                        <div>
                            <h2>
                                Наша компания занимается строительством домов и коттеджей:
                        </h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    домов из кирпича и газобетона;
                            </li>
                                <li>
                                    каркасных домов и коттеджей;
                            </li>
                                <li>
                                    беседок, бань и других построек.
                            </li>
                            </ul>
                        </div>
                        <div className={Style.imageBlock}>
                            <img src='https://33коттеджа.рф/upload/medialibrary/17e/17ec32a0feb8a302f847754afb034d29.jpg'></img>
                            <span>
                                Для внешней отделки фасадов используется сайдинг, брус или кирпич (в зависимости от пожеланий клиента).
                        </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>
                                В процессе подготовки к строительству коттеджей, квалифицированные специалисты выполняют:
                        </h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    исследование строительной площадки;
                            </li>
                                <li>
                                    рытье котлованов;
                            </li>
                                <li>
                                    прокладку траншей;
                            </li>
                                <li>
                                    уплотнение грунта;
                            </li>
                                <li>
                                    создание грунтовых подушек;
                            </li>
                                <li>
                                    выбор и доставку материалов, спецтехники.
                            </li>
                            </ul>
                        </div>
                        <div className={Style.imageBlock}>
                            <img src='https://33коттеджа.рф/upload/medialibrary/c26/c2643b4823430fd26187b0a323aa8943.PNG'></img>
                            <span>
                                Как только подготовка завершена, начинается непосредственное строительство дома в Омске.
                        </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>
                                Основными этапа строительства являются:
                        </h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    вбивание свай;
                            </li>
                                <li>
                                    возведение фундамента;
                            </li>
                                <li>
                                    возведение каркаса со стенами, перегородками, лестничными маршами, установкой окон и дверей, монтажом систем вентиляции;
                            </li>
                                <li>
                                    прокладка труб водоснабжения и канализации;
                            </li>
                                <li>
                                    кровельные и фасадные работы;
                            </li>
                                <li>
                                    внутренний монтаж инженерных систем;
                            </li>
                                <li>
                                    отделочные работы;
                            </li>
                                <li>
                                    проверка дома, исправности работы всех коммуникаций и системы электроснабжения;
                            </li>
                                <li>
                                    подготовка документации и передача ее собственнику вместе со сдачей готового дома в эксплуатацию.
                            </li>
                            </ul>
                        </div>
                        <div className={Style.imageBlock}>
                            <img src='https://33коттеджа.рф/upload/medialibrary/f5d/f5dfb2159241d1147b174294828bc199.PNG'></img>
                            <span>
                                В нашей компании работают профессиональные строители: отделочники, монтажники, инженеры, маляры, плиточники и другие специалисты, – за плечами которых большой опыт и умение находить нестандартные решения в случае определенных сложностей.
                            </span>
                            <br></br>
                            <span>
                                Строительство коттеджей, домов или других строений, будет безупречным как в стилевом, так и в техническом исполнении. Мы сделаем все, чтобы вы обрели комфорт в вашем новом строении. Поможем построить элитный коттедж Вашей мечты!
                        </span>
                        </div>
                    </div>
                    <div>
                        <h2>
                            Почему выбирают нас
                    </h2>
                        <div className={Style.itemWrapper}>
                            <div className={Style.item}>
                                <img src='https://33коттеджа.рф/upload/uf/f52/f520fbcf6d0adf2f8a5d11cbc998246b.png'></img>
                                <span>
                                    100 лет – средний срок службы дома
                            </span>
                            </div>
                            <div className={Style.item}>
                                <img src='https://33коттеджа.рф/upload/uf/983/983f691eacee8acfb11529e0ffaef0b1.png'></img>
                                <span>
                                    Профессиональные строители
                            </span>
                            </div>
                            <div className={Style.item}>
                                <img src='https://33коттеджа.рф/upload/uf/0fe/0fe687b6cad9d60925b1f4565c2b3ac5.png'></img>
                                <span>
                                    Индивидуальные и типовые проекты
                            </span>
                            </div>
                            <div className={Style.item}>
                                <img src='https://33коттеджа.рф/upload/uf/332/332fad6e807d4398137bf0237b878477.png'></img>
                                <span>
                                    Выгодные расценки и система скидок
                            </span>
                            </div>
                        </div>
                        <ServiceFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stroitelstvo;