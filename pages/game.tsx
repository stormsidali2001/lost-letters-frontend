import GamePlayerArea from '../components/GamePlayerArea/GamePlayerArea';
import TopbarUser from '../components/TopbarUser/TopbarUser';
import styles from '../styles/Game.module.css';


const Game = () => {
    const oponent = {
            fullname:'Reza Biazar',
            profilImgUrl:'Reza Biazar.jpg',
            level:32,
            hp:0.8,
            exp:0.5,
            word:'sidali',
            description:"think of a savage animal who run at high spped"
        };
    const player = {
            fullname:'Assoul Sidali',
            profilImgUrl:'sidali.jpg',
            level:32,
            hp:0.8,
            exp:0.5,
            word:'courageous',
            description:"a man who can sacrifice his self for others"
    };
    function random(min:number,max:number,floor:boolean = true){
        let res =  Math.random()*(max-min)+min;
        if(floor) res = Math.floor(res);
        return res;
    }
    function generateCircles(numCircles:number,descW:number,descH:number) {
        const active:{x:number,y:number}[] = []
       
        const r = 17;
        const k = 30;
        const w = r / Math.sqrt(2);
        
        const rows = Math.floor((descW-70)/w);
        const cols = Math.floor((descH-70)/w);
        const grid:({x:number,y:number} |undefined)[] = []
        for(let i = 0;i<rows*cols;i++){
            grid[i] = undefined;
        }
        //chosing a random point in the grid
        let x = descW/2
        let y = descH/2
        const col = Math.floor(y/w);
        const row =  Math.floor(x/w);
        const X0 = {x,y};

      
        grid[row*cols +col] = X0;
        active.push(X0);
      }
  return (
    <div className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <div className={styles.leftCanvasContainer}></div>
                        <GamePlayerArea 
                            fullname={oponent.fullname}
                            exp={oponent.exp}
                            hp={oponent.hp}
                            level={oponent.level}
                            profilImgUrl = {oponent.profilImgUrl}
                            description={oponent.description}
                            word = {oponent.word}
                        />
                        <div className={styles.rightCanvasContainer}></div>
                    </div>
                <div className={styles.bottom}>
                    <div className={styles.leftCanvasContainer}></div>
                        <GamePlayerArea
                             fullname={player.fullname}
                             exp={player.exp}
                             hp={player.hp}
                             level={player.level}
                             profilImgUrl = {player.profilImgUrl}
                             description={player.description}
                             reversed = {true}
                             word = {player.word}
                        />
                    <div className={styles.rightCanvasContainer}></div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Game