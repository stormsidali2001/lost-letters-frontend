import AddFriendIcon from '../icons/AddFriendIcon';
import ProfilCard from '../ProfilCard/ProfilCard';
import styles from './FriendSuggestions.module.css';
const FriendsSuggestions = () => {
  const friendsSuggestions = [
    {
      fullname:'Julian Wan',
      profilImgUrl:'Julian Wan.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      coverImgUrl:'/cover-nature.jpg',
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'Ludovic Migneault',
      profilImgUrl:'Ludovic Migneault.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'Kier In Sight',
      profilImgUrl:'Kier In Sight.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      coverImgUrl:'/cover-town.jpg',
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'Vicky Hladynets',
      profilImgUrl:'Vicky Hladynets.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      coverImgUrl:'/cover-moon.jpg',
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'Albert Dera',
      profilImgUrl:'Albert Dera.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      coverImgUrl:'/cover-nature.jpg',
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'ian dooley',
      profilImgUrl:'ian dooley.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'Darshan Patel',
      profilImgUrl:'Darshan Patel.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      coverImgUrl:'cover-town.jpg',
      isOnline:Math.random() > 0.5 ? true:false
    },
    {
      fullname:'Petr Sevcovic',
      profilImgUrl:'Petr Sevcovic.jpg',
      description:"descriptive text about me this text is supposed to introduce my self brievely",
      coverImgUrl:'cover-moon.jpg',
      isOnline:Math.random() > 0.5 ? true:false
    }

  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headingContainer}>
            <AddFriendIcon/>
            <span className={styles.heading}>Suggestions</span>
        </div>
        <div className={styles.cardsContainer}>
            {
              friendsSuggestions.map(({fullname,profilImgUrl,description,coverImgUrl,isOnline},index)=>{
                return (
                  <ProfilCard
                    fullname={fullname}
                    description={description}
                    profilImageUrl={profilImgUrl}
                    coverImgUrl={coverImgUrl}
                    isOnline = {isOnline}
                  />
                )
              })
            }
        </div>
        </div>
    </div>
  )
}

export default FriendsSuggestions;