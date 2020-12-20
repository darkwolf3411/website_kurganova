import { React } from 'react';
import Style from './about_conent.module.css'


const About_content = () => {
    return (
        <div className={Style.About_content_wrapper}>
            <img src='https://is.gd/tkgCMt'></img>
            <h2>О компании "Houses 55"</h2>
            <span>
                <span2>Компания "Houses 55" производит полный цикл по проектированию и строительству домов и коттеджей под ключ.</span2><p></p>
                Работает с 2012 года на рынке, за это время построено более 50 домов. Компания предоставляет гарантию от 5 лет (от промерзания стен, протечек кровли, усадки утеплителя и пр.). Значительный упор делается на высокое качество всех выполненных работ, строительство ведётся по СНиП (это обязательство прописано в договоре). Большой опыт работы и высокий уровень квалификации профессиональных мастеров обеспечивают безупречный результат сотрудничества с каждым клиентом.
            </span>
            <ul>
                В спектр услуг компании входят:
                <li>
                    выбор земельного участка;
                </li>
                <li>
                    проектирование;
                </li>
                <li>
                    строительство;
                </li>
                <li>
                    инженерные системы;
                </li>
                <li>
                    отделочные работы;
                </li>
                <li>
                    дизайн.
                </li>
            </ul>
            <h2>Наши руководители</h2>
            <div className={Style.staff_info_wrapper}>
                <div className={Style.staff_wrapper}>
                    <div className={Style.staff_element}>
                        <div className={Style.staff_img}>
                            <img src="https://is.gd/6zGQMX"/>
                        </div>
                        <div className={Style.staff_info}>
                            <span className={Style.staff_famaly}>Джим Керри</span>
                            <span className={Style.staf_pos}>Коммерческий директор</span>
                            <a href className={Style.staff_mail}>djcerry@mail.ru</a>
                            <span className={Style.staff_phone}>89064134567</span>
                        </div>
                    </div>
                    <div className={Style.staff_element}>
                        <div className={Style.staff_img}>
                            <img src="https://is.gd/kBVmWj" alt />
                        </div>
                        <div className={Style.staff_info}>
                            <span className={Style.staff_famaly}>Томми Кэш</span>
                            <span className={Style.staf_post}>Финансовый директор</span>
                            <a href className={Style.staff_mail}>tm@mail.ru</a>
                            <span className={Style.staff_phone}>89064345644</span>
                        </div>
                    </div>
                    <div className={Style.staff_element}>
                        <div className={Style.staff_img}>
                            <img src="https://is.gd/dh1yzR" alt />
                        </div>
                        <div className={Style.staff_info}>
                            <span className={Style.staff_famaly}>Робер Дауни Мл.</span>
                            <span className={Style.staf_post}>Операционный директор</span>
                            <a href className={Style.staff_mail}>RoberDauni@mail.ru</a>
                            <span className={Style.staff_phone}>89085435634</span>
                        </div>
                    </div>
                    <div className={Style.staff_element}>
                        <div className={Style.staff_img}>
                            <img src="https://is.gd/a1dEQR" alt />
                        </div>
                        <div className={Style.staff_info}>
                            <span className={Style.staff_famaly}>Киано Ривз</span>
                            <span className={Style.staf_post}>Директор по развитию</span>
                            <a href className={Style.staff_mail}>JonnySilverhand@mail.ru</a>
                            <span className={Style.staff_phone}>85436452464</span>
                        </div>
                    </div>
                </div>
            </div>
            <span>
                Мы строим дома и коттеджи на территории Омска и Омской области. Средний срок службы построенного нами дома составляет 100 лет! Мастера выполняют свою работу быстро и качественно. Для каждого коттеджа предусмотрено витражное остекление, которое делает постройку еще более современной и красивой.<p></p>

Бригада строителей выполнит строительство домов и коттеджей, бань и беседок, которые помогут украсить собой прилегающую к дому территорию, добавят уют и новые возможности для отдыха.<p></p>

Команда профессионалов выполнит строительство "под ключ" _ от момента выбора земельного участка и проектирования до сдачи готового дома клиенту с чистовой отделкой и стильным ремонтом. При работе используются высококачественные материалы и новейшие технологии. <p></p>

Нам доверяют и делают это совершенно не напрасно. В подтверждение тому на сайте собраны отзывы благодарных клиентов и все необходимые сертификаты. Строительство выполняется в точном соответствии с ГОСТ и СНиП.<p></p>
Чтобы получить консультацию и помощь специалистов, задать интересующие вопросы или заключить сотрудничество, Вы можете позвонить по контактным телефонам или оставить свою заявку прямо на сайте.<p></p>
            </span>
        </div>
    )
}

export default About_content;