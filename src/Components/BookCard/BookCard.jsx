import { Link } from "react-router-dom"

import booktemp from "../../Constants/images/booktemp.jpg"
import booktemp1 from "../../Constants/images/booktemp1.jpg"
import booktemp2 from "../../Constants/images/booktemp2.jpg"
import booktemp3 from "../../Constants/images/booktemp3.jpg"

import styles from "./BookCard.module.css"

const BookCard = () =>{
    let avatar = booktemp;
    const value = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (value % 2 === 0) {
        avatar = booktemp1
    } else if (value % 3 === 0) {
        avatar = booktemp2
    } else if (value % 5 ===0) {
        avatar = booktemp3
    }

    return(
        <Link to="/bookPage" className={styles.book_card}>
            <button className={styles.book_info}>
                <div className={styles.bool_avatar}>
                    <img className={styles.bool_avatar_image} src={avatar} alt={'book-image'}/>
                    <p>в наличии</p>
                </div>
                <div className={styles.bool_meta}>
                    <div className={styles.bool_meta_block}>
                        <label>Автор</label>
                        <p>автор имя</p>
                    </div>
                    <div className={styles.bool_meta_block}>
                        <label>Название</label>
                        <p>название книги</p>
                    </div>
                    <div className={styles.bool_meta_block}>
                        <label>Возрастное ограничение</label>
                        <p>18+</p>
                    </div>
                </div>
            </button>
        </Link>
    )
}

export default BookCard
