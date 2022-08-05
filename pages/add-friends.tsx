import { NextPage } from "next";
import styles from '../styles/AddFriends.module.css'
import Leftbar from "../components/Leftbar/Leftbar"
import Rightbar from "../components/Rightbar/Rightbar"
import TopbarUser from "../components/TopbarUser/TopbarUser"

const AddFriends:NextPage = () => {
  return (
    <div  className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            <Leftbar/>
            <Rightbar/>
        </main>
    </div>
  )
}

export default AddFriends;