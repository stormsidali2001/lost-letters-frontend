import styles from './WordViewer.module.css';
interface PropType{
    word:string;
    currentLetter:number;
}
const WordViewer = ({word,currentLetter}:PropType) => {

  return (
    <div className={styles.container}>
        <ul>
            {
                word.split('').map((ch,index)=>{
                    const isCurrentLetter = (index+1) === currentLetter;
                    return(
                        <li className={`${styles.letter} ${isCurrentLetter?styles.currentLetter:''}`}>{isCurrentLetter?ch:""}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default WordViewer