import React from 'react'
import { useTranslation } from 'react-i18next';
import './about.css'

export default function About() {

    const { t, i18n } = useTranslation();

    return (
        <section className="page">

            <div className="boxes">

                <div className="box">
                    <div className="box-icon">
                        <i className="fas fa-sitemap icons-items"></i>
                    </div>
                    <h2>{t("mission")}</h2>
                    <div className="row">
                        <p>{t("mission-p1")}</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-icon">
                        <i className="fas fa-tasks mx-auto icons-items"></i>
                    </div>
                    <h2>{t("vision")}</h2>
                    <div className="row">
                        <p>{t("vision-p1")}</p>
                        <p>{t("vision-p2")}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
