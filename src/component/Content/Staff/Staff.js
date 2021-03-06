import React from 'react';
import Style from './Staff.module.css'

const Staff = () => {
    return (
        <div className={Style.wrapper}>
            <h2>
                Сотрудники
            </h2>
            <span>
                В нашей компании "Houses 55" работают высококвалифицированные сотрудники с огромным накопленным опытом в сфере строительства.<p></p>
                Каждый работник управляющего состава имеет высшее строительное образование. Наши бригады хорошо укомплектованы и всегда готовы к работе. Осуществляются выезды в любой район Омска, области и соседних городов. Все сотрудники взаимосвязаны и работают как единый механизм.<p></p>
                Сплоченность, ответственность в  отношении работы и общая нацеленность на результат позволяют реализовывать проекты быстро, качественно и без дополнительных проблем. За долгие годы работы штат компании приобрел состав исключительно профессионалов, которые преодолевают любые сложности, возникающие в процессе строительства.<p></p>
                Вы можете быть уверенными в том, что сделали свой выбор правильно. Мы не только выполним строительство вашего дома или коттеджа, но и предоставим любые консультации, поможем с выбором материалов, разработкой проекта, дизайна и вариантов отделки с учетом ваших пожеланий и особенностей местности!<p></p>
            </span>
            <img src='https://33коттеджа.рф/upload/medialibrary/256/256775b9f6b266788dc0b35af15fbf88.jpg'></img>
        </div>
    )
}

export default Staff;