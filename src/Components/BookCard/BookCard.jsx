import booktemp from "../../Constants/images/booktemp.png"

import styles from "./BookCard.module.css"

const BookCard = () =>{
    return(
        <div className={styles.book_card}>
            <div className={styles.book_info}>
                <div className={styles.bool_avatar}>
                    <img className={styles.bool_avatar_image} src={booktemp} alt={'book-image'}/>
                    <p>в наличии</p>
                </div>
                <div className={styles.bool_meta}>
                    <div className={styles.bool_meta_block}>
                        <label>Автор</label>
                        <p>автор имя</p>
                    </div>
                    <div className={styles.bool_meta_block}>
                        <label>название</label>
                        <p>название книги</p>
                    </div>
                    <div className={styles.bool_meta_block}>
                        <label>возрастное ограничение</label>
                        <p>18+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
