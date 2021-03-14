import React from 'react'
import { useTranslation } from 'react-i18next';
import './products.scss'

export default function Products() {

    const { t, i18n } = useTranslation();

    return (
        <section className="page">

            <h2>{t("productlist")}</h2>

            <div className="cards">
                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/ACIDOS.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">&Aacute;cido sacasarro</h3>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/BRILLOS.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Brillo silicona</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/CLORO.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Cloro</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/DESINFECTANTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Desinfectante</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/DETERGENTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Detergente</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img className="card-img" src="/img/products/GELYJABON.jpg" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Gel y jabon</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/SHAMPOOYDESENGRASANTE.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Shampoo desengrasante</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

                <div className="card">
                    <div class="card-img">
                        <img src="/img/products/SUAVIZANTE.jpg" class="card-img" alt="..." />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title card-text">Suavizante</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Comun&iacute;quese con nosotros para mayor informaci&oacute;n</small></p>
                    </div>
                </div>

            </div>

        </section>
    );
}

