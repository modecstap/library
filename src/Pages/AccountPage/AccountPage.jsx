import styles from './BookPage.module.css'

import Footer from '../../Components/Footer/Footer'
import TopMenu from '../../Components/TopMenu/TopMenu'

const AccountPage = (props) => {
    return(
        <div className={styles.content_blok}>
            <TopMenu/>
            
            <Footer/>
        </div>
    )
}

export default AccountPage
