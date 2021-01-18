import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchHistory from './SearchHistory.jsx';
import SearchBar from './SearchBar.jsx';
import SearchDetails from './SearchDetails.jsx';

import './Styles.css';

const ipapiUrl = 'https://ipapi.co/';
const keys = ['query', 'ip', 'version', 'continent_code', 'country_code', 'country_name', 'region_code', 'region', 'city', 'latitude', 'longitude'];


function App() {

  const [searches, setSearches] = useState([]);
  const [userLocation, setUserLocation] = useState(null);


  const fetchData = async (url) => {
    return await axios
      .get(ipapiUrl + url + "/" + "json");
  };

  const findLocation = (query) => {
    Promise.resolve(fetchData(query)).then((res) => 
      res.data.latitude && res.data.longitude ?
      setSearches(_.concat([Object.assign({}, { query }, res.data)], searches))
      : alert('Invalid IP')
      )
      .catch(err => alert(err))
  }

  useEffect(() => {  
    Promise.resolve(fetchData('')).then((res) => {
      console.log({ res });
      setUserLocation(
        Object.assign({}, { query: 'Your location' }, res.data)) });
  }, []);

  return (
    <div className="App">
      <div className="SearchHistory"> 
        <SearchHistory data={searches} />
      </div>
      <div className="SearchResults">
        <SearchDetails variable={userLocation} keys={keys} />
        <div className="SearchBar">
          <SearchBar query={searches} onAdd={findLocation} />  
        </div>
        <SearchDetails variable={searches[0]} keys={keys} />
      </div>
    </div>
  );
}

export default App;
