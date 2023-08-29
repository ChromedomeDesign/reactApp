// This is your main application file.
import React from 'react' // Importing the core React library
// @ts-expect-error
import { MDBContainer, MDBBtn, MDBTextArea, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit' // Importing specific components from our UI library
import { ContactForm } from './feature/contact-form/contact-form' // Importing our custom component

// This is a simple variable type definition. With Typescript, we should define our variables as strictly as we can so that the tooling can
// detect type mismatches in real time. This will also provide us with verbose feedback at runtime if dynamic data is mismatched with the
// expected data types
type AppProps = {
    message: string;
};

// This is the function component that represnts the application scope
const App = ({ message }: AppProps): JSX.Element => {
    // The return statement below represents the TSX element that will render as HTML to the page.
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
            <ContactForm />
        </MDBContainer>
    );
};

// This export statement is required for the component to be imported elsewhere
export default App;
