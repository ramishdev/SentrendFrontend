import {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import axios from '../../hooks/axios.js'


const CrawlerDetail = ({data,idx,item}) => {

    // const refreshData = props[0]?.item

    let {authTokens, logoutUser} = useContext(AuthContext)
    const [results, setResults] = useState({});


    useEffect(() => {
        getDetails()
      }, [])
    

    let getDetails =  async () => {
      try{
        let response = await axios(data?.url ,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
          }

        })
        let limitData = await response.data
        if(response.status === 200){
          setResults(limitData) 
        }
        else if(response.statusText === 'Unauthorized'){

          setResults({})
          // setResults([])
        }
        else{
          setResults({})
        }
      }
      catch (err) {
        console.error(err.message)
        setResults({})
      }
        // console.log("data",limitData)
    }


    let DeleteCrawler = async () => {
      try{
        let response = await axios(data?.url,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
          }
        })
        console.log(response.status)
        if(response.status === 204){

          //setRefresh((refresh) => (! refresh))

          console.log("delete data" , data)
          const list = [...item?.crawlerList]
          list.splice(idx, 1);
          console.log(idx)
          item?.setcrawlerList(list);

        }
        else if(response.statusText === 'Unauthorized'){
          console.log("Error");
        }
      }
      catch(err){
        console.log(err.message)
      }
    }

    return (

        <div>

          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={() => DeleteCrawler()} >Delete</Button>
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