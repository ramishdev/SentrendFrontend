import React,{useState,useEffect} from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom'
const axios = require('axios').default;


const Sidebar = () => {
  const [trends,setTrends] = useState([])
  const [isloading,setloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTrends = async () => {
      setloading(true);
      try{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 099e53b (Revert)
        await axios.post('http://localhost:8000/api/trends/update_trends/',{
          auth: {
            username: 'arslan',
            password: '123'
          },
          body:{
            crawler_id : 0
          },
          signal: controller.signal
        });
<<<<<<< HEAD
>>>>>>> parent of fbf3fd3 (update)
=======
>>>>>>> parent of 099e53b (Revert)
        const data = await axios.get('http://localhost:8000/api/trends', {
          params: {
            limit: 10
          },
          signal: controller.signal
        });
<<<<<<< HEAD
<<<<<<< HEAD
=======
        let newState = data.data.map((trend) => ({"trend_name":trend.name,"max_results":10,"count":1}));
=======
        let newState = data.data.map((trend) => ({"trend_name":trend.trend_name,"max_results":10,"count":1}));
>>>>>>> parent of 099e53b (Revert)
        await axios.post('http://localhost:8000/api/tweets/update_tweets/',{
          body:{
            "query":[
                {newState}
            ]
            ,
            "crawler":{
                "id":1,
                "type":["batch"],
                "duration":10
            }
          },
          signal: controller.signal
        });
<<<<<<< HEAD
>>>>>>> parent of fbf3fd3 (update)
=======
>>>>>>> parent of 099e53b (Revert)
        console.log(data.data)
        setTrends(data.data);
        console.log(data);
      }
      catch(err){
        console.error(err.message);
      }
      setloading(false);
    }
    fetchTrends();
    return () => controller?.abort();
  },[]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if(isloading){
    return <h1>Loading...</h1>;
  }
>>>>>>> parent of fbf3fd3 (update)
  return (
=======

  return (isloading)?(

    <div><h1>Loading...</h1></div>

  ):(
    
>>>>>>> parent of 099e53b (Revert)
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Contrast Light Mode
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            {/*<CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>*/}
            <nav>
              {trends && trends.map((trend) => (
                  <div key={trend.id}>
                    <NavLink to={`/Trend/${trend.trend_name}`}>
                      <CDBSidebarMenuItem>
                        {trend.trend_name}
                      </CDBSidebarMenuItem>
                    </NavLink>
                  </div>
              ))}
            </nav>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      
    </div>
  );
}

export default Sidebar;