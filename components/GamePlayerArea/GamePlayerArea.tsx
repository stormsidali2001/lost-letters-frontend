import GameProfilCard, { GameProfilCardProps } from '../GameProfilCard/GameProfilCard';
import styles from './GamePlayerArea.module.css';
interface PropType{

}
const GamePlayerArea = ({exp,fullname,hp,level,profilImgUrl}:GameProfilCardProps&PropType) => {
  return (
    <div className={styles.container}>
        <GameProfilCard
            exp={exp}
            hp={hp}
            level={level}
            fullname={fullname}
            profilImgUrl={profilImgUrl}
        />
    </div>
  )
}

export default GamePlayerArea