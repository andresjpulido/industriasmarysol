import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.scss'

export default function Header(){
    return (
        <header>
            <div className="header-title">Industrias Mar y Sol</div>
            <div className="header-contact">
                <div className="header-contact-h1"><i class="fas fa-phone-square phone"></i> (+593) 294 3683</div>
                <div className="header-contact-h2">Santa Helena, Ecuador</div>
            </div>
        </header>
    )
}
 