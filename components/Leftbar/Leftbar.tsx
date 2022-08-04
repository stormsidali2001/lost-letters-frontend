import FriendsIcon from '../icons/FriendsIcon'
import HammerIcon from '../icons/HammerIcon'
import HitoryIcon from '../icons/HitoryIcon'
import HomeIcon from '../icons/HomeIcon'
import InvitationIcon from '../icons/InvitationIcon'
import styles from './Leftbar.module.css'
const Leftbar = () => {
  const links = [
    {
        text:'Home',
        icon:<HomeIcon/>
    },
    {
        text:'Friends',
        icon:<FriendsIcon/>
    },
    {
        text:'Invitations',
        icon:<InvitationIcon/>
    },
    {
        text:'Play',
        icon:<HammerIcon/>
    },
    {
        text:'History',
        icon:<HitoryIcon/>
    },

  ]
  return (
    <div className={styles.container}>
        <ul className={styles.links}>
            <li className={styles.link}>
                
            </li>
        </ul>
    </div>
  )
}

export default Leftbar