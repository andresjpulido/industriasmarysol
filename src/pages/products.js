import React from 'react'
import { useTranslation } from 'react-i18next';
import './products.css'

export default function Products() {

    const { t, i18n } = useTranslation();

    return (
        <section className="page">

            <h2>{t("productlist")}</h2>

            <div className="cards">
                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/ACIDOS.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">&Aacute;cido sacasarro</h3>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/BRILLOS.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Brillo silicona</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/CLORO.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Cloro</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/DESINFECTANTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Desinfectante</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/DETERGENTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Detergente</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img className="card-img" src="/img/products/GELYJABON.jpg" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Gel y jabon</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/SHAMPOOYDESENGRASANTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Shampoo desengrasante</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/img/products/SUAVIZANTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title card-text">Suavizante</h3>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

            </div>

        </section>
    );
}

