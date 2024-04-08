import Logo from '../../Constants/icons/logo.svg';
import styles from './LeftMenu.module.css'

const LeftMenu = () =>{
    return(
        <div className={styles.left_menu}>
            <img className={styles.logo} src={Logo} alt="React Logo" />
            <input placeholder="Введите текст для поиска" className={styles.left_menu_searcher}></input>
            <div className={styles.left_menu_filters}>
                <div className={styles.filter_title}>Параметры поиска</div>
                <div className={styles.filte_genre_title}>В наличии</div>
                <div className={styles.filter_is_exist}>
                    <input type="radio" name="availability"></input>
                    <label>в наличии</label>
                </div>
                <div className={styles.filter_is_exist}>
                    <input type="radio" name="availability"></input>
                    <label>нет наличии</label>
                </div>
                <div className={styles.filter_genre}>
                    <div className={styles.filte_genre_title}>Жанр</div>
                    <div className={styles.filte_genre_label}>
                        <input type="checkbox"></input>
                        <label>жанр1</label>
                    </div>
                     <div className={styles.filte_genre_label}>
                        <input type="checkbox"></input>
                        <label>жанр2</label>
                    </div>
                     <div className={styles.filte_genre_label}>
                        <input type="checkbox"></input>
                        <label>жанр3</label>
                    </div>
                </div>
                <div>
                    <button className={styles.filter_button}>поиск</button>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu
