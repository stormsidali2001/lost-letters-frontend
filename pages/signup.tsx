import { NextPage } from "next"
import Topbar from "../components/Topbar/Topbar"
import styles from '../styles/Signup.module.css'
const Signup:NextPage = () => {
  return (
    <div className={styles.container}>
        <Topbar/>
          <main className={styles.main}>

          </main> 
    </div>
  )
}

export default Signup