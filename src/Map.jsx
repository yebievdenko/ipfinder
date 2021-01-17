import React from 'react';
import { Map, Marker } from 'pigeon-maps';

export default function MyMap ({ data }) {

    var position = [data.latitude, data.longitude];
    
    function mapTilerProvider(x, y, z, dpr) {
        return `https://c.tile.openstreetmap.org/${z}/${x}/${y}.png`;
      }

    return (
        <Map 
            provider={mapTilerProvider} 
            defaultCenter={position}
            center={position}
            defaultZoom={5}
        >
            <Marker 
                anchor={position}
                color='black'
            />
        </Map>
    );
}