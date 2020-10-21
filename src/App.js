import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import SearchContainer from './components/SearchContainer';
import Results from './components/Results';
import axios from 'axios';

const API_ENDPOINT = 'http://hn.algolia.com/api/v1/search_by_date?query=';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setURL] = useState(`${API_ENDPOINT}`);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const result = await axios(url);
        console.log("Received data:", result)
        setData(result.data);
        setIsLoading(false);
      } 
      catch(error) {
        setIsError(true);
        console.log("Error fetching data:", error);
      }
    }
    getData();
  }, [url]);

  const submitSearch = useCallback((searchString) => {
    console.log("submitSearch -> searchString", searchString)
    setURL(`${API_ENDPOINT}${searchString}`);
  }, [])

  return (
    <div className="app">
      <div className="header">HN Algolia Search</div>
      <SearchContainer submitSearch={submitSearch} />
      <Results data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default App;
