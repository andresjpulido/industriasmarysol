import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div className=" page">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col float-left">
                            <h1><span className="font-weight-bolder">INDUSTRIAS </span><span className="font-weight-bold sub"> Mar y Sol</span></h1>
                        </div>
                        <div className="col float-right">
                            <div class="float-right">
                                <i class="fas fa-phone-square phone"></i>
                                <span> (+593) 294 3683</span>
                            </div>
                            <br />
                            <div class="float-right">
                                <small class="text-muted">
                                    Santa Helena, Ecuador
                                </small>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;