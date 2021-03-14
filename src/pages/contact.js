import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import I18nInstance from '../component/i18n';
import './contact.scss'

class Contact extends Component {
    render() {
        return (
            <section className="page" >
                <h2 className="item">{I18nInstance.t("contact-title")}</h2>

                <div id="contact">

                    <article className="">
                        <form className="form">

                            <label for="InputEmail" className="form-item form-label">{I18nInstance.t("email")}</label>
                            <input type="email" class="form-item form-control" id="InputEmail" aria-describedby="emailHelp" />

                             
                                <label for="InputName" className="form-item form-label">{I18nInstance.t("name")}</label>
                                <input type="password" class="form-item form-control" id="InputName" />
                             
                            
                                <label for="InputMessage" className="form-item form-label">{I18nInstance.t("message")}</label>
                                <textarea class="form-item form-control" rows="5" id="InputMessage" />
                             
                        </form>

<div className="m0">
                        <button type="submit" class="btn-primary">{I18nInstance.t("send")}</button>
                        </div>
                    </article>

                    <article className="col mb-4 mt-4">
                        <div className="mx-auto">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8056707586634!2d-80.86168768582661!3d-2.226705138001533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902e09067bf3a8ad%3A0xf2101f90ca3fbc6d!2sBarrio%20Amantes%20De%20Sumpa!5e0!3m2!1sen!2snz!4v1585956538160!5m2!1sen!2snz" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Contact);