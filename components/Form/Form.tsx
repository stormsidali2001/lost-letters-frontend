import Link from 'next/link';
import { MouseEventHandler } from 'react';
import styles from './Form.module.css';

interface Obj{
    label:string;
    props:any;
}
interface PropType{
    inputs:Obj[];
    handleSubmit:MouseEventHandler<HTMLButtonElement>;
    handleSignInGoogle:MouseEventHandler<HTMLButtonElement>;
}
const Form = ({inputs,handleSubmit,handleSignInGoogle}:PropType) => {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
        <form>
          <div className={styles.title}>
              <div className={styles.section1}></div>
              <div className={styles.section2}></div>
          </div>
          <div className={styles.inputsWrapper}>
            {
              inputs.map(({label,props},index)=>{
                return (
                  <div key={index} className={styles.inputContainer}>
                      <label>{label}</label>
                      <input {...props} />
                  </div>
                )
              })
            }
          </div>
          <div className={styles.forgotPassword}><Link href ='/forgot-password'>Forgot Password</Link></div>
          <div className={styles.buttons}>
              <button className={`${styles.signinBtn} ${styles.btn}`} onClick={handleSubmit}>Signin</button>
              <span className={styles.separator}>OR</span>
              <button className={`${styles.signinGoogleBtn} ${styles.btn}`} onClick={handleSignInGoogle}>Signin with Google</button>
          </div>
        </form>
    </div>
    <div className={styles.right}>

    </div>
</div>
  )
}

export default Form