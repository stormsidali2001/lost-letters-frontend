import ReadyViking from '../svgs/ReadyViking';
import styles from './PlaySection.module.css';

const PlaySection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.introContainer}>
                <div className={styles.imageContainer}>
                    <ReadyViking/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaySection