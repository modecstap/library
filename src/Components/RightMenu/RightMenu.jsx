
import BookCard from "../BookCard/BookCard"
import styles from "./RightMenu.module.css"

const RightMenu = () =>{
    return(
        <div>
            <div className={styles.CardField}>
                { [...Array(3)].map((item, index) => <BookCard /> ) }
            </div>
            <div className={styles.CardField}>
                { [...Array(3)].map((item, index) => <BookCard /> ) }
            </div>
            <div className={styles.CardField}>
                { [...Array(3)].map((item, index) => <BookCard /> ) }
            </div>
        </div>
    )
}

export default RightMenu