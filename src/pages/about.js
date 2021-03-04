import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import I18nInstance from '../component/i18n';

class About extends Component {
    render() {
        return (
            <div className="page container">

                <div className="row">
                    <div className="col-md-6 mt-5 mb-5 px-5">
                        <div className="row">
                            <i class="fas fa-sitemap mx-auto icons-items"></i>
                        </div>
                        <h2 className="item">{I18nInstance.t("mission")}</h2>
                        <div className="row">
                        <p>{I18nInstance.t("mission-p1")}</p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-5 mb-5 px-5 px-5">
                        <div className="row">
                            <i class="fas fa-tasks mx-auto icons-items"></i>
                        </div>
                        <h2 className="item">{I18nInstance.t("vision")}</h2>
                        <div className="row">
                            <p>{I18nInstance.t("vision-p1")}</p>
                            <p>{I18nInstance.t("vision-p2")}</p>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}


export default withTranslation()(About);