import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import useAuth from "../hooks/useAuth"
import Feedback from 'react-bootstrap/Feedback'

const axios = require('axios').default;

const SearchPage = () => {
  const [inputList, setInputList] = useState([{trend_name: "",limit:"",count:""}]);
  const [crawlList, setcrawlList] = useState([{id:1},{id:2}]);              //Dummy data
  const [crawlInfo, setcrawlinfo] = useState([{id: "",type:""}]);
  const [validated, setValidated] = useState(false);
  const {authTokens} = useAuth()

  useEffect(() => {
    const controller = new AbortController();
    const fetchcrawlers = async () => {
      try {
        let response = await axios.get('http://localhost:8000/crawler/crawlers/',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens?.access)
          },
          signal: controller.signal

        })
        let data = await response.json()
        if(response.status === 200){
          setcrawlList(data) 
        }
      }
      catch (err) {
        console.error(err.message);
      }
    }
    if(authTokens){
      fetchcrawlers()
    }
  }, [])

  const updateTweets = async () => {
    const controller = new AbortController();
    try{
      let type = ''
      if(crawlInfo[0]['type'] === "Stream"){
        type = 'stream_'
      }
      let response = await axios.post('http://localhost:8000/api/trends/'+ type +'update_tweets/',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens?.access)
          },
          query: inputList,
          crawler: crawlInfo,
          signal: controller.signal
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
      //updateTweets();
      console.log("Nice")
    }
    
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    if(name === "limit" && value > 100){
      let digit = value / 100;
      if(Number.isInteger(digit)){
        list[index]['count'] = 1 + digit;
      }
      else{
        list[index]['count'] = Math.trunc(digit) + 2;
      }
    }
    if(name === "limit" && value <= 100){
      list[index]['count'] = 1;
    }
    list[index][name] = value;
    setInputList(list);
  };
  const handlecrawlerInputChange = (e) => {
    const { name, value } = e.target;
    const list = [...crawlInfo];
    list[0][name] = value;
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
    setInputList((inputList) => [...inputList, {trend_name: "",limit: "",count: ""}]);
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
                  name="limit"
                  placeholder="Enter limit"
                  value={x.limit}
                  size="sm"
                  min="1" 
                  max="200"
                  onChange={e => handleInputChange(e, i)} required
                />
                <Feedback type="invalid">Range (1-200)</Feedback>
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
            <Form.Select className="w-auto ml-1" size="sm" name="type" value={crawlInfo[0]['type']} onChange={e => handlecrawlerInputChange(e)} aria-label="Crawling Type" required>
              <option value="" disabled>Choose crawler type</option>
              <option value="Batch">Batch</option>
              <option value="Stream">Stream</option>
            </Form.Select>
            {/* <Feedback>Looks good!</Feedback> */}
          </Form.Group>
        </div>
        <div className="flex justify-center">
          <Button className="mt-2" variant="outline-primary" size="sm" type="submit">Submit form</Button>
        </div>
      </Form>
      <div className="flex justify-center" style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <div className="flex justify-center" style={{ marginTop: 20 }}>{JSON.stringify(crawlInfo)}</div>

    </div>
  );
}

export default SearchPage;