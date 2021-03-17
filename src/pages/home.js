import React, { Component } from 'react'
import { useTranslation } from 'react-i18next';
import './home.scss'

export default function Home() {

  const { t, i18n } = useTranslation();

  return (

    <section id="home" >
      <div className="page">
        <div className="list">

          <div className="group-wrap group-wrap-institutional">
            <div>
              <div className="list-group-header">
                <i className="fas fa-building icon-lines"></i> <span className="list-group-title">{t("enterprise-line")}</span>
              </div>
              <ul>
                <li className="list-group-item">Desinfectantes </li>
                <li className="list-group-item">Suavizantes </li>
                <li className="list-group-item">Detergente Líquido </li>
                <li className="list-group-item">Jabon liquido manos </li>
                <li className="list-group-item">Gel desinfectante </li>
                <li className="list-group-item">Limpia vidrios </li>
                <li className="list-group-item">Ácido Saca Sarro </li>
                <li className="list-group-item">Ácido Nítrico </li>
                <li className="list-group-item">Peróxido </li>
                <li className="list-group-item">Cloro Gel </li>
                <li className="list-group-item">Desengrasante Doméstico </li>
                <li className="list-group-item">Desengrasante Industrial </li>
              </ul>
            </div>
          </div>

          <div className="group-wrap group-wrap-home">
            <div className="">
              <div className="list-group-header">
                <i className="fas fa-home icon-lines"></i> <span className="list-group-title">{t("home-line")}</span>
              </div>
              <ul>
                <li className="list-group-item">Cloro </li>
                <li className="list-group-item">Desinfectantes</li>
                <li className="list-group-item">Suavizantes</li>
                <li className="list-group-item">Detergente Líquido</li>
                <li className="list-group-item">Limpia vidrios</li>
                <li className="list-group-item">Ácido Saca Sarro</li>
                <li className="list-group-item">Ácido Nítrico</li>
                <li className="list-group-item">Peróxido</li>
                <li className="list-group-item">Cloro Gel</li>
                <li className="list-group-item">Desengrasante Doméstico</li>
              </ul>
            </div>
          </div>
          <div className="group-wrap group-wrap-car">
            <div className="">
              <div className="list-group-header">
                <i className="fas fa-car icon-lines"></i> <span className="list-group-title">{t("car-line")}</span>
              </div>
              <ul>
                <li className="list-group-item"> Shampoo para autos </li>
                <li className="list-group-item"> Abrillantador de Paneles</li>
                <li className="list-group-item"> Abrillantador de llanta </li>
                <li className="list-group-item"> Desengrasante Plus </li>
                <li className="list-group-item"> Grafito liquido </li>
              </ul>
            </div>
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

  )

}