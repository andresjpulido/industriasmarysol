import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import I18nInstance from '../component/i18n';

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
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <Link class={this.state.page === 'home' ? "nav-link active-item" : "nav-link"} to={`/home`} onClick={this.onClickNav.bind(this, "home")}>{I18nInstance.t("home")}</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class={this.state.page === 'products' ? "nav-link active-item" : "nav-link"} to={`/products`} onClick={this.onClickNav.bind(this, "products")}>{I18nInstance.t("products")}</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class={this.state.page === 'about' ? "nav-link active-item" : "nav-link"} to={`/about`} onClick={this.onClickNav.bind(this, "about")}>{I18nInstance.t("about")}</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class={this.state.page === 'contact' ? "nav-link active-item" : "nav-link"} to={`/contact`} onClick={this.onClickNav.bind(this, "contact")}>{I18nInstance.t("contact")}</Link>
                                </li>
                            </ul>


                        </div>

                        <div className="float-right">
                            <div className="btn-group float-right">
                                <a href="#" class={this.state.lng === 'es' ? "px-1 btn-language-active" : "btn-language px-1"} onClick={this.onClickLan.bind(this, 'es')}>ES</a>
                                <a href="#" class={this.state.lng === 'en' ? "px-1 btn-language-active" : "btn-language px-1"} onClick={this.onClickLan.bind(this, 'en')}>EN</a>
                                <a href="#" class={this.state.lng === 'fr' ? "px-1 btn-language-active" : "btn-language px-1"} onClick={this.onClickLan.bind(this, 'fr')}>FR</a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default withTranslation()(Nav);