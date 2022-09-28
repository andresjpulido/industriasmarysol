import React from "react";
import { useTranslation } from "react-i18next";
import "./categories.css";
import companies from "../../assets/images/institutional.jpg";
export default function Category() {
  const { t, i18n } = useTranslation();

  return (
    <div className="categories">
      <div className="category">
        <div className="list-group-header">
          <i className="fas fa-building icon-lines"></i>{" "}
          <span className="list-group-title">{t("enterprise-line")}</span>
        </div>

        <div className="category-columns">
          <div>
            <ul>
              <li className="list-group-item">Desinfectantes </li>
              <li className="list-group-item">Suavizantes </li>
              <li className="list-group-item">Detergente Líquido </li>
              <li className="list-group-item">Jabon liquido manos </li>
              <li className="list-group-item">Gel desinfectante </li>
              <li className="list-group-item">Limpia vidrios </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="list-group-item">Ácido Saca Sarro </li>
              <li className="list-group-item">Ácido Nítrico </li>
              <li className="list-group-item">Peróxido </li>
              <li className="list-group-item">Cloro Gel </li>
              <li className="list-group-item">Desengrasante Doméstico </li>
              <li className="list-group-item">Desengrasante Industrial </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="group-wrap group-wrap-home">
        <div className="">
          <div className="list-group-header">
            <i className="fas fa-home icon-lines"></i>{" "}
            <span className="list-group-title">{t("home-line")}</span>
          </div>
          <div className="category-columns">
            <div>
              <ul>
                <li className="list-group-item">Cloro </li>
                <li className="list-group-item">Desinfectantes</li>
                <li className="list-group-item">Suavizantes</li>
                <li className="list-group-item">Detergente Líquido</li>
                <li className="list-group-item">Limpia vidrios</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="list-group-item">Ácido Saca Sarro</li>
                <li className="list-group-item">Ácido Nítrico</li>
                <li className="list-group-item">Peróxido</li>
                <li className="list-group-item">Cloro Gel</li>
                <li className="list-group-item">Desengrasante Doméstico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="group-wrap group-wrap-car">
        <div className="">
          <div className="list-group-header">
            <i className="fas fa-car icon-lines"></i>{" "}
            <span className="list-group-title">{t("car-line")}</span>
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
  );
}
