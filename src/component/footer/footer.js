import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss'

export default function Footer() {

    const { t, i18n } = useTranslation();

    return (

        <footer>
            <ul>
                <li><i class="fas fa-phone-square icons"></i>(+593) 294 3683</li>
                <li><i class="fas fa-map-marker-alt icons"></i>Avda calle 45/46 barrio amantes de sumpa, Santa Elena, Ecuador.</li>
                <li><i class="fas fa-envelope icons"></i>indusmarsa@hotmail.com</li>
                <li><i class="fas fa-fax icons"></i>+1 800 889 9898</li>
                <li><a href="https://web.facebook.com/Industrias-Mar-Y-Sol-SA-165692880302017/" target="_blank"><i class="fab fa-facebook icons"></i></a>{t("visitFacebook")}</li>
                <li><i class="fas fa-clock icons"></i>{t("schedule")}</li>
            </ul>

            <hr />

            <p>
                &copy; 2021 Industrias Mar y sol, Ecuador
            </p>

        </footer>

    )

}