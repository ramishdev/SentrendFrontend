import React,{useState,useEffect,useCallback} from 'react';
import SubMenu from './SubMenu'
import useAuth from "../hooks/useAuth"
import Form from 'react-bootstrap/Form';
import axios from '../hooks/axios.js'
import PlaceHolder from './PlaceHolder'
const Sidebar = ({setdata,setpad}) => {
  let {user} = useAuth()
  const [open, setOpen] = useState(true);
  const [trends,setTrends] = useState([])
  const [trendlocation,setlocation] = useState()
  const [usertrends,setuserTrends] = useState([])
  const [isloading,setloading] = useState(false);
  const {authTokens} = useAuth()
  const [subopen, setsubopen] = useState(false);

  const passTrends = useCallback((trend) =>{
    setdata(trend)
  },[])

  const trenddata = React.useMemo(() => ({
    Name:"Top Trends", trends,passTrends,open,setOpen,setpad,subopen,setsubopen
  }), [trends,open]);

  const usertrenddata = React.useMemo(() => ({
    Name:"User Trends", trends:usertrends,passTrends,open,setOpen,setpad,subopen,setsubopen
  }), [usertrends,open]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTrends = async () => {
      setloading(true);
      setdata()
      setpad(-1)

      try{
        const data = await axios.get('/core/trends/', {
          params: {
            limit: 10,
            location: trendlocation
          },
          signal: controller.signal
        });
        //let newState = data.data.map((trend) => ({"trend_name":trend.trend_name,"max_results":10,"count":1}));  
        // console.log(data?.data)
        setTrends(data?.data);
        if(user){
          const data = await axios.get('/core/trends/get_user_trends/', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + String(authTokens?.access)
            },
            signal: controller.signal
          });
          // console.log(data?.data)
          setuserTrends(data?.data);
        }
      }
      catch(err){
        console.error(err.message);
      }
      setloading(false);
      setpad(true)
      
    }
    fetchTrends();
    return () => controller?.abort();

  }, [user,authTokens,trendlocation] );
  
  const handlelocationChange = (e) => {
    const { name, value } = e.target;
    setpad(-1)
    setlocation(value)
  };

  return (isloading)?(

    <div className="px-5"><PlaceHolder/></div>

  ):(
    <div className="fixed top-0 bottom-0">
      <div className={` ${ open ? "w-screen sm:w-72" : "w-20 "} bg-black pl-5 pt-8 duration-300 h-screen overflow-x-hidden overflow-y-auto` } >       
        <div className="flex gap-x-4 items-center">
          <img
            src={require("../assets/white-logo.png")} alt="../assets/reactivex.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            width="32" height="32"
            onClick={() => {setOpen(!open); setpad(!open)}}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-200 pt-2 ${
              !open && "scale-0"
            }`}
          >
            TRENDS
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
        <div>
        {(open && subopen === false)?(
          <Form className="absolute bottom-2">
            <Form.Group>
              <Form.Select className="w-auto ml-10" size="sm" name="location" value={trendlocation} onChange={e => handlelocationChange(e)} aria-label="location" required>
                <option value="" disabled>Choose Location</option>
                <option value="Worldwide">Worldwide</option>
                <option value="Lahore">Lahore</option>
                <option value="Winnipeg">Winnipeg</option>
              </Form.Select>
              {/* <Feedback>Looks good!</Feedback> */}
            </Form.Group>
          </Form>
        ):(<></>)}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Sidebar);
