import { useEffect, useId, useState } from 'react';
import GamePlayerArea from '../components/GamePlayerArea/GamePlayerArea';
import TopbarUser from '../components/TopbarUser/TopbarUser';
import styles from '../styles/Game.module.css';
import * as K from 'konva'
const Konva = K.default;

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
    const leftContainerId = useId();
    const rightContainerId = useId();
    const [runOnce,setRunOnce] = useState(false)
    const [leftKeys,setLeftKeys] = useState<{x:number,y:number}[]>([])
    const [rightKeys,setRightKeys] = useState<{x:number,y:number}[]>([])
    useEffect(()=>{
        const leftContainer = document.getElementById(leftContainerId);
        const rightContainer = document.getElementById(rightContainerId);
        if(!leftContainer || !rightContainer) return;
        if(!runOnce){
            const leftRect =leftContainer?.getBoundingClientRect();
            const rightRect =rightContainer?.getBoundingClientRect();
            const wL = leftContainer?.getBoundingClientRect().width;
            const hL = leftContainer?.getBoundingClientRect().height;
            const wR = leftContainer?.getBoundingClientRect().width;
            const hR = leftContainer?.getBoundingClientRect().height;

            var leftStage = new Konva.Stage({
                container: leftContainerId,   // id of container <div>
                width: wL,
                height: hL
              });

              var layer = new Konva.Layer();
              console.log(wL,hL,wR,hR)
              console.log('///////////',generateCircles(10,wL ,hL))
              const lk = generateCircles(10,wL ,hL);
              const rk = generateCircles(10,wR ,hR);
              lk.forEach(({x,y})=>{
                let circle = new Konva.Circle({
                    x ,
                    y,
                    radius: 20,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4,
                  });
                  layer.add(circle);

              })
             

              
              // add the shape to the layer
             
              
              // add the layer to the stage
              leftStage.add(layer);
              
            
              
          
            
            setRunOnce(true)

        }

            
           
      
    },[])
    function random(min:number,max:number,floor:boolean = true){
        let res =  Math.random()*(max-min)+min;
        if(floor) res = Math.floor(res);
        return res;
    }
    function dist(obj1:{x:number,y:number},obj2:{x:number,y:number}){
        return Math.hypot(obj1.x-obj2.x,obj1.y-obj2.y)
    }
    function generateCircles(numCircles:number,descW:number,descH:number) {
        const active:{x:number,y:number}[] = []
       
        const r = 17;
        const k = 30;
        const w = r / Math.sqrt(2);
        
        const rows = Math.floor((descW)/w);
        const cols = Math.floor((descH)/w);
        const grid:({x:number,y:number} |undefined)[] = []
        for(let i = 0;i<rows*cols;i++){
            grid[i] = undefined;
        }
        //chosing a random point in the grid and push it to the active list
        let x = descW/2
        let y = descH/2
        const col = Math.floor(y/w);
        const row =  Math.floor(x/w);
        const X0 = {x,y};
        grid[row*cols +col] = X0;
        active.push(X0);
        while(active.length >0){
            const randomIndex = Math.floor(Math.random()*active.length);
            const point = active[randomIndex];
            let found = false;
            for(let t = 0;t<k;t++){
                    //trying k times to find points far from the choosen active point by [r,2r] with a random angle
                    //the points should be choosen uniformly
                    let randomRadius = random(r,2*r);
                    let randomAngle = random(0,Math.PI*2);

                    const sample = {
                        x:point.x + randomRadius*Math.cos(randomAngle),
                        y:point.y - randomRadius*Math.sin(randomAngle)
                    };
                    let col =  Math.floor(sample.x/w)
                    let row = Math.floor(sample.y/w)
                    //checking if one neighbor at list exists in a distance <r
                    if (col > -3 && row > -3 && col < cols && row < rows && !grid[row*cols +col]) {
                            var neighborExist = false;
                            for (var i = -3; i <= 3; i++) {
                                for (var j = -3; j <= 3; j++) {
                                        var neighbor = grid[(row+j)*cols +col+i];
                                        if (neighbor) {
                                            var d = dist(sample, neighbor);
                                            if (d < r) {
                                                neighborExist = true;
                                            }
                                        }
                                }
                            }
                            if (!neighborExist) {
                                found = true;
                                grid[row*cols +col] = sample
                            
                                active.push(sample);
                                break;
                            }
               
                }
            
        
                
            }

            if(!found){
                active.splice(randomIndex,1)
           }
        }

        return grid.sort((a,b)=>Math.random()-1).slice(0,numCircles) as {x:number,y:number}[]
      }
  return (
    <div className={styles.container}>
        <TopbarUser/>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <div  className={styles.leftCanvasContainer}>
                 
                    </div>
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
                    <div id={leftContainerId} className={styles.leftCanvasContainer}></div>
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
                    <div id={rightContainerId} className={styles.rightCanvasContainer}></div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Game