
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URLS } from "../../data/url";
import { getUrl } from "../../utils/function";

let t: string = localStorage.getItem("dark") || "";

export default function HomeFooter({ theme }: any) {
  const [state, setState] = useState({ mounted: false });

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }));
    return () => {
      setState((state) => ({ ...state, mounted: false }));
    };
  }, []);

  if (!state.mounted) return <></>;

  t = theme;

  return (
    <footer className="footer">
      <div className="logo">
        Nour<span>It</span>
      </div>
      <nav>
        <ul>{FOOTER.menu1item.map(footerItem1)}</ul>
        <ul>{FOOTER.menu2item.map(footerItem2)}</ul>
      </nav>
      <span className="copy-right">@krish4alex. All rights reserved</span>
    </footer>
  );
}

function footerItem1(
  item: any,
  index: number,
  array: String[]
): React.ReactNode {
  return (
    <li className="h2" key={index.toString()}>
      <Link to={getUrl(item.link)}>{item.val}</Link>
    </li>
  );
}

function footerItem2(
  item: any,
  index: number,
  array: String[]
): React.ReactNode {
  let img = item.img;
  if (t == "dark" && item.dark) img = item.dark;
  return (
    <li key={index.toString()}>
      <Link to={item.link}>
        {/* <NourIcon id={item.img} path={"/img/social"} width={32}/> */}
        <img src={`/img/social/${img}`} alt={img} height={32} />
      </Link>
    </li>
  );
}

const links: Object[] = [
  {
    img: "Facebook.svg",
    link: "https://www.facebook.com/nourxxIt/",
  },
  {
    img: "Twitter.svg",
    link: "https://twitter.com/nour_it_",
  },
  {
    img: "LinkedIn.svg",
    link: "https://www.linkedin.com/in/nour-it/",
  },
  {
    img: "Instagram.svg",
    link: "https://www.instagram.com/nour.it.ng/",
  },
  {
    img: "Github.svg",
    dark: "dark.Github.svg",
    link: "https://github.com/nour-it/",
  },
];

const content: any = {
  en: {
    menu1item: [
      {
        val: "About",
        link: "/#about",
      },
      {
        val: "Projects",
        link: URLS.project,
      },
      {
        val: "Services",
        link: URLS.support,
      },
    ],
    menu2item: links,
  },
  fr: {
    menu1item: [
      {
        val: "A propos",
        link: "/#about",
      },
      {
        val: "Projets",
        link: URLS.project,
      },
      {
        val: "Services",
        link: URLS.support,
      },
    ],
    menu2item: links,
  },
};

const userPreferredLanguage = navigator.language || "en-EN";
const FOOTER: any = content[userPreferredLanguage.split("-")[0]] || content.en;
