import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss'

export default function Footer() {

    const { t, i18n } = useTranslation();

    return (

        <footer>
            <ul>
                <li>
                    <div><i className="fas fa-phone-square footer-icons"></i></div>
                    <div className="footer-text">(+593) 294 3683</div>
                </li>
                <li>
                    <div><i className="fas fa-map-marker-alt footer-icons"></i></div>
                    <div className="footer-text">Avda calle 45/46 barrio amantes de sumpa, Santa Elena, Ecuador.</div>
                </li>
                <li>
                    <div><i className="fas fa-envelope footer-icons"></i></div>
                    <div className="footer-text">indusmarsa@hotmail.com</div>
                </li>
                <li>
                    <div><i className="fas fa-fax footer-icons"></i></div>
                    <div className="footer-text">+1 800 889 9898</div>
                </li>
                <li>
                    <div><a href="https://web.facebook.com/Industrias-Mar-Y-Sol-SA-165692880302017/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook footer-icons"></i></a></div>
                    <div className="footer-text">   {t("visitFacebook")}</div>
                </li>
                <li>
                    <div><i className="fas fa-clock footer-icons"></i></div>
                    <div className="footer-text">{t("schedule")}</div>
                </li>
            </ul>

            <hr />

            <p>
                &copy; 2021 Industrias Mar y sol, Ecuador
            </p>

        </footer>

    )

}