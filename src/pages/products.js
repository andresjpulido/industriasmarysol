import React, { Component } from 'react'

import { Container, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import { withTranslation } from 'react-i18next';

import I18nInstance from '../component/i18n';


class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navCollapsed: true
        } 
    }
 
    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    };

    render() {

        return (
            <div className="container page mt-0 mb-0">
                 
                 <h2 className="item">{I18nInstance.t("productlist")}</h2>

                    <div class="row">
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/ACIDOS.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Acido sacasarro</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/BRILLOS.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Brillo silicona</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/CLORO.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Cloro</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/DESINFECTANTE.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Desinfectante</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/DETERGENTE.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Detergente</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img className="card-img" src="/img/products/GELYJABON.jpg" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Gel y jabon</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-top" >
                            <div className="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/SHAMPOOYDESENGRASANTE.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Shampoo desengrasante</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-top col-botton" >
                            <div className="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/SUAVIZANTE.jpg" class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title card-text">Suavizante</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
               
            </div>
        );
    }
}

export default withTranslation()(Products);

