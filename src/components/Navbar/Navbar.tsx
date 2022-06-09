import React from 'react'
import styles from "./Navbar.module.scss"
import logo from "../../../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__left}>
                <Link href="/">
                    <a>
                        <div className={styles.navbar__logoContainer}>
                            <Image src={logo} alt="logo" className={styles.navbar__logo} layout="fill" objectFit='contain' />
                        </div>
                    </a>
                </Link>

            </div>

            <div className={styles.navbar__right}>
                <div className={styles.explore}>
                    <span className={styles.explore__text}>Explore</span>
                    <svg className={styles.explore__icon}>
                        <use href="/icons/symbol-defs.svg#icon-keyboard_arrow_down"></use>
                    </svg>
                </div>
                <Link href="/">
                    <a className={styles.navbar__text}>
                        Sign In
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.navbar__text}>
                        Sign Up
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.navbar__btnPrimary}>
                        <svg className={styles.upload__icon}>
                            <use href="/icons/symbol-defs.svg#icon-upload"></use>
                        </svg>
                        <span className={styles.upload__text}>Upload</span>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar