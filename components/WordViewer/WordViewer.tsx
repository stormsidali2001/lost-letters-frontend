import styles from './WordViewer.module.css';
interface PropType{
    word:string;
    currentLetter:number;
}
const WordViewer = ({word,currentLetter}:PropType) => {

  return (
    <div className={styles.container}>
        <ul>

        </ul>
    </div>
  )
}

export default WordViewer