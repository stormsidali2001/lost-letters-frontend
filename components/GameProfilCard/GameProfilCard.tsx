import styles from './GameProfilCard.module.css';

export interface GameProfilCardProps{
    fullname:string;
    hp:number;
    exp:number;
    level:number;
    profilImgUrl:string;

}
const GameProfilCard = ({fullname,hp,exp,level,profilImgUrl}:GameProfilCardProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.profilImgContainer}>
            <img src={profilImgUrl}  />
        </div>
        <div className={styles.content}>
            <div className={styles.fullname}>{fullname}</div>
            <div className={styles.bars}>
                <div className={styles.hpBar}>
                    <label>Hp</label>
                    <progress value={hp*100} max={100}></progress>
                    <label>{hp*100}%</label>
                </div>
                <div className={styles.expBar}>
                    <label>Exp</label>
                    <progress value={exp*100} max={100}></progress>
                    <label>{exp*100}%</label>
                </div>
            </div>
        </div>
        <span className={styles.level}>lvl {level}</span>


    </div>
  )
}

export default GameProfilCard