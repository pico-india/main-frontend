import Navbar from '@components/Navbar/Navbar'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "@styles/profile.module.scss"
import Link from "next/link";
import profile from "../public/images/profile.png"
import logo from "../public/images/1.jpg"
import logo2 from "../public/images/2.jpeg"
import logo4 from "../public/images/4.jpeg"
import logo5 from "../public/images/5.jpeg"
import logo6 from "../public/images/6.jpeg"
import logo7 from "../public/images/7.jpg"
import logo8 from "../public/images/8.jpg"
import logo9 from "../public/images/9.jpg"
import logo10 from "../public/images/10.jpeg"
import logo11 from "../public/images/11.jpeg"

const Profile = () => {
    const router = useRouter()

    const handleClick = (evt: any) => {
        evt.preventDefault()
    }
    return (
        <div>
            < Navbar />
            <main className={styles.main}>

                <section className={styles.profile}>
                    <div className={styles.profile__image}>
                        <img src={profile.src} alt="profile" className={styles.profile__profileImage} />
                    </div>
                    <div className={styles.profile__info}>
                        <div className={styles.profile__top}>
                            <h3 >
                                <span className={styles.profile__headingTertiary}>{router.query.profile}</span>
                                <span className={styles.profile__headingTertiarySpan}>80 Followers</span>
                            </h3>
                            <div>
                                <Link href="">
                                    <a className={styles.profile__button}>Follow</a>
                                </Link>
                                <Link href="">
                                    <a className={styles.profile__button}>Donate</a>
                                </Link>
                            </div>
                            <div>
                                <button className={styles.profile__iconButton}>
                                    <svg className={styles.profile__iconOption}>
                                        <use href="/icons/symbol-defs.svg#icon-dots-three-vertical"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className={styles.profile__body}>
                            <p className={styles.profile__description}>Hello! Welcome to my profile. I Hope you Enjoy by Checking out my work.Donations through The Paypal Link Below are very much Appreciated</p>
                        </div>
                        <div className={styles.profile__bottom}>
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
                </section>

                <section className={styles.gallery}>
                    <Link href="/photos/1"><a >
                        <div className={styles.gallery__container}>
                            <img src={logo4.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/2"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo7.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/3"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo8.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/4"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo9.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/5"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/7"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo5.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/8"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo6.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/9"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo10.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload} >
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/10"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo2.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>

                    <Link href="/photos/11"><a>
                        <div className={styles.gallery__container}>
                            <img src={logo11.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconHeart}>
                                            <use href="/icons/symbol-defs.svg#icon-favorite_outline"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.gallery__imageBottom}>
                                    <div className={styles.gallery__profile}>
                                        <img src={profile.src} alt="profile" className={styles.gallery__profileImage} />
                                        <span className={styles.gallery__profileInfo}>Harshs11</span>
                                    </div>
                                    <button className={styles.gallery__button} onClick={handleClick}>
                                        <svg className={styles.gallery__iconDownload}>
                                            <use href="/icons/symbol-defs.svg#icon-arrow-down2"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a></Link>
                </section>
            </main>
        </div>
    )
}

export default Profile