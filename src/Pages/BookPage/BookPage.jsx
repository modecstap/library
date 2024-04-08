import styles from './BookPage.module.css'

import BookTopDescription from "../../Components/BookTopDescription/BookTopDescription"
import BookDescription from '../../Components/BookDescription/BookDescription'
import RecomendedBook from '../../Components/RecomendedBook/RecomendedBook'
import Footer from '../../Components/Footer/Footer'
import TopMenu from '../../Components/TopMenu/TopMenu'

const BookPage = (props) => {
    return(
        <div className={styles.content_blok}>
            <TopMenu/>
            <BookTopDescription/>
            <BookDescription/>
            <RecomendedBook/>
            <Footer/>
        </div>
    )
}

export default BookPage
