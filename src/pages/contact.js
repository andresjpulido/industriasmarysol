import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import I18nInstance from '../component/i18n';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="item">{I18nInstance.t("contact-title")}</h2>

                <div className="row">
                    <div className="col-md mb-4 mt-4">
                        <div className="solid">
                            <form className="form form-contact">
                                <div class="form-group">
                                    <label for="InputEmail" className="form-label">{I18nInstance.t("email")}</label>
                                    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <label for="InputName" className="form-label">{I18nInstance.t("name")}</label>
                                    <input type="password" class="form-control" id="InputName" />
                                </div>
                                <div class="form-group" >
                                    <label for="InputMessage" className="form-label">{I18nInstance.t("message")}</label>
                                    <textarea class="form-control" rows="5" id="InputMessage" />
                                </div> 
                            </form> 
                        </div>
                        <button type="submit" class="btn btn-primary mt-4">{I18nInstance.t("send")}</button>
                    </div>
                    <div className="col mb-4 mt-4">
                        <div className="mx-auto">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8056707586634!2d-80.86168768582661!3d-2.226705138001533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902e09067bf3a8ad%3A0xf2101f90ca3fbc6d!2sBarrio%20Amantes%20De%20Sumpa!5e0!3m2!1sen!2snz!4v1585956538160!5m2!1sen!2snz" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Contact); 