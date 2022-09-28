import React from "react";
import { useTranslation } from "react-i18next";
import Categories from "../component/categories";
import "./home.css";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <section id="home">
      <div className="page">
        <Categories />
      </div>
      <div className="team">
        <div className="team-text">{t("our-team")}</div>
      </div>
      <div className="environment ">
        <div className="team-environment">{t("nature")}</div>
      </div>
    </section>
  );
}
