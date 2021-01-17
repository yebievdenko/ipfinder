import React from 'react';
import Map from './Map.jsx';
import LocationDetails from './LocationDetails.jsx';
import NoData from './NoData.jsx';


export default function SearchDetails ({ variable, keys }) {
    return ( 
        <div className="SearchDetails">
          {
            variable ?
              <>
                <div className="Map">
                  <Map data={variable} />
                </div>
                <div className="LocationDetails">
                  <LocationDetails keys={keys} data={variable} /> 
                </div>
              </>
            : <NoData />
          }
        </div>
    );
}