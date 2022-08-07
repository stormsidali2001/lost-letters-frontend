import styles from './GameProfilCard.module.css';

interface PropType{
    fullname:string;
    hp:number;
    exp:number;
    level:number;
    profilImgUrl:string;

}
const GameProfilCard = ({fullname,hp,exp,level,profilImgUrl}:PropType) => {
  return (
    <div className={styles.container}>
        <div className={styles.profilImgContainer}>
            <img src={profilImgUrl}  />
        </div>
        <div className={styles.content}>
            <div className={styles.fullname}>{fullname}</div>
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
        <span>lvl {fullname}</span>


    </div>
  )
}

export default GameProfilCard