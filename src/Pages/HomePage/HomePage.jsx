import styles from './HomePage.module.css'
import BookCard from "../../Components/BookCard/BookCard"

const HomePage = (props) => {
    return(
        <div className={props.classname}>
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

export default HomePage
