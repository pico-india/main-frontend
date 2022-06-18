import React, { useState } from 'react'
import styles from '@styles/join.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/images/logo.png"
import Google from "@public/icons/google.svg"


const join = () => {
    const [inputType, setInputType] = useState("password")

    const handleShowHide = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        inputType === "password" ? setInputType("text") : setInputType("password")
        console.log(inputType)
    }

    return (
        <div className={styles.main}>
            <main className={styles.join}>
                <section className={styles.join__left}>

                </section>

                <section className={styles.join__right}>
                    <div className={styles.join__iconContainer}>
                        <Link href="/">
                            <a>
                                <div className={styles.join__logoContainer}>
                                    <Image src={logo} alt="logo" className={styles.join__logo} layout="fill" objectFit='contain' />
                                </div>
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                <svg className={styles.join__closeIcon}>
                                    <use href="/icons/symbol-defs.svg#icon-cross"></use>
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <h3 className={styles.join__headingTertiary}>Sign Up to your account</h3>
                    <Link href="/">
                        <a className={styles.join__button}>
                            <div className={styles.join__googleIcon}>
                                <Google />
                            </div>
                            <span className={styles.join__buttonText}>Continue with Google</span>
                        </a>
                    </Link>
                    <span className={styles.join__textOr}>or</span>
                    <form autoComplete='off'>
                        <div className={styles.join__name}>
                            <div className={styles.join__nameFirst}>
                                <input required={true} minLength={5} maxLength={30} className={styles.join__input} type="text" placeholder='first name' id="first-name" />
                                <label className={styles.join__label} htmlFor="first-name" >first name</label>
                            </div>
                            <div className={styles.join__nameLast}>
                                <input required={true} minLength={5} maxLength={30} className={styles.join__input} type="text" placeholder='last name' id="last-name" />
                                <label className={styles.join__label} htmlFor="last-name" >last name</label>
                            </div>
                        </div>
                        <div className={styles.join__email}>
                            <input required={true} autoComplete="off" minLength={5} maxLength={30} className={styles.join__input} type="email" placeholder='email' id="email" />
                            <label className={styles.join__label} htmlFor="email" >email</label>
                        </div>
                        <div className={styles.join__username}>
                            <input required={true} minLength={5} maxLength={30} className={styles.join__input} type="text" placeholder='username' id="username" />
                            <label className={styles.join__label} htmlFor="username" >username</label>
                        </div>
                        <div className={styles.join__password}>
                            <input minLength={5} maxLength={40} required={true} className={styles.join__input} type={inputType} placeholder='password' id="password" />
                            <label className={styles.join__label} htmlFor="password">password</label>
                            <button type='button' onClick={handleShowHide} className={styles.join__passwordButton}>
                                <svg className={styles.join__passwordButtonIcon}>
                                    <use href={`/icons/symbol-defs.svg#icon-${inputType === "password" ? "visibility_off" : "remove_red_eye"}`}></use>
                                </svg>
                            </button>
                        </div>
                        <button className={styles.join__buttonc} type="submit">Sign In</button>
                    </form>
                    <span className={styles.join__text}>
                        Don't have an account
                        <Link href="/join">
                            <a className={styles.join__textLink} >Sign in</a>
                        </Link>
                    </span>

                </section>

            </main>
        </div>
    )
}

export default join