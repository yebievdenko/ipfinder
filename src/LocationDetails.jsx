import React from 'react';

export default function LocationDetails ({ data, keys }) {

    return (
        <table>
                {
                    keys.map(
                        key => 
                        <tr key={key}>
                            <td>
                                {key.toString()}:
                            </td>
                            <td>
                                {data[key] || 'no data'}
                            </td>
                        </tr>
                    )
                }
            </table>
    );
}