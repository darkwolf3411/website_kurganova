import { React } from 'react';
import Style from './About.module.css'
const About = () =>{
    return(
        <div className={Style.wrapper}>
            <span>
                О Компании
            </span>
                <h1>
                Строительство домов и коттеджей в Омске под ключ  
                </h1>
                <span>
                <a>Строительная компания</a> «33 Коттеджа» выполняет полный комплекс работ по проектированию и строительству коттеджей в Омске и области с 2012 года. В штате компании свой проектировщик, дизайнер, мастера СМР с высшим строительным образованием, бригады строителей и монтажники инженерных систем. Таким образом, ресурсами одной компании выполняется проект дома, подробная смета, ведется строительство «под ключ» с грамотным инженерным сопровождением. 
                </span>
                <h2>
                Преимущества такого подхода следующие:  
                </h2>
                <div>
                    <ul>
                        <li>
                        Наличие полного проекта – позволяет найти оптимальные решения по конструктиву дома, и этим снизить стоимость строительства на 20-30%. Сделать расчет фундамента, в зависимости от типа грунтов на участке, а также других несущих конструкций здания. Заранее проработать и согласовать основные узлы здания и применяемые материалы.    
                        </li>
                        <li>
                        Подготовка подробной сметы – позволяет оценить затраты на будущее строительство, чтобы стройка не превратилась в «черную дыру», высасывающую деньги и не имеющую конца. Все риски превышения сметы (порча или хищение материалов, расходы на устранение дефектов в период строительства, и т.д.) <a>cтроительная компания</a> берет на себя.   
                        </li>
                        <li>
                        Инженерное сопровождение – это контроль работ по строительству домов инженером, оплата труда которого не зависит от объема выполненных работ, а зависит только от качества работы. При этом инженер всегда примет решение, которое защитит Ваши интересы, а не интересы рабочих, стремящихся облегчить себе задачу (как правило, в ущерб качеству).  
                        </li>
                        <li>
                        Проектировщик и Подрядчик это одно юридическое лицо – это позволяет не искать виновных в случае обнаружения дефектов строительства, или отклонения от СНиП, т.е. ответственность несет одна организация. Нужно упомянуть, что за всё время работы (с 2012г.) наша компания не имеет ни одного судебного спора, или иного подобного конфликта с заказчиком, при этом, построено более 30 коттеджей.   
                        </li>
                    </ul>
                </div>
                <h2>
                Предложение строительной компании  
                </h2>
                <span>
                Наша <a>строительная компания</a> предлагает возведение домов из кирпича, газобетона, деревянных домов и бань, а также комбинированных домов. В ходе подробной консультации в офисе компании, Вы получите информацию о плюсах и минусах различных типов стен, перекрытий и кровли. Также узнаете разницу в стоимости строительства из этих материалов. Это позволит до начала проектирования принять правильное, экономически обоснованное решение.
                </span>
        </div>
    )
}
export default About;