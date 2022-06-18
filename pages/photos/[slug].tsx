import { useRouter } from 'next/router'
import React from 'react'
import styles from "@styles/photoSlug.module.scss"
import profile from "../../public/images/profile.png"
import logo1 from "../../public/images/1.jpg"
import logo7 from "../../public/images/7.jpg"
import Link from 'next/link'
import Image from 'next/image'


const PhotoDetail = () => {
    const router = useRouter()
    console.log(router.query.slug)
    return (
        <main className={styles.main}>
            <section className={styles.detail}>
                <div className={styles.detail__header}>

                    <div className={styles.detail__profile}>
                        <img src={profile.src} alt="profile" className={styles.detail__profileImage} />
                        <span className={styles.detail__profileInfo}>Harshs11</span>
                    </div>
                    <div className={styles.detail__helpers}>
                        <Link href="">
                            <a className={styles.detail__button}>Follow</a>
                        </Link>
                        <Link href="">
                            <a className={styles.detail__button}>Donate</a>
                        </Link>
                    </div>
                    <div></div>
                    <div className={styles.detail__image}>
                        <button className={styles.detail__button}>
                            <svg className={styles.detail__heartIcon}>
                                <use href="/icons/symbol-defs.svg#icon-favorite"></use>
                            </svg>
                            <span className={styles.detail__buttonText}>12 Likes</span>
                        </button>
                        <button className={styles.detail__buttonc}>
                            <svg className={styles.detail__downloadIcon}>
                                <use href="/icons/symbol-defs.svg#icon-download"></use>
                            </svg>
                            <span className={styles.detail__buttoncText}>Free Download</span>
                        </button>
                        <Link href="/">
                            <a className={styles.detail__closeButton}>
                                <svg className={styles.detail__closeIcon}>
                                    <use href="/icons/symbol-defs.svg#icon-cross"></use>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.detail__body}>
                    <div className={styles.detail__imageContainer}>
                        {/* <Image src={logo1} alt="" layout='fill' objectFit='contain' /> */}
                        <Image src={logo7} alt="" layout='fill' objectFit='contain' />
                    </div>
                </div>
                <div className={styles.detail__description}>
                    <p className={styles.detail__licence}>
                        <svg className={styles.detail__licenceIcon}>
                            <use href="/icons/symbol-defs.svg#icon-check_circle_outline"></use>
                        </svg>
                        <span className={styles.detail__licenceText}>Free to use </span>
                    </p>
                    <div className={styles.detail__published}>
                        <svg className={styles.detail__publishedIcon}>
                            <use href="/icons/symbol-defs.svg#icon-calendar-check-o"></use>
                        </svg>
                        <span className={styles.detail__publishedText}>Published on 10th June 2022</span>
                    </div>
                    <div></div>
                    <div className={styles.detail__descriptionMore}>
                        <Link href="">
                            <a className={styles.detail__button}>
                                <svg className={styles.detail__infoIcon}>
                                    <use href="/icons/symbol-defs.svg#icon-info"></use>
                                </svg>
                                <span className={styles.detail__infoText}>Info</span>
                            </a>
                        </Link>
                        <button className={styles.detail__button}>
                            <svg className={styles.detail__shareIcon}>
                                <use href="/icons/symbol-defs.svg#icon-share"></use>
                            </svg>
                            <span className={styles.detail__buttoncText}>Share</span>
                        </button>
                    </div>
                </div>
                <p className={styles.detail__tag}>#mumbai #street #photography</p>
            </section>
        </main>
    )
}

export default PhotoDetail