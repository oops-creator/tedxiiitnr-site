import './Speaker.css'
import React from 'react';

import Fade from 'react-reveal/Fade';
import left_image from '../../assets/images/left-image.jpeg'

class Speaker extends React.Component {


    render() {
        return (
            <React.Fragment>
                { this.props.side === '1' ?
                    <section className="section padding-top-70 padding-bottom-0 aboutspeakersa" >
                        <div className="container">
                            <div className="row">

                                <Fade left duration={800}>
                                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center scroll-left" >
                                        <img src={this.props.source} className="rounded img-fluid d-block mx-auto" alt="App"></img>
                                    </div>
                                </Fade>


                                <div className="col-lg-1"></div>
                                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                                    <div className="left-heading">
                                        <h2 className="section-title">{this.props.speaker}</h2>
                                    </div>
                                    <div className="left-text">
                                        <p>{this.props.about}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                    </section> :

                    <section className="section padding-bottom-100 aboutspeakersb">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                    <div className="left-heading">
                                        <h2 className="section-title">{this.props.speaker}</h2>
                                    </div>
                                    <div className="left-text">
                                        <p>{this.props.about}</p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <Fade right duration={800}>
                                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big scroll-right">
                                        <img src={left_image} className="rounded img-fluid d-block mx-auto" alt="App"></img>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>
                }
            </React.Fragment>

        );
    }
}
export default Speaker;
