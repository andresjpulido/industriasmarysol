import React, { Component } from 'react'

import { Container, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import { withTranslation } from 'react-i18next';

import I18nInstance from '../component/i18n';


class MyComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
    // const { t, i18n } = useTranslation();
    //console.log(i18n, t) 
  }

  changeLanguage = lng => {
    console.log("Modificando el maldito idioma " + lng)
    //I18nInstance.changeLanguage(lng);
    this.props.i18n.changeLanguage(lng);
  };

  render() {

    return (

      <div className="home page mt-0 mb-0">


        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/img/slider/van1.webp" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/img/slider/publicidad.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/img/slider/puntoVenta.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/img/slider/marca.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <br />
        
        <div class="card-group mx-auto">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-4"><i class="fas fa-home mx-auto icons-products"></i></div>
                <div class="col-8"><h5 class="card-title">Línea Institucional</h5></div>
              </div>
            </div>
            <div class="card-body-solid">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Desinfectantes </li>
                <li class="list-group-item">Suavizantes </li>
                <li class="list-group-item">Detergente Líquido </li>
                <li class="list-group-item">Jabon liquido manos </li>
                <li class="list-group-item">Gel desinfectante </li>
                <li class="list-group-item">Limpia vidrios </li>
                <li class="list-group-item">Ácido Saca Sarro </li>
                <li class="list-group-item">Ácido Nítrico </li>
                <li class="list-group-item">Peróxido </li>
                <li class="list-group-item">Cloro Gel </li>
                <li class="list-group-item">Desengrasante Doméstico </li>
                <li class="list-group-item">Desengrasante Industrial </li>
              </ul>
            </div>
            <div class="card-footer">
              <small class="text-muted">En tamaño Galón, Caneca y Tambo.</small>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-4"><i class="fas fa-home mx-auto icons-products"></i></div>
                <div class="col-8"><h5 class="card-title">Línea <br />Hogar</h5></div>
              </div>
            </div>
            <div class="card-body-solid">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cloro </li>
                <li class="list-group-item">Desinfectantes</li>
                <li class="list-group-item">Suavizantes</li>
                <li class="list-group-item">Detergente Líquido</li>
                <li class="list-group-item">Limpia vidrios</li>
                <li class="list-group-item">Ácido Saca Sarro</li>
                <li class="list-group-item">Ácido Nítrico</li>
                <li class="list-group-item">Peróxido</li>
                <li class="list-group-item">Cloro Gel</li>
                <li class="list-group-item">Desengrasante Doméstico</li>
              </ul>
            </div>
            <div class="card-footer">
              <small class="text-muted">En tamaños sachet, frasco de 100ml, frasco de 280ml, frasco de 500ml y frasco de 1000),galon de 4000.</small>
            </div>
          </div>
          <div class="card">
          <div class="card-header">
              <div class="row">
                <div class="col-4"><i class="fas fa-car mx-auto icons-products"></i></div>
                <div class="col-8"><h5 class="card-title">Línea Automotriz</h5></div>
              </div>
            </div>
            <div class="card-body-solid">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"> Shampoo para autos </li>
                <li class="list-group-item"> Abrillantador de Paneles</li>
                <li class="list-group-item"> Abrillantador de llanta </li>
                <li class="list-group-item"> Desengrasante Plus </li>
                <li class="list-group-item"> Grafito liquido </li>
                
              </ul>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>

        </div>
        <br />

      </div>

    );
  }
}

export default withTranslation()(MyComponent);

