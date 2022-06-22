import React, { useEffect, useRef, useState } from 'react'
import styles from "./Navbar.module.scss"
import logo from "@public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import logo2 from "@public/images/4.jpeg"
import logo4 from "@public/images/4.jpeg"
import logo6 from "@public/images/6.jpeg"
import logo8 from "@public/images/8.jpg"


const Navbar = () => {
    const refExplore: any = useRef(null)
    const refUser: any = useRef(null)
    const refSearch: any = useRef(null)
    const [exploreOptions, setExploreOptions] = useState(false)
    const [userOptions, setUserOptions] = useState(false)
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (evt) => {
            if (refExplore.current && !refExplore.current.contains(evt.target)) {
                setExploreOptions(false)
            }
            if (refUser.current && !refUser.current.contains(evt.target)) {
                setUserOptions(false)
            }
            if (refSearch.current && !refSearch.current.contains(evt.target)) {
                setFocus(false)
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
            <div className={styles.navbar__middle} ref={refSearch}>
                <form className={styles.navbar__form}>
                    <input type="text" onFocus={() => (setFocus(true))} id="search-images" className={styles.navbar__input} placeholder="Search Images" />
                    <button className={styles.navbar__button}>
                        <svg className={styles.navbar__searchIcon}>
                            <use href="/icons/symbol-defs.svg#icon-search"></use>
                        </svg>
                    </button>
                </form>
                {focus && (
                    <div className={styles.navbar__recommendations} >
                        <h4 className={styles.navbar__recommendationsHeading}>Trending Searches</h4>
                        <ul className={styles.navbar__recommendationsList}>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/Harshs11">
                                    <a className={styles.navbar__recommendationsLinks} >
                                        <svg className={styles.navbar__recommendationsIcon}>
                                            <use href="/icons/symbol-defs.svg#icon-trending_up"></use>
                                        </svg>
                                        <span className={styles.navbar__recommendationsTexts}>india</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks}>
                                        <svg className={styles.navbar__recommendationsIcon}>
                                            <use href="/icons/symbol-defs.svg#icon-trending_up"></use>
                                        </svg>
                                        <span className={styles.navbar__recommendationsTexts}>Festivals</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks}>
                                        <svg className={styles.navbar__recommendationsIcon}>
                                            <use href="/icons/symbol-defs.svg#icon-trending_up"></use>
                                        </svg>
                                        <span className={styles.navbar__recommendationsTexts}>Violet</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <h4 className={styles.navbar__recommendationsHeading}>Trending Topics</h4>
                        <ul className={styles.navbar__recommendationsList}>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/Harshs11">
                                    <a className={styles.navbar__recommendationsLinks1} >
                                        <img src={logo2.src} alt="profile" className={styles.navbar__recommendationsImage} />
                                        <span className={styles.navbar__recommendationsTexts1}>india</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks1}>
                                        <img src={logo6.src} alt="profile" className={styles.navbar__recommendationsImage} />
                                        <span className={styles.navbar__recommendationsTexts1}>Historical</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks1}>
                                        <img src={logo4.src} alt="profile" className={styles.navbar__recommendationsImage} />
                                        <span className={styles.navbar__recommendationsTexts1}>Animals</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks1}>
                                        <img src={logo8.src} alt="profile" className={styles.navbar__recommendationsImage} />
                                        <span className={styles.navbar__recommendationsTexts1}>Streets</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <h4 className={styles.navbar__recommendationsHeading}>Trending Collections</h4>
                        <ul className={styles.navbar__recommendationsList}>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/Harshs11">
                                    <a className={styles.navbar__recommendationsLinks} >
                                        <span className={styles.navbar__recommendationsTexts}>Mute and pastel</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks}>
                                        <span className={styles.navbar__recommendationsTexts}>MockUps</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks}>
                                        <span className={styles.navbar__recommendationsTexts}>Holi</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks}>
                                        <span className={styles.navbar__recommendationsTexts}>Spring</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar__recommendationsItems}>
                                <Link href="/">
                                    <a className={styles.navbar__recommendationsLinks}>
                                        <span className={styles.navbar__recommendationsTexts}>Luxury</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={styles.navbar__right}>

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
                <div className={styles.navbar__user} ref={refUser} onClick={() => (setUserOptions(!userOptions))}>
                    <button className={styles.navbar__userButton} >
                        <svg className={styles.navbar__userIcon}>
                            <use href="/icons/symbol-defs.svg#icon-user-circle-o"></use>
                        </svg>
                    </button>
                    {userOptions && (<div className={styles.navbar__userOptions}>
                        <ul className={styles.navbar__userList}>
                            <Link href="/Harshs11">
                                <li className={styles.navbar__userItems}>
                                    <a className={styles.navbar__userLinks}>
                                        View Profile
                                    </a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className={styles.navbar__userItems}>
                                    <a className={styles.navbar__userLinks}>
                                        Account Settings
                                    </a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className={styles.navbar__userItems}>
                                    <a className={styles.navbar__userLinks}>
                                        Logout @Harshs11
                                    </a>
                                </li>
                            </Link>
                        </ul>
                    </div>)}
                </div>
                <div className={styles.explore} ref={refExplore} onClick={() => (setExploreOptions(!exploreOptions))}>
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