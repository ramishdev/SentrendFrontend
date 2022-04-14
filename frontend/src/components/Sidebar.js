import React,{useState,useEffect} from 'react';

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


const Sidebar = ({setdata}) => {
  const [trends,setTrends] = useState([])
  const [isloading,setloading] = useState(false);
  //let {authTokens} = useAuth()

  const passTrends = (trend) =>{
    setdata(trend)
  }
  useEffect(() => {
    
    const controller = new AbortController();
    const fetchTrends = async () => {
      setloading(true);
      try{

        const data = await axios.get('http://localhost:8000/api/trends', {
          params: {
            limit: 10
          },
          signal: controller.signal
        });

        //let newState = data.data.map((trend) => ({"trend_name":trend.trend_name,"max_results":10,"count":1}));


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
                    {/*<NavLink to={`/Trend/${trend.trend_name}`}>*/}
                      <CDBSidebarMenuItem onClick={()=>passTrends(trend)} icon="chart-line" iconType="solid">
                        {trend.trend_name}
                      </CDBSidebarMenuItem>
                    {/*</div>*/}
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