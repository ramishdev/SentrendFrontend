import {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


const CrawlerDetail = (...props) => {

    const {refresh,setRefresh} = props[0].item 
    const data = props[0]?.data
    // const refreshData = props[0]?.item
    
    console.log(props)

    let {authTokens, logoutUser} = useContext(AuthContext)
    const [results, setResults] = useState({});


    useEffect(() => {
        getDetails()
      }, [])
    

    let getDetails =  async () => {

      let response = await fetch(data?.url ,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
        }

      })
      let limitData = await response.json()
      if(response.status === 200){
        console.log(limitData)
        setResults(limitData) 
      }
      else if(response.statusText === 'Unauthorized'){

        setResults({})
        // setResults([])
      }
      else{
        setResults({})
      }
        // console.log("data",limitData)
    }


    let DeleteCrawler = async () => {

      let response = await fetch(data?.url,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
        }
    })
      console.log(response.status)
      if(response.status === 204){

        setRefresh((refresh) => (! refresh))

        console.log("delete data" , data)
  
      }
      else if(response.statusText === 'Unauthorized'){
     
      }
    }

    return (

        <div>


          <div>
          < Button variant="danger" onClick={() => DeleteCrawler()} >Delete</Button>
          </div>



            <div>
                <h1 className="text-2xl">Api keys</h1>
            </div>

            <div className = "p-8" >
                <h1>Consumer key:</h1>
                <p className ="text-sm italic opacity-50">{data.consumer_key}</p>
                <h1>Consumer secret:</h1>
                <p className ="text-sm italic opacity-50">{data.consumer_secret}</p>
                <h1>Access token:</h1>
                <p className ="text-sm italic opacity-50">{data.access_token}</p>
                <h1>Access token secret:</h1>
                <p className ="text-sm italic opacity-50">{data.access_token_secret}</p>
                <h1>Bearer token:</h1>
                <p className ="text-sm italic opacity-50">{data.bearer_token}</p>
            </div>


            <div>
                <h1 className="text-2xl">Rate limits</h1>
            </div>
            { results && (Object.keys(results).length > 0)?
            (<div className="p-8">
              <Table striped hover>
                  <thead>
                      <tr>
                      <th>Endpoints</th>
                      <th>Rate Limit</th>
                      <th className = "text-emerald-500	">Remaining</th>
                      <th>Reset</th>
                      </tr>
                  </thead>
                  <tbody>
                    {Object.entries(results).map((result,index) => (
                        <tr key = {index}>
                        <td>{result[0]}</td>
                        <td>{result[1].limit}</td>
                        <td>{result[1].remaining}</td>
                        <td>{result[1].reset}</td>
                        </tr>
                    ))}
                  </tbody>
                  </Table>
            </div>)
        :(<p>Failed, Looks like you've hit rate limit for checking rate limit :D</p>

        )}
            
    </div>)
  
}
export default CrawlerDetail