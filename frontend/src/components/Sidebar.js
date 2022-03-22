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


const Sidebar = (props) => {
  const [trends,setTrends] = useState([])
  useEffect(() => {
    const fetchTrends = async () => {
      //props.setloading(true);
      try{
        const data = await axios.get('/trends', {
          params: {
            count: 10
          }
        });
        setTrends(data);
        console.log(data);
      }
      catch(err){
        console.error(err.message);
      }
      //props.setloading(false);
    }
    fetchTrends();
  },[/*trends,props*/]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Contrast Light Mode
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <nav>
              {trends && trends.map((trend,index) => (
                  <div key={index}>
                    <NavLink to={`/Trend/${trend}`}>
                      <CDBSidebarMenuItem>
                        {trend}
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