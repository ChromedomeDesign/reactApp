import React from 'react';
// @ts-expect-error
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

type AppProps = {
    message: string;
};

const App = ({ message }: AppProps): JSX.Element => {
    return (
        <MDBContainer fluid>
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-5">chromedome design</h1>
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <img src="https://chromedomedesign.com/img/Asset-1.png" />
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <img src="https://chromedomedesign.com/img/Asset-2.png" />
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <img src="https://chromedomedesign.com/img/Asset-3.png" />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <img src="https://chromedomedesign.com/img/Asset-4.png" />
                        </div>
                    </div>
                    <h3 className="mb-5">
                        <em>
                            We plan, design, and execute custom applications and web solutions. Contact us for help with
                            your project.
                        </em>
                    </h3>
                    <MDBBtn tag="a" href="https://chromedomedesign.com/" target="_blank" role="button">
                        Get In Touch
                    </MDBBtn>
                </div>
                <div className="overlay"></div>
            </header>
        </MDBContainer>
    );
};

export default App;
