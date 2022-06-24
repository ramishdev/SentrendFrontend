import React,{useState, useEffect} from 'react';
import WordCloud from 'react-d3-cloud';
import axios from '../hooks/axios.js'
import { useOutletContext } from "react-router-dom";


const fontSize = (word) => word.value / 50;
const rotate = (word) => (word.value % 90) - 45;


function TopicsCloud({trend}){
    const [results, setResults] = useState()
    const [isloading,setloading] = useState(false);
    console.log(trend)
    useEffect(() => {
        const controller = new AbortController();
        const fetchTopics = async () => {
          setloading(true);
          setResults()
          try{
            const data = await axios.get(trend?.url +"/topics/", {
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal
            });
            console.log(data?.data)
            setResults(data?.data)            
          }
          catch(err){
            console.error(err.message);
            setResults({})
          }
          setloading(false);
        }
        if(trend){
             fetchTopics();
        }
        return () => controller?.abort();
    },[trend])
    const newData = (data) => { 
        return(
            data.map((item) => ({
            text: item.text,
            value: item.value
            }))
        )
    };
    if(isloading){
        <>Loading</>
    }

    return (results && Object.keys(results).length > 0)?(
        <> 
            <div className="border border-sky-500 " style={{width:'40rem'}}>
            <WordCloud
                data={newData(results)}
                fontSize={fontSize}
                rotate={0}
                padding={2}
            />
            </div>
        </>
    ):
    (
        <>
            
        </>
    )
}
export default React.memo(TopicsCloud)