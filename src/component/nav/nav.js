import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import I18nInstance from '../i18n';
import './nav.scss'
import icon from '../../assets/images/menu-icon.png'

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "home",
            lng: "es",
            pages: "",
            nodes: [
                {
                    name: "home",
                    path: "/home"
                },
                {
                    name: "about"
                },
                {
                    name: "products"
                },
                {
                    name: "contact"
                },
            ]
        }
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    };

    onClickNav = (pageid) => {
        console.log(pageid)
        this.setState({ page: pageid })
    }

    onClickLan = (lng) => {
        console.log(lng)
        this.setState({ lng: lng })
        this.props.i18n.changeLanguage(lng);
    }

    componentDidMount() {
        this.props.i18n.changeLanguage(this.state.lng);
    }

    render() {
        return (
            <nav className="dropdown">
                <div className="menu-mobile">
                    <div className="menu-mobile-title">Industrias Mar y Sol</div>
                    <button className="menu-mobile-icon"><img src={icon} width="25px" /></button>
                </div>
                <ul className="dropdown-child">
                    <li class="">
                        <Link class={this.state.page === 'home' ? "active-item" : ""} to={`/home`} onClick={this.onClickNav.bind(this, "home")}>{I18nInstance.t("home")}</Link>
                    </li>
                    <li class="">
                        <Link class={this.state.page === 'products' ? "active-item" : ""} to={`/products`} onClick={this.onClickNav.bind(this, "products")}>{I18nInstance.t("products")}</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={this.state.page === 'about' ? "nav-link active-item" : "nav-link"} to={`/about`} onClick={this.onClickNav.bind(this, "about")}>{I18nInstance.t("about")}</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={this.state.page === 'contact' ? "nav-link active-item" : "nav-link"} to={`/contact`} onClick={this.onClickNav.bind(this, "contact")}>{I18nInstance.t("contact")}</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" class={this.state.lng === 'es' ? "px-1 btn-language-active" : "btn-language px-1"} onClick={this.onClickLan.bind(this, 'es')}>ES</a>
                    </li>
                    <li>
                        <a href="#" class={this.state.lng === 'en' ? "px-1 btn-language-active" : "btn-language px-1"} onClick={this.onClickLan.bind(this, 'en')}>EN</a>
                    </li>
                </ul>
            </nav>
        )

    }
}

export default withTranslation()(Nav);