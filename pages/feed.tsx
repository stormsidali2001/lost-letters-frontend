import { NextPage } from "next"
import Leftbar from "../components/Leftbar/Leftbar";
import Posts from "../components/posts/Posts";
import Rightbar from "../components/Rightbar/Rightbar";
import TopbarUser from "../components/TopbarUser/TopbarUser";
import styles from '../styles/Feed.module.css';
const Feed:NextPage = () => {
  return (
    <div  className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            <Leftbar/>
            <Posts/>
            <Rightbar/>
        </main>
    </div>
  )
}

export default Feed;