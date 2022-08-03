import { NextPage } from "next"
import Topbar from "../components/Topbar/Topbar"
import styles from '../styles/Signup.module.css'
const Signin:NextPage = () => {
  return (
    <div className={styles.container}>
        <Topbar/>
        <main className={styles.main}>
           <div className={styles.wrapper}>
                
           </div>
        </main>
    </div>
  )
}

export default Signin