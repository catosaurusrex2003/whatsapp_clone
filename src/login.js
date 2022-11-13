import { Button } from '@mui/material'
import React from 'react'
import whatsapp_logo from "./assets/whatsapp_logo.svg"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useStateValue } from './Stateprovider';
import { actionTypes } from './Reducer';

function Login() {
    const [{}, dispatch] = useStateValue()



    function signIn() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                dispatch({
                    type : actionTypes.SET_USER,
                    user : result.user
                })
            }).catch((error) => {
                alert(error.message)
            });
    }

    return (
        <div className='login_master_div'>
            <div className="login_container" >
                <img src={whatsapp_logo} alt = {"no image found"} />
                <div className="login_text">
                    <h1>Sign in to Whatsdown</h1>
                    <span>name suggested by shantanu sakpal</span>

                </div>
                <Button type="submit" onClick={signIn} >
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login