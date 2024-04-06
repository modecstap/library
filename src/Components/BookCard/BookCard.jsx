import booktemp from "../../Constants/images/booktemp.png"

import styles from "./BookCard.module.css"

const BookCard = () =>{
    return(
        <div>
            <div className={styles.book_info_top}>
                <img src={booktemp}/>
                <div>
                    <div>
                        <label>Автор</label>
                        <p>автор имя</p>
                    </div>
                    <div>
                        <label>название</label>
                        <p>название книги</p>
                    </div>
                    <div>
                        <label>возрастное ограничение</label>
                        <p>18+</p>
                    </div>
                </div>
            </div>
            <p>в наличии</p>
        </div>
    )
}

export default BookCard