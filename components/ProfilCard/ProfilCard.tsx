import styles from './ProfilCard.module.css';
interface PropType{
    fullname:string;
    description:string;
    profilImageUrl:string;
    coverImgUrl:string;
    isOnline:boolean;
    
}
const ProfilCard = ({fullname,description,profilImageUrl,coverImgUrl,isOnline}:PropType)=>{
    return(
        <div className={styles.card}>
            <div className={styles.cover}>
                <img src={coverImgUrl}/>
            </div>
            <div className={styles.imageContainer}>
                <img src={profilImageUrl}/>
                <div className={`${styles.onlineCircle} ${isOnline ? styles.online: styles.offline}`}></div>
            </div>
            <div className={styles.title}>{fullname}</div>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
                <button>Profil</button>
            </div>
        </div>
    )
}

export default ProfilCard;