import Placeholder from 'react-bootstrap/Placeholder'

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
const PlaceHolder = () => {

    return (
      <div>
        <h1>
            
        </h1>
        <Spinner animation="border" role="status" style={{ width: "5rem", height: "5rem" }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
  
  export default PlaceHolder