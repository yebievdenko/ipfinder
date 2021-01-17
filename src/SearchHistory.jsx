import React from 'react';

export default function SearchHistory ({ data }) {

    return (
        <>
        <p>Search history:</p>
            {
                data.map(
                    (item, key) => <div key={key}>{item.query}</div>
                )
            }
        </>
    );
}