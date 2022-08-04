import NewPost from '../NewPost/NewPost';
import styles from './Posts.module.css';
const Posts = () => {
  return (
    <div className={styles.container}>
        <NewPost/>
    </div>
  )
}

export default Posts