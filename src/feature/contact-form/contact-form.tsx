import React from 'react'
// @ts-expect-error
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit'

export const ContactForm = (props:any) => {

    return (
        <MDBContainer fluid className="content-section" id="about">
            <div className="container">
                <MDBRow>
                    <div className="col-lg-10 mx-auto">
                        <h2 className="text-center">Contact Us</h2>
                        <form id="contact-form" method="post" action="contact.php" role="form">
                            <div className="controls">
                                <MDBRow>
                                    <MDBCol className="col-lg-6">
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
                                    </MDBCol>
                                    <MDBCol className="col-lg-6">
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
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol className="col-lg-6">
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
                                    </MDBCol>
                                    <MDBCol className="col-lg-6">
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
                                    </MDBCol>
                                </MDBRow>
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
                </MDBRow>
            </div>
        </MDBContainer>
    )
}