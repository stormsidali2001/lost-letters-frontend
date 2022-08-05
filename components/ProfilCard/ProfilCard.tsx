import styles from './ProfilCard.module.css';
interface PropType{
    title:string;
    description:string;
    profilImageUrl:string;
    coverImgUrl:string;
    isOnline:boolean;
    
}
const ProfilCard = ({title,description,profilImageUrl,coverImgUrl,isOnline}:PropType)=>{
    return(
        <div className={styles.card}>
            <div className={styles.cover}>
                <img src={coverImgUrl}/>
            </div>
            <div className={styles.imageContainer}>
                <img src={profilImageUrl}/>
                <div className={`${styles.onlineCircle} ${isOnline ? styles.online: styles.offline}`}></div>
            </div>
            <div className={styles.title}>{title}</div>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
                <button>Profil</button>
            </div>
        </div>
    )
}

export default ProfilCard;