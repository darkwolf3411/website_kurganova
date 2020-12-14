import React from 'react'
import Header from '../forHeader/HeaderService'
import ServiceNavbar from '../forServiceNavbar/ServiceNavbar'
import Style from './Banya.module.css'
import ServiceFooter from './../ForServiceFooter/ServiceFooter';

const Banya = (params) => {
    return (
        <div>
            <Header a1='Строительство бань, беседок и других построек' nav='Banya' />
            <div className={Style.mainwrapper}>
                <ServiceNavbar />
                <div className={Style.wrapper}>
                    <div>
                        <span>
                            Наличие свободного участка земли подразумевает строительство дома или коттеджа. Если сам дом уже построен, можно позаботиться о строительстве бани.
                </span>
                        <p />
                        <span>
                            Компания "55 Houses" предлагает строительство бань из:
                </span>
                        <div>
                            <ul>
                                <li>кирпича;</li>
                                <li>газобетонных блоков;</li>
                                <li>строганного или профилированного бруса;</li>
                                <li>оцилиндрованного бревна;</li>
                                <li>каркасных заготовок.</li>
                            </ul>
                        </div>
                        <span>
                            При строительстве в обязательном порядке учитываются нормы, ГОСТы, СНИПы, а также безопасное противопожарное расстояние от самой бани, сауны. Работу ведут профессиональные дипломированные специалисты.
                </span>
                    </div>
                    <div className={Style.imgBlock}>
                        <img src="https://33коттеджа.рф/upload/medialibrary/e3a/e3a30e07e8c0a69a7c283f69057558e0.PNG" alt="" srcset="" />
                        <img src="https://33коттеджа.рф/upload/medialibrary/e50/e50cfc9c6e90ea2c454b23b383056583.jpg" alt="" srcset="" />
                    </div>
                    <span>
                        Работа включает в себя:
                    </span>
                    <div>
                        <ul>
                            <li>выбор места для возведения бани/беседки;</li>
                            <li>разработку и утверждение проекта;</li>
                            <li>очистку площадки;</li>
                            <li>заливку фундамента;</li>
                            <li>возведение стен постройки;</li>
                            <li>возведение крыши;</li>
                            <li>установку дверей и окон;</li>
                            <li>монтаж системы отопления и дымохода;</li>
                            <li>монтаж паро- и гидроизоляции;</li>
                            <li>укладку пола;</li>
                            <li>внутреннюю и внешнюю отделку.</li>
                        </ul>
                    </div>
                    <span>
                        Деревянные конструкции отличаются теплой особой атмосферой и экологичностью.  </span>
                    <span>
                        Кирпичные бани – это фавориты в отношении надежности и долговечности. Бани из газобетонных блоков характеризуются высокой скоростью строительства и небольшими затратами на него. Недорогая постройка каркасного типа не дает усадки, поэтому не требует глубокой заливки фундамента. Наши профессионалы помогут вам с выбором материала в соответствии с вашими ожиданиями, целевым назначением нового здания и бюджетом.
                    </span>
                    <span>
                        Небольшая уютная душевная баня у дома станут любимыми местами отдыха для всех членов вашей семьи.
                    </span>
                    <span>
                        Компания "55 Houses" предлагает строительство мангальных зон, беседок и других построек.
                    </span>
                    <div className={Style.imgBlock}>
                        <img src="https://33коттеджа.рф/upload/medialibrary/b42/b4229cbaadfb3a3498a6e849c04f5237.PNG" alt="" />
                        <img src="https://33коттеджа.рф/upload/medialibrary/f82/f82355479bdbbfe339aac00a012bb330.PNG" alt="" />
                    </div>
                    <span>
                        Приятно провести время с пользой в теплое время года можно в уютной беседке. Рядом с ней или даже внутри нее можно разместить мангальную зону для приготовления шашлыков и барбекю. Если дополнить беседку электричеством, окнами и мангалом, то станет одним из любимейших мест, где можно пообщаться в душевной компании или поразмышлять наедине с собой.
                    </span>
                    <span>
                        Компания "55 Houses" реализует строительство беседок из:
                    </span>
                    <div>
                        <ul>
                            <li>клееного бруса;</li>
                            <li>строганного бруса;</li>
                            <li>кирпича;</li>
                            <li>оцилиндрованного бревна;</li>
                            <li>и других надежных, пожаростойких и безопасных материалов.</li>
                        </ul>
                    </div>
                    <ServiceFooter />
                </div>
            </div>
        </div>
    )
}

export default Banya;