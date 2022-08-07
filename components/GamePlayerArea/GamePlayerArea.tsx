import GameProfilCard, { GameProfilCardProps } from '../GameProfilCard/GameProfilCard';
import WordViewer from '../WordViewer/WordViewer';
import styles from './GamePlayerArea.module.css';
interface PropType{
  reversed?:boolean;
  description:string;
  word:string;
}
const GamePlayerArea = ({exp,fullname,hp,level,profilImgUrl,reversed = false,description,word}:GameProfilCardProps&PropType) => {
  return (
    <div className={`${styles.container} ${reversed?styles.reversed:''}`}>
        <div className={styles.wrapper}>
          <GameProfilCard
              exp={exp}
              hp={hp}
              level={level}
              fullname={fullname}
              profilImgUrl={profilImgUrl}
          />
        </div>
        <div className={styles.wrapper}>
          <WordViewer
            word = {word}
            currentLetter = {1}
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description}>{description}</div>
        </div>
      
    </div>
  )
}

export default GamePlayerArea