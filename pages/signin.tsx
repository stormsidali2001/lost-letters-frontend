import { NextPage } from "next"
import Link from "next/link"
import { SetStateAction, useState } from "react"
import Form from "../components/Form/Form"
import WonderingViking from "../components/svgs/wonderingViking"
import Topbar from "../components/Topbar/Topbar"
import styles from '../styles/Signin.module.css'
const Signin:NextPage = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
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
              svg = {<WonderingViking/>}
            />
        </main>
    </div>
  )
}

export default Signin