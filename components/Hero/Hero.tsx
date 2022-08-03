import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.center}>
        <svg width="184" height="978" viewBox="0 0 184 978" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M170 14L14 378.155L135.47 431.767L14 978" stroke="#90C8AC" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round"/>
        <text  x='25%' y='70%' >VS</text>
        </svg>

        </div>
        <div className={styles.right}></div>
    </div>
  )
}

export default Hero