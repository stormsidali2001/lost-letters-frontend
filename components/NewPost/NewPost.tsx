import CaptureIcon from '../icons/CaptureIcon'
import PhotoIcon from '../icons/PhotoIcon'
import styles from './NewPost.module.css'
const NewPost = () => {
    const links =[
        {
            text:"Photo",
            icon:<PhotoIcon/>
        },
        {
            text:"Capture",
            icon:<CaptureIcon/>
        }
    ]
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <img src='/sidali.jpg' className={styles.profilImage}/>
            <input className={styles.postInput} placeholder="Whats in Your Mind ?"/>
        </div>
        <hr className={styles.separator}/>
        <div className={styles.bottom}>
            <ul className={styles.links}>
                {
                    links.map(({text,icon},index)=>{
                        return(
                            <li key={index} className={styles.link}>
                                {icon}
                                <label className={styles.text}>{text}</label>
                            </li>
                        )
                    })
                }

            </ul>
           
        </div>
    </div>
  )
}

export default NewPost