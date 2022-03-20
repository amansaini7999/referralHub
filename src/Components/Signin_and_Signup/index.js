import React from 'react'
import styles from './styles/style.module.css'
import logo from '../../Asset/images/logoR.png'
import { useState } from 'react'
import googleIcon from '../../Asset/images/google.svg'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useHistory } from 'react-router-dom'
import { addUser } from '../../api/user/index'

const LoginSignup = ({setAuth, signin, token , setToken}) => {
    const [stu, setStu] = useState(true);

    const history = useHistory();

    const signUpWithGoogle = async() => {

        await firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((userCred) => {
				if (userCred) {
					setAuth(true);
					window.localStorage.setItem('auth', 'true');
                    const user = {
                        name: userCred.user.displayName,
                        email: userCred.user.email,
                        isReferee: stu
                    }
                    // console.log(user);
                    userCred.user.getIdToken().then(() => {
                        addUser(user).then((res) => {
                            if(res.isReferee)
                            {
                                window.localStorage.setItem('isReferee','true');
                            }
                            else
                            {
                                window.localStorage.setItem('isReferee','false');
                            }
                            const userId = userCred.user.uid;
                            let path = `users/${userId}`;
                            history.push(path);
                        })
                        
                    })
                    
				}
                
			});
    };

    const signInWithGoogle = async () => {

      await firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((userCred) => {
				if (userCred) {
					setAuth(true);
					window.localStorage.setItem('auth', 'true');
                    const user = {
                        name: userCred.user.displayName,
                        email: userCred.user.email,
                        isReferee: stu
                    }
                    // console.log(user);
                    userCred.user.getIdToken().then(() => {
                        addUser(user).then((res) => {
                            if(res.isReferee)
                            {
                                window.localStorage.setItem('isReferee','true');
                            }
                            else
                            {
                                window.localStorage.setItem('isReferee','false');
                            }
                            let path = '/';
                            history.push(path);
                        })
                        
                    })
                    
				}
			});
    };

  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <img className={styles.headingLogo} src={logo} alt="logo" />
            <h1 className={styles.headingText}>REFERRAL HUB</h1>
        </div>
        <div className={styles.midCard}>
            {stu?<><button style={{backgroundColor: "#1b1bd2"}} className={styles.buttonF} onClick={()=>setStu(true)}>STUDENT</button>
            <button className={styles.buttonS} onClick={()=>setStu(false)}>PROFESSIONAL</button></>:
            <><button  className={styles.buttonF} onClick={()=>setStu(true)}>STUDENT</button>
            <button style={{backgroundColor: "#1b1bd2"}} className={styles.buttonS} onClick={()=>setStu(false)}>PROFESSIONAL</button></>}

            <div className={styles.body}>
                {signin?
                    <>
                    <h3>Sign in</h3>
                    <div style={{marginBottom: "20px"}}>There is no change upon registration</div>
                    <button onClick={signInWithGoogle} className={styles.gglbtn} style={{marginBottom: "20px"}}><img src={googleIcon} alt="icon" /> Sign in with Google</button> 
                    <div>Don't have an account? <a className={styles.link} href="/signup">Sign up</a></div>
                    </>
                    :
                    <>
                    <h3>Sign up</h3>
                    <div style={{marginBottom: "20px"}}>There is no change upon registration</div> 
                    <button onClick={signUpWithGoogle} className={styles.gglbtn} style={{marginBottom: "20px"}}> <img src={googleIcon} alt="icon" /> Sign up with Google</button> 
                    <div>Already a member? <a className={styles.link} href="/signin">Sign in</a></div>
                    </>
                }
                
            </div>
            
        </div>
    </div>
  )
}

export default LoginSignup;