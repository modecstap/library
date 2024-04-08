import { Link } from "react-router-dom"

import booktemp1 from "../../Constants/images/booktemp1.jpg"
import booktemp2 from "../../Constants/images/booktemp2.jpg"
import booktemp3 from "../../Constants/images/booktemp3.jpg"

import styles from "./RecomendedBook.module.css"

const RecomendedBook = () =>{

    return(
        <div className={styles.content_blok}>
            <label>Так-же рекомендуем</label>
            <div className={styles.image_blok}>
                <img src={booktemp1} className={styles.image}/>
                <img src={booktemp2} className={styles.image}/>
                <img src={booktemp3} className={styles.image}/>
            </div>
        </div>
    )
}

export default RecomendedBook
