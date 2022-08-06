import ReadyViking from '../svgs/ReadyViking';
import styles from './PlaySection.module.css';

const PlaySection = () => {
    const onlineFriends =[
        {
            imageUrl:'Reza Biazar.jpg',
            fullname:'Reza Biazar'
        },
        {
            imageUrl:'Alyona Grishina.jpg',
            fullname:'Alyona Grishina'
        },
        {
            imageUrl:'Pavel Anoshin.jpg',
            fullname:'Pavel Anoshin'
        },
        {
            imageUrl:'Joseph Gonzalez.jpg',
            fullname:'Joseph Gonzalez'
        },

    ]
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.introContainer}>
                <div className={styles.imageContainer}>
                    <ReadyViking/>
                </div>
                <div className={styles.content}>
                    <div className={styles.heading}>Ready for the Fight !</div>
                    <p className={styles.description}>You can either find a random oponent by clicking the button bellow or invite an online friend to aLetters Battle! </p>
                </div>
            </div>
            <div className={styles.gameTypeContainer}>
                <div className={styles.random}>
                    <div className={styles.heading}>Random Game</div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imageContainer}>
                            <img src=''/>
                        </div>
                        <button className={styles.playButton}>Play</button>
                    </div>
                </div>
                <hr className={styles.separator}/>
                <div className={styles.withFriends}>
                    <div className={styles.heading}>Online Friends</div>
                    <ul className={styles.friends}>
                        {
                            onlineFriends.map(({fullname,imageUrl},index)=>{
                                return(
                                    <li key={index} className={styles.friend}>
                                        <div className={styles.profilImgContainer}>
                                        <img src={imageUrl}/>
                                        <div className={`${styles.onlineIndicator} ${styles.online}`}></div>
                                        </div>
                                        <div className={styles.content}>
                                            <div className={styles.fullname}>{fullname}</div>
                                            <div className={styles.buttons}></div>
                                        </div>
                                  </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaySection