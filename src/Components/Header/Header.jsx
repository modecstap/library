import styles from './Header.module.css'

const Header = () =>{
    return(
        <header className={styles.box}>
            <a>на главную</a>
            <div>
                <div>
                    <img />
                    <a>отложенные</a>
                </div>

                <div>
                    <img />
                    <a>мои книги</a>
                </div>
                <div>
                    <img />
                    <a>войти</a>
                </div>
            </div>
        </header>
    )
}

export default Header