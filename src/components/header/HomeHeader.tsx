import React, { useEffect, useRef, useState } from "react";
import { getContent, getUrl } from "../../utils/function";
import { Link } from "react-router-dom";
import { URLS } from "../../utils/url";
import NourIcon from "../core/NourIcon";
import anime from 'animejs/lib/anime.es.js';

export default function HomeHeader({ onThemeChange, theme }: any) {
  const [state, setState] = useState({ mounted: false });

  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  function onScrollPage(e: Event): void {
    let header: HTMLElement = document.querySelector("header") as HTMLElement;
    header?.classList.remove("fade-out");
    if (window.scrollY > 200) {
      header?.classList.add("scrollY");
    } else if (window.scrollY < 108) {
      header?.classList.remove("scrollY");
    }
  }

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }));
    window.addEventListener("scroll", onScrollPage);
    const $links = navRef.current?.querySelectorAll("li") ?? [];
    $links.forEach(($link, index) => {
      anime({ targets: $link, right: 0, opacity: 1, duration: 300, delay: 100 * index, easing: 'easeInOutQuad'});
      $link.addEventListener("click", (e: any) => {
        $links.forEach(($l) => $l.classList.remove("active"));
        e.currentTarget.classList.add("active");
      });
    })
    return () => setState((state) => ({ ...state, mounted: false }));

  }, []);


  function onActiveNav(e: React.MouseEvent) {
    if (window.innerWidth < 745) {
      if (headerRef.current?.classList.contains("active")) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      headerRef.current?.classList.toggle("blur");
      navRef.current?.classList.toggle("active");
      navRef.current?.classList.toggle("blur");
    }
  }

  return (
    <header className="header fade-out" ref={headerRef}>
      <div>
        <Link to={getUrl(URLS.home)} className="logo">
          Nour<span>It</span>
        </Link>
        <span onClick={onThemeChange}>
          <NourIcon id={theme !== "" ? "sun" : "moon"} width={24} />
        </span>
      </div>
      <nav onClick={onActiveNav} ref={navRef}>
        <ul>{Object.keys(MENU_ITEMS).map(menuItem)}</ul>
      </nav>
      <div className="burger__wrapper" onClick={onActiveNav}>
        <div className="burger"></div>
      </div>
    </header>
  );
}

function menuItem(value: any, index: number, array: any[]): React.ReactNode {
  const isActive = window.location.hash === `#${value}`;
 
  return (
    <li className={`text-black-1 ${isActive ? "active" : ""}`} key={index.toString()}>
      <a href={`#${value.toLocaleLowerCase()}`}>
        {MENU_ITEMS[value].replace(
          MENU_ITEMS[value].charAt(0),
          MENU_ITEMS[value].charAt(0).toLocaleUpperCase()
        )}
      </a>
    </li>
  );
}

const content: any = {
  en: {
    home: "home",
    about: "about",
    service: "service",
    skills: "Skills",
    blog: "Blog",
    contact: "Contact",
  },
  fr: {
    home: "acceuil",
    about: "à propos",
    service: "service",
    skills: "compétences",
    blog: "Blog",
    contact: "Contact",
  },
};

const MENU_ITEMS: any = getContent(content);
