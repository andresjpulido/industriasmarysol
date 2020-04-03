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
                 

                    <div class="row">
                        <div class="col-sm-6 col-top">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="/img/products/ACIDOS.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Acido sacasarro</h5>
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
                                            <h5 class="card-title">Brillo silicona</h5>
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
                                            <h5 class="card-title">Cloro</h5>
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
                                            <h5 class="card-title">Desinfectante</h5>
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
                                            <h5 class="card-title">Detergente</h5>
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
                                            <h5 class="card-title">Gel y jabon</h5>
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
                                            <h5 class="card-title">Shampoo desengrasante</h5>
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
                                            <h5 class="card-title">Suavizante</h5>
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

