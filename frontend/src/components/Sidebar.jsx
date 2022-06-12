import React,{useState,useEffect} from 'react';
import SubMenu from './SubMenu'
import useAuth from "../hooks/useAuth"

import axios from '../hooks/axios.js'

const Sidebar = ({setdata,setpad}) => {
  let {user} = useAuth()
  const [open, setOpen] = useState(true);
  const [trends,setTrends] = useState([])
  const [usertrends,setuserTrends] = useState([])

  const [isloading,setloading] = useState(false);
  const {authTokens} = useAuth()

  const passTrends = (trend) =>{
    setdata(trend)
  }
  const trenddata={
    Name:"Top Trends",
    trends:trends,
    passTrends:passTrends,
    open:open,
    setOpen:setOpen,
    setpad:setpad
  }
  const usertrenddata={
    Name:"User Trends",
    trends:usertrends,
    passTrends:passTrends,
    open:open,
    setOpen:setOpen,
    setpad:setpad
  }
  useEffect(() => {
    
    const controller = new AbortController();
    const fetchTrends = async () => {
      setloading(true);
      setdata()
      try{

        const data = await axios.get('/core/trends/', {
          params: {
            limit: 10,
            location: 'Worldwide'
          },
          signal: controller.signal
        });

        //let newState = data.data.map((trend) => ({"trend_name":trend.trend_name,"max_results":10,"count":1}));  
        console.log(data?.data)
        setTrends(data?.data);
        console.log(data);
        if(user){
          const data = await axios.get('/core/get_user_trends/', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            signal: controller.signal
          });
          console.log(data?.data)
          setuserTrends(data?.data);
          console.log(data);
        }
      }
      catch(err){
        console.error(err.message);
      }
      setloading(false);
    }
    fetchTrends();
    return () => controller?.abort();

  }, [user,authTokens] );
  return (isloading)?(

    <div><h1>Loading...</h1></div>

  ):(
    <div className="fixed top-0 bottom-0">
      <div className={` ${ open ? "w-screen sm:w-72" : "w-20 "} bg-nav-color pl-5 pt-8 duration-300 h-screen overflow-x-hidden overflow-y-auto` } >       
        <div className="flex gap-x-4 items-center">
          <img
            src={require("../assets/logo.png")} alt="./assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            onClick={() => {setOpen(!open); setpad(!open)}}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Trends
          </h1>
          <div className="pt-4">
          <img
            src={require("../assets/control.png")} alt=""
            className={`absolute cursor-pointer -right-3 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => {setOpen(!open); setpad(!open)}}
          />
          </div>
        </div>
        <div className={`pl-0 pt-4`}>
          <SubMenu item={trenddata}/>
          { user && <SubMenu item={usertrenddata}/>}
        </div>
        {/*<ul className="pl-0 pt-6">
          {trends && trends.map((trend)  => (
            <li
              key={trend.id}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-3`}
            >
              <img src={require(`../assets/Chart_fill.png`)} alt="" onClick={() =>setOpen(!open)} />
              <span className={`${!open && "hidden"} origin-left duration-200`} onClick={()=>passTrends(trend)}>
                {trend.trend_name}
              </span>
            </li>
          ))}
        </ul>*/}
      </div>
      
    </div>
  );
};
export default Sidebar;
