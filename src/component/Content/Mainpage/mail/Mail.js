import { React } from 'react';
import Style from './Mail_style.module.css'

const Mail = () => {
    return(
        <div className={Style.mail_wrapper}>
            <div className={Style.email_block_wrapper}>
                <div className={Style.email_label}>
                    <img src=''></img>
                    <label>
                        Подписывайтесь на новости и акции:
                    </label>
                </div>
                <div className={Style.email_input}>
                    <input placeholder='@mail.ru'></input>
                </div>
                <div className={Style.email_button_wrapper}>
                    <div><a href='#' className={Style.main_email_button}>ПОДПИСАТЬСЯ</a></div>
                </div>
            </div>
        </div>
    )
}

export default Mail;