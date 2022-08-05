import FriendsList from '../components/FriendsList/FriendsList';
import Leftbar from '../components/Leftbar/Leftbar';
import Rightbar from '../components/Rightbar/Rightbar';
import TopbarUser from '../components/TopbarUser/TopbarUser';
import styles from '../styles/Friends.module.css';
const Friends = () => {
    return (
        <div  className={styles.container}>
            <TopbarUser/>
            <main className={styles.main}>
                <Leftbar/>
                <FriendsList/>
                <Rightbar/>
            </main>
        </div>
      )
}

export default Friends