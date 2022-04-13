import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
//import useAuth from "../hooks/useAuth"

const axios = require('axios').default;


const Sidebar = () => {
  const [trends,setTrends] = useState([])
  const [isloading,setloading] = useState(false);
  //let {authTokens} = useAuth()

  useEffect(() => {
    
    const controller = new AbortController();
    const fetchTrends = async () => {

      setloading(true);
      try{

        /*await axios.post('http://localhost:8000/api/trends/update_trends/',{
          auth: {
            username: 'arslan',
            password: '123'
          },
          body:{
            crawler_id : 1
          },
          signal: controller.signal
        });
          */
        const data = await axios.get('http://localhost:8000/api/trends', {
          params: {
            limit: 10
          },
          signal: controller.signal
        });

        let newState = data.data.map((trend) => ({"trend_name":trend.trend_name,"max_results":10,"count":1}));

        /*await axios.post('http://localhost:8000/api/tweets/update_tweets/',{
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
        });*/

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

  }, [] );
 
  return (isloading)?(

    <div><h1>Loading...</h1></div>

  ):(
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar >
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            {/*<CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>*/}
            <nav>
              {trends && trends.map((trend) => (
                  <div key={trend.id}>
                    <NavLink to={`/Trend/${trend.trend_name}`}>
                      <CDBSidebarMenuItem icon="chart-line" iconType="solid">
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