import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import I18nInstance from '../component/i18n';

class Footer extends Component {

    render() {
        return (
            <div className="footer col-top col-botton">
                <div className="container">
                    <div class="row col-top">
                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fas fa-phone-square icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> (+593) 294 3683</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fas fa-map-marker-alt icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> Avda calle 45/46 barrio amantes de sumpa, Santa Elena, Ecuador.</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fas fa-envelope icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> indusmarsa@hotmail.com</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="row  ">
                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fas fa-fax icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> +1 800 889 9898</span></div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><a href="https://web.facebook.com/Industrias-Mar-Y-Sol-SA-165692880302017/" target="_blank"><i class="fab fa-facebook icons"></i></a></div>
                                <div class="col-sm-10 col-form-label"><span> {I18nInstance.t("visitFacebook")}</span></div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fas fa-clock icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> {I18nInstance.t("schedule")}</span></div>
                            </div>
                        </div> 
                    </div>

                    <hr className="footer"></hr>
                    <span class="text-left col-top"> &copy; 2020 Industrias Mar y sol. Desarrollado por AP.</span>

                </div>
            </div>

        );
    }
}
 
export default withTranslation()(Footer);