import Link from 'next/link';
import { MouseEventHandler } from 'react';
import GoogleIcon from '../icons/GoogleIcon';
import WonderingViking from '../svgs/wonderingViking';
import styles from './Form.module.css';

interface Obj{
    label:string;
    props:any;
}
interface PropType{
    inputs:Obj[];
    handleSubmit:MouseEventHandler<HTMLButtonElement>;
    handleSignInGoogle:MouseEventHandler<HTMLButtonElement>;
    svg:JSX.Element;
}
const Form = ({inputs,handleSubmit,handleSignInGoogle,svg}:PropType) => {
  const topWord = 'LOST';
  const downWord = 'LETTERS';
  return (
    <div className={styles.container}>
    <div className={styles.left}>
        <form>
          <div className={styles.title}>
              <div className={styles.section1}>
                {
                  topWord.split('').map(ch=>{
                    return (
                      <span className={styles.letter}>{ch}</span>
                    )
                  })
                }
              </div>
              <div className={styles.section2}>
              {
                  downWord.split('').map(ch=>{
                    return (
                      <span className={styles.letter}>{ch}</span>
                    )
                  })
                }
              </div>
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
             <div className={styles.forgotPassword}><Link href ='/forgot-password'>Forgot Password</Link></div>

          </div>
          <div className={styles.buttons}>
              <button className={`${styles.signinBtn} ${styles.btn}`} onClick={handleSubmit}>Signin</button>
              <span className={styles.separator}>OR</span>
              <button className={`${styles.signinGoogleBtn} ${styles.btn}`} onClick={handleSignInGoogle}>
                <GoogleIcon/>
                <span>Signin with Google</span>
              </button>
          </div>
        </form>
    </div>
    <div className={styles.right}>
        <div className={styles.top}>
            
<svg width="257" height="185" viewBox="0 0 257 185" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 14">
<path id="Vector 4" d="M231.253 126.879L82.8467 154.93" stroke="#90C8AC" stroke-width="1.957" stroke-dasharray="3.91 3.91"/>
<path id="Vector 3" d="M139.6 61.9717L211.356 100.786" stroke="#90C8AC" stroke-width="1.957" stroke-dasharray="3.91 3.91"/>
<path id="Vector 2" d="M44.0322 28.0505L94.9143 49.2514" stroke="#90C8AC" stroke-width="1.957" stroke-dasharray="3.91 3.91"/>
<g id="letter">
<rect id="Rectangle 3" y="14.8442" width="33.6503" height="35.0107" rx="4.25954" transform="rotate(-26.1763 0 14.8442)" fill="#73A9AD" fill-opacity="0.4"/>
<path id="P" d="M20.0956 37.2804L9.92125 16.5817L18.0875 12.5676C19.6575 11.7959 21.1423 11.4383 22.5421 11.4948C23.9385 11.5446 25.1865 11.9559 26.2859 12.729C27.3888 13.4919 28.278 14.5607 28.9537 15.9352C29.6293 17.3097 29.929 18.6683 29.8528 20.0108C29.7765 21.3534 29.3198 22.5943 28.4827 23.7336C27.6524 24.8696 26.4422 25.8284 24.852 26.61L19.647 29.1685L17.9231 25.6615L22.4207 23.4507C23.2629 23.0367 23.8857 22.5507 24.289 21.9927C24.6958 21.4247 24.9065 20.815 24.9209 20.1637C24.9389 19.5024 24.7806 18.8314 24.4461 18.1509C24.1082 17.4636 23.6753 16.9319 23.1474 16.5556C22.6228 16.1692 22.0148 15.9704 21.3232 15.959C20.6282 15.9408 19.8563 16.1404 19.0073 16.5577L16.0562 18.0084L24.4719 35.1292L20.0956 37.2804Z" fill="#202022" fill-opacity="0.72"/>
</g>
<g id="letter_2">
<rect id="Rectangle 3_2" x="93.936" y="48.7656" width="33.6503" height="35.0107" rx="4.25954" transform="rotate(-26.1763 93.936 48.7656)" fill="#73A9AD" fill-opacity="0.4"/>
<path id="L" d="M115.171 70.6416L104.997 49.9429L109.373 47.7918L117.774 64.8824L126.648 60.5205L128.421 64.1286L115.171 70.6416Z" fill="#202022" fill-opacity="0.72"/>
</g>
<g id="letter_3">
<rect id="Rectangle 3_3" x="211.356" y="95.7339" width="33.6503" height="35.0107" rx="4.25954" transform="rotate(-26.1763 211.356 95.7339)" fill="#73A9AD" fill-opacity="0.4"/>
<path id="A" d="M233.588 117.12L228.899 119.425L225.87 95.214L231.51 92.4419L248.819 109.633L244.13 111.938L231.096 98.5182L230.934 98.5977L233.588 117.12ZM229.296 109.128L240.373 103.683L242.052 107.099L230.975 112.544L229.296 109.128Z" fill="#202022" fill-opacity="0.72"/>
</g>
<g id="letter_4">
<rect id="Rectangle 3_4" x="45.0112" y="153.139" width="33.6503" height="35.0107" rx="4.25954" transform="rotate(-26.1763 45.0112 153.139)" fill="#73A9AD" fill-opacity="0.4"/>
<path id="Y" d="M52.6218 156.012L57.5236 153.603L66.6252 160.197L66.8274 160.098L67.1655 148.864L72.0673 146.454L71.0951 163.546L74.6919 170.864L70.346 173L66.7492 165.683L52.6218 156.012Z" fill="#202022" fill-opacity="0.72"/>
</g>
</g>
</svg>

        </div>
        <div className={styles.bottom}>
            
            {svg}

        </div>
       
    </div>
</div>
  )
}

export default Form