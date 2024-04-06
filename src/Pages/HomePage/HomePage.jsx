import styles from './HomePage.module.css'
import LeftMenu from "../../Components/LeftMenu/LeftMenu"
import RightMenu from '../../Components/RightMenu/RightMenu'

const HomePage = () => {
    return(
        <div className={styles.main}>
            <LeftMenu />
            <RightMenu />
        </div>
    )
}

export default HomePage