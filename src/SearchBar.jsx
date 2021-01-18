import React, { useState } from 'react';

export default function SearchBar ({ onAdd }) {

    const [inputValue, setInputValue] = useState('');

    function onSubmit (e) {
        e.preventDefault();
        onAdd(inputValue);
    }
    return (
        <form className={'Form'} onSubmit={(e) => onSubmit(e)}>
            <label>
                Enter IP:
            </label>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
            <input type="submit" value="Submit" /> 
        </form>
    );
}