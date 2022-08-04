import styles from './Post.module.css'
interface PropType{
    username:string;
    imgUrl:string;
    date:string;
    text:string;
    postImageUrl?:string;
}
const Post = ({username,imgUrl,date,postImageUrl,text}:PropType) => {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <img className={styles.profilImg} src = {imgUrl}/>
            <div className={styles.infos}>
                <span className={styles.username}>{username}</span>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
      
        <div className={styles.content}>
            <p className={styles.text}>{text}</p>
            { 
            postImageUrl&& 
            <div className={styles.postImage}>
                    <img src={postImageUrl}/>
            </div>
            }
        </div>

        
    </div>
  )
}

export default Post