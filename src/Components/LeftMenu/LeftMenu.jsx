import Logo from '../../Constants/icons/logo.svg';
import styles from './LeftMenu.module.css'

const LeftMenu = () =>{
    return(
        <div className={styles.left_menu}>
            <img className={styles.logo} src={Logo} alt="React Logo" />
            <input className={styles.left_menu_searcher}></input>
            <div className={styles.left_menu_filters}>
                <div className={styles.filter_title}>Параметры поиска</div>
                <div className={styles.filter_is_exist}>
                    <input type="checkbox"></input>
                    <label>в наличии</label>
                </div>
                <div className={styles.filter_genre}>
                    <div>Жанр</div>
                    <div>
                        <input type="radio"></input>
                        <label>жанр1</label>
                    </div>
                    <div>
                        <input type="radio"></input>
                        <label>жанр2</label>
                    </div>
                    <div>
                        <input type="radio"></input>
                        <label>жанр3</label>
                    </div>
                </div>
                <div className={styles.filter_button}>
                    <button>поиск</button>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu
