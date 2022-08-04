import MessageIcon from '../icons/MessageIcon';
import NotificationIcon from '../icons/NotificationIcon';
import styles from './TopbarUser.module.css';
const TopbarUser = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <span className={styles.logo}>Lost.Letters</span>
        </div>
        <div className={styles.right}>
              <ul className={styles.icons}>
                <li className={styles.iconContainer}>
                    <MessageIcon/>
                    <span className={styles.counter}>1</span>
                </li>
                <li className={styles.iconContainer}>
                    <NotificationIcon/>
                    <span className={styles.counter}>2</span>
                </li>
              </ul>
            <div className={styles.user}>
             <span className={styles.username}>Sidali Assoul</span>
             <img className={styles.profilImage} src='/sidali.jpg'/>
            </div>
        </div>
    
    </div>
  )
}

export default TopbarUser