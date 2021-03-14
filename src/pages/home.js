import React, { Component } from 'react'

import { Container, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import { withTranslation } from 'react-i18next';

import I18nInstance from '../component/i18n';
import './home.scss'

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

      <section id="home" >
        <div className="page">
          <div className="list">

            <div className="list-group list-group-institutional">
              <div className="list-group-header">
                <i class="fas fa-building icons-products"></i> <span className="list-group-title">Línea Institucional</span>
              </div>
              <ul>
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

            <div className="list-group list-group-home">
              <div className="list-group-header">
                <i class="fas fa-home icons-products"></i> <span className="list-group-title">Línea Hogar</span>
              </div>
              <ul>
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

            <div className="list-group list-group-car">
              <div className="list-group-header">
                <i class="fas fa-car icons-products"></i> <span className="list-group-title">Línea Automotriz</span>
              </div>
              <ul>
                <li class="list-group-item"> Shampoo para autos </li>
                <li class="list-group-item"> Abrillantador de Paneles</li>
                <li class="list-group-item"> Abrillantador de llanta </li>
                <li class="list-group-item"> Desengrasante Plus </li>
                <li class="list-group-item"> Grafito liquido </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="team-text">Nuestro equipo </div>
        </div>
        <div className="environment ">
        <div className="team-environment">Estamos comprometidos con 
el cuidado del medio 
ambiente</div>
        </div>



      </section>

    );
  }
}

export default withTranslation()(MyComponent);

