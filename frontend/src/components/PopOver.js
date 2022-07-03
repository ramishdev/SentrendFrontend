
import Popover from 'react-bootstrap/Popover'


const PopOver = ({data}) => {

    // console.log(data)

    return(data)? (
        
        <Popover id="popover-basic">
                <>
                {/* <Popover.Header as="h3">Total count of tweets used for results</Popover.Header> */}
                <Popover.Body>
                    {data}
                </Popover.Body>
                </>
        </Popover>
      
    ):(
        <></>
    )
  }
  
  export default PopOver