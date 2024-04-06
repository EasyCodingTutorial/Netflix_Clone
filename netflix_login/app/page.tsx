"use client"
import React, { useCallback, useState } from 'react'

import styles from './page.module.css'

// For Components
import Input from '@/app/Components/Input/Input'

const AuthPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [variant, setvariant] = useState('login')


  const Toggle_Variant = useCallback(() => {
    setvariant((Current_Variant) => Current_Variant === 'login' ? 'register' : 'login')
  }, [])

  // For Login
  const Login = useCallback(async () => {
    console.log("Login  Button Clicked")
  }, [])

  // For Register
  const Register = useCallback(async () => {
    console.log("Register  Button Clicked")
  }, [])



  return (
    <>
      <section className={styles.LoginParent}>

        <div className={styles.LoginParent_Row}>
          {/* <h6>Sign In</h6> */}
          <h6>
            {variant === 'login' ? 'Sign In' : 'Register'}
          </h6>

          {/* For Input Fields */}

          {
            variant === 'register' && (
              <Input
                id={"name"}
                label='Your Username'
                type='text'
                value={name}
                onchange={(e: any) => setName(e.target.value)}
              />
            )
          }
          <Input
            id={"email"}
            label='Your Email'
            type='email'
            value={email}
            onchange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            id={"password"}
            label='Your Password'
            type='password'
            value={password}
            onchange={(e: any) => setPassword(e.target.value)}
          />

          <button onClick={variant === 'login' ? Login : Register} className={styles.LoginBtn}>
            {variant === 'login' ? 'Login' : 'Sign Up'}
          </button>

          <p className={styles.CustomP}>
            {
              variant == 'login' ? 'First Time Using Netflix?' : 'Already  Have An Account ?'
            }
            <span onClick={Toggle_Variant}>
              {variant === 'login' ? 'Sign Up' : 'Login'}
            </span>
          </p>



        </div>


      </section>
    </>
  )
}

export default AuthPage