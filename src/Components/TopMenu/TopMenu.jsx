import { Link } from 'react-router-dom'

import styles from './TopMenu.module.css'


const TopMenu = () =>{
    return(
        <div className={styles.top_menu}>
            <div className={styles.navigation}>
                <div className={styles.linc_blok}>
                    <Link to="/" className={styles.link}>на главную</Link>
                </div>
            </div>

            <div className={styles.user_block}>
                <div className={styles.user_button}>
                    <img className={styles.user_button_image} src="https://img.icons8.com/windows/32/like--v1.png" alt="like--v1"/>
                    <div className={styles.user_button_text}>отложенные</div>
                </div>

                <div className={styles.user_button}>
                    <img className={styles.user_button_image} src="https://img.icons8.com/ios-glyphs/30/open-book--v1.png" alt="open-book--v1"/>
                    <div className={styles.user_button_text}>мои книги</div>
                </div>
                <div className={styles.user_button}>
                    <img className={styles.user_button_image} src="https://img.icons8.com/ios-filled/50/login-rounded-right.png" alt="login-rounded-right"/>
                    <div className={styles.user_button_text}>войти</div>
                    {/* <img className={styles.user_button_image} src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
                    <div className={styles.user_button_text}>выйти</div> */}
                </div>
            </div>
        </div>
    )
}

export default TopMenu
