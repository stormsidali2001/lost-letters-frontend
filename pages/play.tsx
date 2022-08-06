import { NextPage } from 'next'
import Leftbar from '../components/Leftbar/Leftbar'
import PlaySection from '../components/PlaySection/PlaySection'
import Rightbar from '../components/Rightbar/Rightbar'
import TopbarUser from '../components/TopbarUser/TopbarUser'
import styles from '../styles/Play.module.css'
const Play:NextPage = () => {
  return (
    <div className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            <Leftbar/>
            <PlaySection/>
            <Rightbar/>
        </main>
    </div>
  )
}

export default Play