import './Welcome.css';
import React from 'react';


function Welcome() {
    return (
        <React.Fragment>
            <div className="welcome-area" id="welcome">

                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                <h1>Welcome here something something</h1>

                                <h1 className="tedxtitle"><span className="boldspan"><strong>TED<sup>x</sup></strong></span>IIITNayaRaipur<span id='bouncydot'></span></h1>
            </div>
                            </div>
                        </div>
                    </div>
                </div>
      </React.Fragment>
    
  );
}

export default Welcome;
