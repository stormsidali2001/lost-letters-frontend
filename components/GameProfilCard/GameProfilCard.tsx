import styles from './GameProfilCard.module.css';

const GameProfilCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.profilImgContainer}>
            <img src=''  />
        </div>
        <div className={styles.content}>
            <div className={styles.title}></div>
            <div className={styles.bars}>
                <div className={styles.bar}>
                    <label>Hp</label>
                    <progress/>
                    <label>Exp</label>
                </div>
                <div className={styles.bar}>
                    <label>Hp</label>
                    <progress/>
                    <label>Exp</label>
                </div>
            </div>
        </div>
        <span>lvl 32</span>


    </div>
  )
}

export default GameProfilCard