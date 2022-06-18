import React, { useState } from 'react'
import styles from '@styles/login.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/images/logo.png"
import Google from "@public/icons/google.svg"


const login = () => {
    const [inputType, setInputType] = useState("password")

    const handleShowHide = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        inputType === "password" ? setInputType("text") : setInputType("password")
        console.log(inputType)
    }

    return (
        <div className={styles.main}>
            <main className={styles.login}>
                <section className={styles.login__left}>
                    <Link href="/">
                        <a>
                            <div className={styles.login__logoContainer}>
                                <Image src={logo} alt="logo" className={styles.login__logo} layout="fill" objectFit='contain' />
                            </div>
                        </a>
                    </Link>
                    <h3 className={styles.login__headingTertiary}>Sign in to your account</h3>
                    <Link href="/">
                        <a className={styles.login__button}>
                            <div className={styles.login__googleIcon}>
                                <Google />
                            </div>
                            <span className={styles.login__buttonText}>Continue with Google</span>
                        </a>
                    </Link>
                    <span className={styles.login__textOr}>or</span>
                    <form autoComplete='off'>
                        <div className={styles.login__username}>
                            <input required={true} minLength={5} maxLength={30} className={styles.login__input} type="text" placeholder='username' id="username" />
                            <label className={styles.login__label} htmlFor="username" >username</label>
                        </div>
                        <div className={styles.login__password}>
                            <input minLength={5} maxLength={40} required={true} className={styles.login__input} type={inputType} placeholder='password' id="password" />
                            <label className={styles.login__label} htmlFor="password">password</label>
                            <button type='button' onClick={handleShowHide} className={styles.login__passwordButton}>
                                <svg className={styles.login__passwordButtonIcon}>
                                    <use href={`/icons/symbol-defs.svg#icon-${inputType === "password" ? "visibility_off" : "remove_red_eye"}`}></use>
                                </svg>
                            </button>
                        </div>
                        <Link href="/">
                            <a className={styles.login__linkText} >Forgot Password?</a>
                        </Link>
                        <button className={styles.login__buttonc} type="submit">Sign In</button>
                    </form>
                    <span className={styles.login__text}>
                        Don't have an account
                        <Link href="/join">
                            <a className={styles.login__textLink} >Sign up</a>
                        </Link>
                    </span>

                </section>
                <section className={styles.login__right}>
                    <div className={styles.login__iconContainer}>
                        <Link href="/">
                            <a >
                                <svg className={styles.login__closeIcon}>
                                    <use href="/icons/symbol-defs.svg#icon-cross"></use>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default login