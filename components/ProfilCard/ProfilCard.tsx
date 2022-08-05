import styles from './ProfilCard.module.css';
interface PropType{
    fullname:string;
    description:string;
    profilImageUrl:string;
    coverImgUrl?:string;
    isOnline:boolean;
    
}
const ProfilCard = ({fullname,description,profilImageUrl,coverImgUrl,isOnline}:PropType)=>{
    return(
        <div className={styles.container}>
            <div className={styles.images}>
                <div className={styles.cover}>
                    {
                        coverImgUrl &&
                        <img src={coverImgUrl}/>
                    }
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.wrapper}>
                    <img src={profilImageUrl}/>
                    <div className={`${styles.onlineIndicator} ${isOnline ? styles.online: styles.offline}`}></div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>{fullname}</div>
            <div className={styles.content}>
                <p className={styles.description}>{description}</p>
                <button>Profil</button>
            </div>

        </div>
    )
}

export default ProfilCard;