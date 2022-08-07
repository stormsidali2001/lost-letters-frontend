import GamePlayerArea from '../components/GamePlayerArea/GamePlayerArea';
import TopbarUser from '../components/TopbarUser/TopbarUser';
import styles from '../styles/Game.module.css';


const Game = () => {
    const oponent = {
            fullname:'Reza Biazar',
            level:'32',
            hp:0.8,
            exp:0.5,
            word:'sidali',
            description:"think of a savage animal who run at high spped"
        };
    const player = {
        fullname:'Assoul Sidali',
        level:'32',
        hp:0.8,
        exp:0.5,
        word:'sidali',
        description:"think of a savage animal who run at high spped"
    };
    
  return (
    <div className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <div className={styles.leftCanvasContainer}></div>
                        <GamePlayerArea/>
                        <div className={styles.rightCanvasContainer}></div>
                    </div>
                <div className={styles.bottom}>
                    <div className={styles.leftCanvasContainer}></div>
                        <GamePlayerArea/>
                    <div className={styles.rightCanvasContainer}></div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Game