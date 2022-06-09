import Header from "@components/Header/Header.jsx";
import Navbar from "@components/Navbar/Navbar";
import React from "react";
import styles from "@styles/home.module.scss"
import Link from "next/link";
import profile from "../public/images/profile.png"
import logo from "../public/images/1.jpg"
import logo2 from "../public/images/2.jpg"
import logo3 from "../public/images/3.jpg"
import logo4 from "../public/images/4.jpg"
import logo5 from "../public/images/5.jpg"
import logo6 from "../public/images/6.jpg"
import logo7 from "../public/images/7.jpg"
import logo8 from "../public/images/8.jpg"
import logo9 from "../public/images/9.jpg"
import logo10 from "../public/images/10.jpg"



const Home: React.FC = () => {
  const handleClick = (evt: any) => {
    evt.preventDefault()
  }

  return (
    <div>
      <Navbar />
      <Header />
      <main className={styles.main}>
        <section className={styles.background}>
          <div className={styles.background__elements}>
            <p className={styles.background__desc}>Free & high quality images that you can use for any project. <br /> Powered by creators from anywhere</p>
            <form className={styles.background__form}>
              <input type="text" id="search-images" className={styles.background__input} placeholder="Search Images" />
              <button className={styles.background__button}>
                <svg className={styles.background__searchIcon}>
                  <use href="/icons/symbol-defs.svg#icon-search"></use>
                </svg>
              </button>
            </form>
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

          <Link href="/photos/6"><a>
            <div className={styles.gallery__container}>
              <img src={logo3.src} alt="" className={styles.gallery__image} />
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

        </section>

      </main>
    </div>
  );
};

export default Home;
