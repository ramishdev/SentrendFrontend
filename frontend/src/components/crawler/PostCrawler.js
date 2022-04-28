import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const PostCrawler = () => {

  let {authTokens} = useContext(AuthContext)

  const [show, setShow] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [validated, setValidated] = useState(false);

  

  useEffect(() => {
    //getNotes()
  }, [])

  let postNotes = async (e) => {

    const form = e.currentTarget;

    e.preventDefault()

    let response = await fetch('http://127.0.0.1:8000/crawler/crawlers/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      },
      body : JSON.stringify({'consumer_key':e.target.consumer_key.value,
       'consumer_secret':e.target.consumer_secret.value,
       'access_token': e.target.access_key.value,
       'access_token_secret': e.target.access_secret.value,
       'bearer_token':e.target.bearer_key.value
    })
    })

    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Error")
    
    }
    setValidated(true)


    if(response.status === 201){
        setShow(true)
        setAlertVariant("success")
    }
    else {
        setShow(true)
        setAlertVariant("danger")
    }
  }

  const ShowAlert = ({show,alertVariant}) => {

    return(

        <Alert show={show} variant={alertVariant} onClose={() => setShow(false)}  dismissible>
        <Alert.Heading> {alertVariant === "success"? (<p>NICE!</p>):(<p>OOPS!</p>)}</Alert.Heading>
        {alertVariant === "success"? (<p>New crawler has been created!</p>):(<p>Failed to create crawler</p>)}
        <hr />
        {alertVariant === "success"? (<p className="mb-0">You can now start using it.</p>):(<p className="mb-0">Make sure you provide correct keys</p>)}
    </Alert>
    )
  }

  return (

    <div className="container flex min-h-screen flex-col justify-center">

        <div className="flex justify-center">
            <h1>Set up your crawler</h1>
        </div>

        <ShowAlert show = {show} alertVariant = {alertVariant} />
        
        <Form noValidate validated={validated} onSubmit = {postNotes}>

            <Form.Group className="mb-3"  controlId="formConsumerKey">
                <Form.Label>Consumer key</Form.Label>
                <Form.Control required type="text" placeholder="Enter Consumer Key" name = "consumer_key" />
                <Form.Text className="text-muted">
                    We'll never share your consumer key with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Please provide a Consumer key.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConsumerSecret">
                <Form.Label>Consumer secret</Form.Label>
                <Form.Control type="text" placeholder="Enter Consumer secret" name = "consumer_secret" required />
                <Form.Text className="text-muted">
                    We'll never share your Consumer secret with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Please provide a Consumer secret.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAccessKey">
                <Form.Label>Access key</Form.Label>
                <Form.Control type="text" placeholder="Enter Access key" name = "access_key" required/>
                <Form.Text className="text-muted">
                    We'll never share your Access key with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Please provide a  Access token.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAccessSecret">
                <Form.Label>Access secret</Form.Label>
                <Form.Control type="text" placeholder="Enter Access Secret" name = "access_secret" required/>
                <Form.Text className="text-muted">
                    We'll never share your Acess secret with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Please provide a Access secret token.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBearerKey">
                <Form.Label>Bearer key</Form.Label>
                <Form.Control type="text" placeholder="Enter Bearer Key" name = "bearer_key" required/>
                <Form.Text className="text-muted">
                    We'll never share your Bearer key with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Please provide a Bearer token.
                </Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        
    </div>
  )
 
}

export default PostCrawler