import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import useAuth from '../hooks/useAuth.js'
import axios from '../hooks/axios.js'
import PlaceHolder from './PlaceHolder'

import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';


function Manage(){
    const {authTokens} = useAuth()
    const [isloading,setloading] = useState(false);
    const [usertrends,setuserTrends] = useState([])
    useEffect(() => {
        const controller = new AbortController();
        let getuserList = async () => {
            setloading(true)
            try{
                const data = await axios.get('/core/trends/get_user_trends/', {
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens?.access)
                    },
                    signal: controller.signal
                });
                setuserTrends(data?.data);
            }
            catch (err) {
                console.log(err.message)
            }
            setloading(false)
        }
        getuserList()
    },[])

    let DeleteTrend = async ({trend,index}) => {
        console.log(trend)
        setloading(true)
        try{
            await axios.delete(trend?.url,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            
            console.log("delete data" , trend?.name)
            const list = [...usertrends]
            list.splice(index, 1);
            setuserTrends(list);
        }
        catch(err){
            console.log(err.message)
            console.log("Error");
        }
        setloading(false)
    }
    if(isloading){
        return (
            <div className="d-flex justify-center">
                <PlaceHolder/>
            </div>
        );
    }
    return(usertrends)?(
        <>

        <ListGroup variant="flush">
            {usertrends.map((trend,index) => {
            return(

                    <div key={index}>
                        {/* <h1 className="pl-5 pt-2">{trend?.name}</h1>
                        <div className="">
                            
                        </div> */}

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            >
                            <div className="ms-2 me-auto">
                                <h1 className="pl-5 pt-2">{trend?.name}</h1>
                            </div>
                            <Button variant="danger" onClick={() => DeleteTrend({trend,index})} >Delete</Button>
                        </ListGroup.Item>
                    </div>
                
           );
           
        })}
            </ListGroup>
        </>
        
    ):(<></>)
}
export default Manage