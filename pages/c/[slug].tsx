import Header from '@components/Header/Header'
import Navbar from '@components/Navbar/Navbar'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "@styles/cSlug.module.scss"
import Link from "next/link";
import profile from "../../public/images/profile.png"
import logo from "../../public/images/1.jpg"
import logo2 from "../../public/images/2.jpeg"
import logo4 from "../../public/images/4.jpeg"
import logo5 from "../../public/images/5.jpeg"
import logo6 from "../../public/images/6.jpeg"
import logo7 from "../../public/images/7.jpg"
import logo8 from "../../public/images/8.jpg"
import logo9 from "../../public/images/9.jpg"
import logo10 from "../../public/images/10.jpeg"

const CategoryDetail = () => {
    const router = useRouter()
    return (
        <div>
            <Navbar />
            <Header />
            <main className={styles.category}>
                <h1 className={styles.category__headingPrimary}>
                    {router.query.slug}
                </h1>
                <section className={styles.gallery}>
                    <Link href="/photos/1"><a >
                        <div className={styles.gallery__container}>
                            <img src={logo4.src} alt="" className={styles.gallery__image} />
                            <div className={styles.gallery__imageHover}>
                                <div className={styles.gallery__imageTop}>
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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
                                    <button className={styles.gallery__button} onClick={(evt) => (evt.preventDefault())}>
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

export default CategoryDetail