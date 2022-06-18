import React, { useEffect, useRef, useState } from 'react'
import styles from "./Navbar.module.scss"
import logo from "../../../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
    const ref: any = useRef(null)
    const [exploreOptions, setExploreOptions] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                setExploreOptions(false)
            }
        })
    }, [])


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
            <div className={styles.navbar__middle}>
                <form className={styles.navbar__form}>
                    <input type="text" id="search-images" className={styles.navbar__input} placeholder="Search Images" />
                    <button className={styles.navbar__button}>
                        <svg className={styles.navbar__searchIcon}>
                            <use href="/icons/symbol-defs.svg#icon-search"></use>
                        </svg>
                    </button>
                </form>
            </div>

            <div className={styles.navbar__right}>
                <div className={styles.explore} ref={ref} onClick={() => (setExploreOptions(!exploreOptions))}>
                    <button className={styles.explore__text} >Explore</button>
                    <svg className={styles.explore__icon}>
                        <use href="/icons/symbol-defs.svg#icon-keyboard_arrow_down"></use>
                    </svg>
                    {exploreOptions && (
                        <div className={styles.explore__options}>
                            <div className={styles.explore__optionsTop}>
                                <div>
                                    <h4 className={styles.explore__headingQuarterly}>Company</h4>
                                    <ul className={styles.explore__list}>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    About
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    History
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    Join the team
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    Contact us
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className={styles.explore__headingQuarterly}>Community</h4>
                                    <ul className={styles.explore__list}>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    Become a Contributor
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    Topics
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    Collections
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={styles.explore__items}>
                                            <Link href="/">
                                                <a className={styles.explore__links}>
                                                    Pico Awards
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.explore__optionsBottom}>
                                <div className={styles.explore__policies}>
                                    <Link href="/">
                                        <a className={styles.explore__links}>
                                            License
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className={styles.explore__links}>
                                            Privacy Policy
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className={styles.explore__links}>
                                            Terms
                                        </a>
                                    </Link>
                                </div>
                                <div >
                                    <Link href="">
                                        <a>
                                            <svg className={styles.profile__iconFacebook}>
                                                <use href="/icons/symbol-defs.svg#icon-facebook"></use>
                                            </svg>
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <svg className={styles.profile__iconInstagram}>
                                                <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                                            </svg>
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <svg className={styles.profile__iconEmail}>
                                                <use href="/icons/symbol-defs.svg#icon-email"></use>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/login">
                    <a className={styles.navbar__text}>
                        Sign In
                    </a>
                </Link>
                <Link href="/join">
                    <a className={styles.navbar__text}>
                        Sign Up
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.navbar__btnPrimary}>
                        <svg className={styles.upload__icon}>
                            <use href="/icons/symbol-defs.svg#icon-upload"></use>
                        </svg>
                        <span className={styles.upload__text}>Upload Image</span>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar