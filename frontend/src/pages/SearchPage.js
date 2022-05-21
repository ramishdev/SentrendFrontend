import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import useAuth from "../hooks/useAuth"
import Feedback from 'react-bootstrap/Feedback'

import axios from '../hooks/axios.js'

const SearchPage = () => {
  const [inputList, setInputList] = useState([{trend_name: "",max_results:"",count:""}]);
  const [crawlList, setcrawlList] = useState([{id:1},{id:2}]);              //Dummy data
  const [crawlInfo, setcrawlinfo] = useState([{id: "",type:[""],duration:""}]);
  const [validated, setValidated] = useState(false);
  const [usertier, settier] = useState();
  const {authTokens} = useAuth()
  useEffect(() => {
    const controller = new AbortController();
    const fetchdata = async () => {
      try {
        let response1 = await axios.get('/crawler/crawlers/',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens?.access)
          },
          signal: controller.signal

        })
        let data = await response1.data
        if(response1.status === 200){
          setcrawlList(data) 
        }
        let response2 = await axios.get('/api/user_tiers/get_teir_info/',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens?.access)
          },
          signal: controller.signal

        })
        let data2 = await response2.data
        settier(data2)
      }
      catch (err) {
        console.error(err.message);
      }
    }
    if(authTokens){
      fetchdata()
    }
  }, [])

  const postuserdata = async () => {
    const controller = new AbortController();
    console.log(inputList)
    try{
      let rp1 = await axios.post('/api/trends/update_user_trends/',{ 
        query: inputList,
        crawler: crawlInfo[0],
        signal: controller.signal
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens?.access)
        }
      })
      console.log(rp1)
      let type = ''
      if(crawlInfo[0]['type'] === "Stream"){
        type = 'stream_'
      }
      let response = await axios.post('/api/tweets/'+ type +'update_tweets/',{
          query: inputList,
          crawler: crawlInfo[0],
          signal: controller.signal
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens?.access)
        }
      })
      if(response.status === 200){
          console.log("Success!!"); 
      }
    }
    catch (err) {
      console.error(err.message);
    }
  }
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Error")

    }
    if (form.checkValidity() === true) {
      event.preventDefault();
      //setValidated(false);
      if(usertier && ( usertier?.current_keywords >= 0 && usertier?.current_keywords <= usertier?.max_keywords)){
        postuserdata();
        console.log("Nice")
        alert("Done")
      }
      else{
        alert("Limit Reached")
      }
    }
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    if(name === "max_results" && value > 100){
      let digit = value / 100;
      if(Number.isInteger(digit)){
        list[index]['count'] = 1 + digit;
      }
      else{
        list[index]['count'] = Math.trunc(digit) + 2;
      }
    }
    if(name === "max_results" && value <= 100){
      list[index]['count'] = 1;
    }
    list[index][name] = value;
    setInputList(list);
  };
  const handlecrawlerInputChange = (e) => {
    const { name, value } = e.target;
    const list = [...crawlInfo];
    list[0][name] = value;
    if(name === "type")
      list[0][name] = [value];
    
    setcrawlinfo(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    if(usertier && (usertier?.current_keywords >= 0 && usertier?.current_keywords < usertier?.max_keywords - 1)){
      setInputList((inputList) => [...inputList, {trend_name: "",max_results: "",count: ""}]);
      settier((usertier)=>({...usertier,current_keywords:usertier?.current_keywords + 1}))
    }
    else{
      alert("Limit Reached")
    }
  };

  return (
    <div className="container flex min-h-screen flex-col justify-center">
      <div className="flex justify-center">
        <h3 className={"text-md"}>Search</h3>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {inputList.map((x, i) => {
          return (
            <div className="flex justify-center" key={i}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="trend_name"
                  placeholder="Enter Trend Name"
                  value={x.trend_name}
                  size="sm"
                  onChange={e => handleInputChange(e, i)} required
                />
              </Form.Group>
              <Form.Group className='w-36 ml-1'>
                <Form.Control
                  type="number"
                  name="max_results"
                  placeholder="Enter max_results"
                  value={x.max_results}
                  size="sm"
                  min="10" 
                  max="200"
                  onChange={e => handleInputChange(e, i)} required
                />
                <Feedback type="invalid">Range (10-200)</Feedback>
              </Form.Group>
              
              <div className="">
                {inputList.length !== 1 && <Button className="ml-1" variant="outline-primary" size="sm" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                {inputList.length - 1 === i && <Button className="ml-1" variant="outline-primary" size="sm" onClick={handleAddClick}>Add</Button>}
              </div>
            </div>
          );
        })}
        <div className="flex justify-center mt-2">
          <h3 className={"text-base"}>Crawler Info</h3>
        </div>
        <div className="flex justify-center">
          <Form.Group>
            <Form.Select className="w-auto ml-1" size="sm" name="id" value={crawlInfo[0]['id']} onChange={e => handlecrawlerInputChange(e)} aria-label="Crawling Type" required>
              <option value="" disabled>Choose crawler id</option>
              {crawlList && crawlList.map((crawl,index) => {
                return(
                  <option key={index} value={crawl.id}>{crawl.id}</option>
                );
              })}
            </Form.Select>
            {/* <Feedback>Looks good!</Feedback> */}
          </Form.Group>
          <Form.Group>
            <Form.Select className="w-auto ml-1" size="sm" name="type" value={crawlInfo[0]['type'][0]} onChange={e => handlecrawlerInputChange(e)} aria-label="Crawling Type" required>
              <option value="" disabled>Choose crawler type</option>
              <option value="batch">Batch</option>
              <option value="stream">Stream</option>
            </Form.Select>
            {/* <Feedback>Looks good!</Feedback> */}
          </Form.Group>
          <Form.Group className='w-36 ml-1'>
            <Form.Control
              type="number"
              name="duration"
              placeholder="Enter duration"
              value={crawlInfo[0]['duration']}
              size="sm"
              min="1" 
              max="200"
              onChange={e => handlecrawlerInputChange(e)} required
            /> 
            <Feedback type="invalid">Range (1-200)</Feedback>
            {/* <Feedback>Looks good!</Feedback> */}
          </Form.Group>
        </div>
        <div className="flex justify-center">
          <Button className="mt-2" variant="outline-primary" size="sm" type="submit">Submit form</Button>
        </div>
      </Form>
      <div className="flex justify-center" style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <div className="flex justify-center" style={{ marginTop: 20 }}>{JSON.stringify(crawlInfo)}</div>
      <div className="flex justify-center" style={{ marginTop: 20 }}>{JSON.stringify(usertier)}</div>

    </div>
  );
}

export default SearchPage;