import React,{useState, useEffect} from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import axios from '../hooks/axios.js'


const fontSize = (word) => word.value / 20;
const rotate = (word) => (word.value % 90) - 45;




function TopicsCloud({trendinfo}){
    const [results, setResults] = useState()
    const [isloading,setloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchTrends = async () => {
          setloading(true);
          setResults()
          try{
            const data = await axios.get(trendinfo?.url+"/topics/", {
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal
            });
            //let newState = data.data.map((trend) => ({"trend_name":trend.trend_name,"max_results":10,"count":1}));  
            console.log(data?.data)
            setResults(data?.data)            
          }
          catch(err){
            console.error(err.message);
            setResults({})
          }
          setloading(false);
        }
        fetchTrends();
        return () => controller?.abort();
    },[])

    const newData = (data) => { data.map((item) => ({
        text: item.text,
        value: Math.random() * 100
    }))};

    return (results && Object.keys(results).length > 0)?(
        <> 
            <WordCloud
                width={1000}
                height={750}
                data={newData(results)}
                fontSize={fontSize}
                rotate={0}
                padding={2}
            />
        </>
    ):
    (
        <>
            
        </>
    )
}
export default TopicsCloud