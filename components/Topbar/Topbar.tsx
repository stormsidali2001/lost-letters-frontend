import Link from 'next/link'
import styles from './Topbar.module.css'
const Topbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <span className={styles.logo}><Link href='/'>Lost.Letters</Link></span>
            <ul className={styles.links}>
                <li>Overview</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={styles.right}>
            <ul>
                <li><Link href='/signin'>Signin</Link></li>
                <li><Link href='/signup'>Signup</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar