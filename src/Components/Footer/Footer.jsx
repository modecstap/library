import styles from "./Footer.module.css"

const Footer = () =>{
    return(
        <footer className={styles.box}>
            <p className={styles.adress}>г. Тула, пр. Ленина, д. 100</p>
            <div className={styles.contacts}>
                <p>+7 906 538 31 43</p>
                <p>r_shebanin@mail.ru</p>
            </div>
        </footer>
    )
}

export default Footer