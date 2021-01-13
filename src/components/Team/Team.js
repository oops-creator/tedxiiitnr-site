import './Team.css';
import React from 'react';
import rick from '../../assets/images/rick.jpeg'
import Fade from 'react-reveal';


function Team() {
    return (
        <React.Fragment>
            <section class="section" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="center-heading">
                                <div class="section-title " id="team-heading">Our Team</div>
                            </div>
                        </div>
                        <div class="offset-lg-3 col-lg-6">
                            <div class="center-text">
                                <p>Blah Blah.</p>
                            </div>
                        </div>
                    </div>

                    <Fade top>
                        <div>
                            <div class="row">

                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="team-post-thumb">

                                        <div class="img">
                                            <img src={rick} alt=""></img>
                                        </div>
                                        <div class="team-content">
                                            <h3>
                                                Da Name
                                    </h3>
                                            <div class="text">
                                                something here ?
                                    </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="team-post-thumb">
                                        <div class="img">
                                            <img src={rick} alt=""></img>
                                        </div>
                                        <div class="team-content">
                                            <h3>
                                                Da Name
                                    </h3>
                                            <div class="text">
                                                About yo
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="team-post-thumb">
                                        <div class="img">
                                            <img src={rick} alt=""></img>
                                        </div>
                                        <div class="team-content">
                                            <h3>
                                                Da Name
                            </h3>
                                            <div class="text">
                                                krrrr
                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>

                </div>

            </section>


        </React.Fragment>

    );
}

export default Team;
