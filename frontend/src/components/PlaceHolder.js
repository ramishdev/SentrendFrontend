import Placeholder from 'react-bootstrap/Placeholder'

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
const PlaceHolder = () => {

    return (
      <div>
        <h1>
            Fetching data from server....
        </h1>
        <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
  
  export default PlaceHolder