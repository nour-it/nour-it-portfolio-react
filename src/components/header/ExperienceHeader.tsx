
import React from "react";
import NourIcon from "../core/NourIcon";
import { Link } from "react-router-dom";
import { URLS } from "../../data/url";
import { getContent, getUrl } from "../../utils/function";

export default function ExperienceHeader() {
  return (
    <header className="header">
      <Link to={getUrl(URLS.home)} className="center">
        <NourIcon
          id={window.history.state?.idx === 0 ? "home" : "back"}
          width={window.history.state?.idx !== 0 ? 18 : 24}
        />
        {window.history.state?.idx !== 0 && HEADER.back}
      </Link>
      <Link to={getUrl(URLS.home)} className="logo">
        Nour<span>It</span>
      </Link>
    </header>
  );
}

const content: any = {
  en: {
    back: "Go back",
    right: "All rights reserved",
  },
  fr: {
    back: "Retour",
    right: "Tout droit reservé",
  },
};

const HEADER: any = getContent(content);
