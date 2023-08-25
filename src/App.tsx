import React from 'react'
// @ts-expect-error moduleResolution:nodenext issue 54523
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit'

type AppProps = {
   message: string
}

const App = ({message}: AppProps): JSX.Element => {
   return (
      <MDBContainer fluid>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='text-center'>
          <img
            className='mb-4'
            src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
            style={{ width: 250, height: 90 }}
          />
          <h5 className='mb-3'>{message}</h5>
          <p className='mb-3'>MDB Team</p>
          <MDBBtn
            tag='a'
            href='https://mdbootstrap.com/docs/standard/getting-started/'
            target='_blank'
            role='button'
          >
            Click this Button
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
   )
}

export default App