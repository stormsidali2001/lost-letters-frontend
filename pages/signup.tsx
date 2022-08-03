import { NextPage } from "next"
import { SetStateAction, useState } from "react";
import Form from "../components/Form/Form";
import ExplorerViking from "../components/svgs/ExplorerViking";
import Topbar from "../components/Topbar/Topbar"
import styles from '../styles/Signup.module.css'
const Signup:NextPage = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [confirm,setConfirm] = useState<string>('');

  const inputs = [
    {
      label:'Email',
      props:{
        type:'email',
        value:email,
        onChange:(e: { target: { value: SetStateAction<string> } })=>setEmail(e.target.value)
      }
    },
    {
      label:'Password',
      props:{
        type:'password',
        value:password,
        onChange:(e: { target: { value: SetStateAction<string> } })=>setPassword(e.target.value)
      }
    },
    {
      label:'Confirm',
      props:{
        type:'password',
        value:confirm,
        onChange:(e: { target: { value: SetStateAction<string> } })=>setConfirm(e.target.value)
      }
    }
  ]
  const handleSubmit = (e: any)=>{
    
  }
  const handleSignInGoogle = (e:any)=>{

  }
  return (
    <div className={styles.container}>
        <Topbar/>
        <main className={styles.main}>
            <Form
              inputs={inputs}
              handleSubmit={handleSubmit}
              handleSignInGoogle={handleSignInGoogle}
              svg = {<ExplorerViking/>}
            />
        </main>
    </div>
  )
}

export default Signup