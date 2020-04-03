import React, { Component } from 'react';

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
                                <div class="col-sm-2 col-form-label"><i class="fab fa-facebook icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> Visitanos en Facebook</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fab fa-twitter-square icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> Siguenos en Twiter</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="row  col-botton">
                        <div class="col">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><i class="fas fa-clock icons"></i></div>
                                <div class="col-sm-10 col-form-label"><span> Lun-Sab: 07:00AM - 05:00PM</span></div>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                        <div class="col">

                        </div>
                    </div>


                    <hr className="footer"></hr>
                    <span class="text-left col-top"> &copy; 2020 Industrias Mar y sol. Desarrollado por AP.</span>

                </div>
            </div>

        );
    }
}

export default Footer;