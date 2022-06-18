import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { NavLink } from "src/helpers/NavLink";

const Header = () => {
  const scrl = useRef(null);
  // useEffect(() => {
  //   if () {
  //     first
  //   }
  // }, [])
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const categoryList = [
    { name: "india", url: "/c/india" },
    { name: "nature", url: "/c/nature" },
    { name: "travel", url: "/c/travel" },
    { name: "animal", url: "/c/animal" },
    { name: "wallpaper", url: "/c/wallpaper" },
    { name: "Art & Culture", url: "/c/art-culture" },
    { name: "city", url: "/c/city" },
    { name: "flower", url: "/c/flower" },
    { name: "anime", url: "/c/anime" },
    { name: "people", url: "/c/people" },
    { name: "fashion", url: "/c/fashion" },
    { name: "film", url: "/c/film" },
    { name: "experimental", url: "/c/experimental" },
    { name: "3D Renders", url: "/c/3d-renders" },
    { name: "Spirituality", url: "/c/spirituality" },
    { name: "Textures & Patterns", url: "/c/textures-patterns" },
    { name: "Business & Work", url: "/c/business-work" },
    { name: "History", url: "/c/history" },
    { name: "Street Photography", url: "/c/street-photography" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <h3 className={styles.category__tertiaryHeading}>categories</h3>
      </div>

      <div className={styles.header__right}>
        {scrollX > 0 ? (
          <button
            onClick={() => slide(-100)}
            className={styles.category__button}
          >
            <svg className={styles.category__icon}>
              <use href="/icons/symbol-defs.svg#icon-keyboard_arrow_left"></use>
            </svg>
          </button>
        ) : (
          <div></div>
        )}

        <ul className={styles.category__list} onScroll={scrollCheck} ref={scrl}>
          {categoryList.map((category, i) => (
            <li className={styles.category__items} key={i}>
              <NavLink
                href={category.url}
                activeClassName={styles.category__isActive}
              >
                <a className={styles.category__link}>
                  <span className={styles.category__text}>{category.name}</span>
                </a>
              </NavLink>
            </li>
          ))}
        </ul>
        {!scrolEnd && (
          <button
            onClick={() => slide(+100)}
            className={styles.category__button}
          >
            <svg className={styles.category__icon}>
              <use href="/icons/symbol-defs.svg#icon-navigate_next"></use>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
