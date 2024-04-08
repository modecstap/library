import booktemp from "../../Constants/images/booktemp.jpg"
import booktemp1 from "../../Constants/images/booktemp1.jpg"
import booktemp2 from "../../Constants/images/booktemp2.jpg"
import booktemp3 from "../../Constants/images/booktemp3.jpg"

import styles from "./BookTopDescription.module.css"

const BookTopDescription = () =>{
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
        <div className={styles.content_blok}>
            <img className={styles.bool_avatar_image} src={avatar} alt={'book-image'}/>
            <div className={styles.book_info}>
                <div>
                    <label>Автор</label>
                    <p>автор имя</p>
                </div>
                <div>
                    <label>издетель</label>
                    <p>издательство</p>
                </div>
                <div>
                    <label>Возрастное ограничение</label>
                    <p>18+</p>
                </div>
                <div>
                    <label>наличие</label>
                    <p>10шт</p>
                </div>
            </div>
        </div>
    )
}

export default BookTopDescription
