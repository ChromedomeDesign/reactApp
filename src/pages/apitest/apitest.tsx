import React, { useEffect, useState } from "react"
import { ScaleAPI } from 'apis/ScaleAPI'
// components
import { MDBContainer, MDBBtn, MDBTextArea, MDBRow, MDBTypography, MDBCol } from "mdb-react-ui-kit"
import { Job } from "types/scaleAPI";

export const ApiTest = (props: any): JSX.Element => {
    const [apiResponse, setApiResponse] = useState<Job[]>();
    const [selectedEndpoint, setSelectedEndpoint] = useState<string>();

    useEffect(() => {
        ScaleAPI.getJobs().then((response: Job[]) => {
            setApiResponse(response)
        })
    }, [selectedEndpoint])

    function handleClick() {
        setSelectedEndpoint('true');
    }
    return (
        <MDBContainer fluid className='overflow-hidden'>
            <div className="container text-center my-auto">
                <MDBTypography tag='h2'>PMA.Vision Web Services Client</MDBTypography>
                <MDBRow className='g-2 d-flex align-items-stretch'>
                    <MDBCol md='6 d-flex align-items-stretch'>
                        <MDBRow className='g-2'>
                            <MDBCol size='6'>
                                <div className="d-grid gap-2"><MDBBtn onClick={handleClick} color='secondary' target="_blank" id="sendJobBtn">Send Job</MDBBtn></div>
                            </MDBCol>
                            <MDBCol size='6'>
                                <div className="d-grid gap-2"><MDBBtn color='secondary' target="_blank" id="getJobsListBtn">Get Jobs List</MDBBtn></div>
                            </MDBCol>
                            <MDBCol size='6'>
                                <div className="d-grid gap-2"><MDBBtn color='secondary' target="_blank" id="deleteJobBtn">Delete Job</MDBBtn></div>
                            </MDBCol>
                            <MDBCol size='6'>
                                <div className="d-grid gap-2"><MDBBtn color='secondary' target="_blank" id="getResultsListBtn">Get Results List</MDBBtn></div>
                            </MDBCol>
                            <MDBCol size='6'>
                                <div className="d-grid gap-2"><MDBBtn color='secondary' target="_blank" id="deleteResultBtn">Delete Result</MDBBtn></div>
                            </MDBCol>
                            <MDBCol size='6'>
                                <div className="d-grid gap-2"><MDBBtn color='secondary' target="_blank" id="getDeviceStatusBtn">Get Device Status</MDBBtn></div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md='6 d-flex align-items-stretch'>
                        <MDBTextArea label='API Response' rows='{10}' id='apiResponse' value={apiResponse}/>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    )
}