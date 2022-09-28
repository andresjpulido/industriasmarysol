import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';
import './nav.css'
import icon from '../../assets/images/menu-icon.png'
import icon_closed from '../../assets/images/menu-icon-close.png'
import { useHistory } from "react-router-dom";

export default function Nav() {
   
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [page, setpage] = useState("home");
    const [lng, setlng] = useState("es");
    
    let history = useHistory()

    function updateIsMenuOpen(){
        setisMenuOpen(!isMenuOpen)
    }

    function updatePage(page){
        setpage(page);
        setisMenuOpen(false)
        history.push(page);
    }

    function UpdateLanguage(newlng){
        i18n.changeLanguage(newlng);
        setlng(newlng)
    }

    return (
        <nav className="dropdown">
            <div className="menu-mobile">
                <div className="menu-mobile-title">Industrias Mar y Sol</div>
                <button className="menu-mobile-icon" onClick={updateIsMenuOpen}>
                    <img src={isMenuOpen ? icon_closed : icon} width="25px" alt="Menu" />
                </button>
            </div>

            <ul className={isMenuOpen ? "dropdown-child active" : "dropdown-child"}>
                <li className={page === 'home' ? "active-item" : ""} onClick={()=>updatePage("home")}>
                    <span>{t("home")}</span>
                </li>
                <li className={page === 'products' ? "active-item" : ""} onClick={()=>updatePage("products")}>
                    {t("products")}
                </li>
                <li className={page === 'about' ? "active-item" : ""} onClick={()=>updatePage("about")}>
                    {t("about")}
                </li>
                <li className={page === 'contact' ? "active-item" : ""} onClick={()=>updatePage("contact")}>
                    {t("contact")}
                </li>
            </ul>
            <ul>
                <li>
                    <div className={lng === 'es' ? "px-1 btn-language-active" : "btn-language px-1"} 
                    onClick={()=>UpdateLanguage('es')}>ES</div>
                </li>
                <li>
                    <div className={lng === 'en' ? "px-1 btn-language-active" : "btn-language px-1"} 
                    onClick={()=>UpdateLanguage('en')}>EN</div>
                </li>
            </ul>
        </nav>
    )


}
