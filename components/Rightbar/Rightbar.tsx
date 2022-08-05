import styles from './Rightbar.module.css';
const Rightbar = () => {
  const friends = [
    {
      imageUrl:'Reza Biazar.jpg',
      fullname:'Reza Biazar',
      isOnline:true
    },
    {
      imageUrl:'Alyona Grishina.jpg',
      fullname:'Alyona Grishina',
      isOnline:true
    },
    {
      imageUrl:'Pavel Anoshin.jpg',
      fullname:'Pavel Anoshin',
      isOnline:false
    },
    {
      imageUrl:'Joseph Gonzalez.jpg',
      fullname:'Joseph Gonzalez',
      isOnline:false
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>Friends</div>
        <ul className={styles.friendsContainer}>
          {
            friends.map(({fullname,imageUrl,isOnline},index)=>{
              return(
                <li key={index} className={styles.friend}>
                  <div className={styles.profilImgContainer}>
                    <img src={imageUrl}/>
                    <div className={`${styles.onlineIndicator} ${isOnline?styles.online:styles.offline}`}></div>
                  </div>
                  <div className={styles.fullname}>{fullname}</div>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.showMoreButton}>Show More</div>
        <hr className={styles.separator}/>
        <div className={styles.heading}>Ads</div>
        <div className={styles.advertisementContainer}>
          <img src='ad.jpg'/>
        </div>


      </div>
    </div>
  )
}

export default Rightbar