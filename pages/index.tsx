import Header from "@components/Header/Header.jsx";
import Navbar from "@components/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import styles from "@styles/home.module.scss"
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


const Home: React.FC = () => {

  const inputRef: any = useRef(null)

  const [focus, setFocus] = useState(false)

  const handleClick = (evt: any) => {
    evt.preventDefault()
  }

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (inputRef.current && !inputRef.current.contains(evt.target)) {
        setFocus(false)
      }

    })
  }, [])


  return (
    <div>
      <Navbar />
      <Header />
      <main className={styles.main}>
        <section className={styles.background}>
          <div className={styles.background__elements}>
            <p className={styles.background__desc}>Free & high quality images that you can use for any project. <br /> Powered by creators from anywhere</p>
            <div className={styles.background__search} ref={inputRef}>
              <form className={styles.background__form}>
                <input type="text" id="search-images" onFocus={() => (setFocus(true))} className={styles.background__input} placeholder="Search Images" />
                <button className={styles.background__button}>
                  <svg className={styles.background__searchIcon}>
                    <use href="/icons/symbol-defs.svg#icon-search"></use>
                  </svg>
                </button>
              </form>
              {focus && (
                <div className={styles.background__recommendations} >
                  <h4 className={styles.background__recommendationsHeading}>Trending Searches</h4>
                  <ul className={styles.background__recommendationsList}>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/Harshs11">
                        <a className={styles.background__recommendationsLinks} >
                          <svg className={styles.background__recommendationsIcon}>
                            <use href="/icons/symbol-defs.svg#icon-trending_up"></use>
                          </svg>
                          <span className={styles.background__recommendationsTexts}>india</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks}>
                          <svg className={styles.background__recommendationsIcon}>
                            <use href="/icons/symbol-defs.svg#icon-trending_up"></use>
                          </svg>
                          <span className={styles.background__recommendationsTexts}>Festivals</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks}>
                          <svg className={styles.background__recommendationsIcon}>
                            <use href="/icons/symbol-defs.svg#icon-trending_up"></use>
                          </svg>
                          <span className={styles.background__recommendationsTexts}>Violet</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <h4 className={styles.background__recommendationsHeading}>Trending Topics</h4>
                  <ul className={styles.background__recommendationsList}>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/Harshs11">
                        <a className={styles.background__recommendationsLinks1} >
                          <img src={logo2.src} alt="profile" className={styles.background__recommendationsImage} />
                          <span className={styles.background__recommendationsTexts1}>india</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks1}>
                          <img src={logo6.src} alt="profile" className={styles.background__recommendationsImage} />
                          <span className={styles.background__recommendationsTexts1}>Historical</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks1}>
                          <img src={logo4.src} alt="profile" className={styles.background__recommendationsImage} />
                          <span className={styles.background__recommendationsTexts1}>Animals</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks1}>
                          <img src={logo8.src} alt="profile" className={styles.background__recommendationsImage} />
                          <span className={styles.background__recommendationsTexts1}>Streets</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <h4 className={styles.background__recommendationsHeading}>Trending Collections</h4>
                  <ul className={styles.background__recommendationsList}>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/Harshs11">
                        <a className={styles.background__recommendationsLinks} >
                          <span className={styles.background__recommendationsTexts}>Mute and pastel</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks}>
                          <span className={styles.background__recommendationsTexts}>MockUps</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks}>
                          <span className={styles.background__recommendationsTexts}>Holi</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks}>
                          <span className={styles.background__recommendationsTexts}>Spring</span>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.background__recommendationsItems}>
                      <Link href="/">
                        <a className={styles.background__recommendationsLinks}>
                          <span className={styles.background__recommendationsTexts}>Luxury</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className={styles.background__trending}>Trending Searches:&nbsp;
              <span >
                <Link href="/"><a className={styles.background__trendingTopics}>India </a></Link>,&nbsp;
                <Link href="/"><a className={styles.background__trendingTopics}>Flowers </a></Link>
              </span>
            </p>
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
  );
};

export default Home;
