import styles from './Topbar.module.css'
const Topbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <span className={styles.logo}>Lost.Letters</span>
            <ul className={styles.links}>
                <li>Overview</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={styles.right}>
            <ul>
                <li>Signin</li>
                <li>Signup</li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar