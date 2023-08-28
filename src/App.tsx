import React from 'react';
// @ts-expect-error
import { MDBContainer, MDBBtn, MDBTextArea, MDBInput } from 'mdb-react-ui-kit';

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
            <MDBContainer fluid className="content-section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="text-center">Contact Us</h2>
                            <form id="contact-form" method="post" action="contact.php" role="form">
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Name *</label>
                                                <MDBInput
                                                    label="Please enter your name *"
                                                    className="form-control"
                                                    id="form_name"
                                                    type="text"
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="form_lastname">Company</label>
                                                <MDBInput
                                                    label="Please enter your company name"
                                                    className="form-control"
                                                    id="form_company"
                                                    type="text"
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="form_email">Email *</label>
                                                <MDBInput
                                                    label="Please enter your email *"
                                                    className="form-control"
                                                    id="form_email"
                                                    type="email"
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="form_phone">Phone</label>
                                                <MDBInput
                                                    label="Please enter your phone"
                                                    className="form-control"
                                                    id="form_phone"
                                                    type="tel"
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="form_message">Message *</label>
                                        <MDBTextArea
                                            label="Message"
                                            id="textAreaExample"
                                            rows={4}
                                            className="form-control"
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <MDBBtn tag="a" href="https://chromedomedesign.com/" target="_blank" role="button">
                                        Send message
                                    </MDBBtn>

                                    <p className="text-muted">
                                        <strong>*</strong> These fields are required.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </MDBContainer>
        </MDBContainer>
    );
};

export default App;
