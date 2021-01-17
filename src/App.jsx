import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchHistory from './SearchHistory.jsx';
import SearchBar from './SearchBar.jsx';
import SearchDetails from './SearchDetails.jsx';

import './Styles.css';

const access_key = 'c741c05cf1c8219f39ec390de4bd987e';
const ipstackUrl = 'http://api.ipstack.com/';
const keys = ['query', 'ip', 'type', 'continent_code', 'continent_name', 'country_code', 'country_name', 'region_code', 'region_name', 'city', 'zip', 'latitude', 'longitude'];


function App() {

  const [searches, setSearches] = useState([]);
  const [userLocation, setUserLocation] = useState(null);


  const fetchData = async (url) => {
    return await axios(
      ipstackUrl + url + '?access_key=' + access_key + '&fields=' + keys.toString()
    );
  }

  const findLocation = (query) => {
    Promise.resolve(fetchData(query)).then((res) => 
      res.data.latitude && res.data.longitude ?
      setSearches(_.concat([Object.assign({}, { query }, res.data)], searches))
      : alert('No such location')
      )
      .catch(err => alert(err))
  }

  useEffect(() => {  
    Promise.resolve(fetchData('check')).then((res) =>
      setUserLocation(
        Object.assign({}, { query: 'Your location' }, res.data)));
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
