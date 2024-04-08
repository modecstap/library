import styles from './HomePage.module.css'
import TopMenu from "../../Components/TopMenu/TopMenu"
import Footer from "../../Components/Footer/Footer"
import LeftMenu from "../../Components/LeftMenu/LeftMenu";
import BookCard from "../../Components/BookCard/BookCard"

const HomePage = (props) => {
    return(
        <>
            <LeftMenu/>
            <div className={styles.page_body}>
                <TopMenu/>
                <div className='content'>
                    <div className={props.classname}>
                        <div className={styles.CardField}>
                            { [...Array(9)].map((item, index) => <BookCard /> ) }
                        </div>
                        <div className={styles.opacity_white}>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}





export default HomePage
