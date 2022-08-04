import { NextPage } from "next"
import TopbarUser from "../components/TopbarUser/TopbarUser";
import styles from '../styles/Feed.module.css';
const Feed:NextPage = () => {
  return (
    <div  className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            
        </main>
    </div>
  )
}

export default Feed;