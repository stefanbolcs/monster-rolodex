import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    //if you dont think you need state or use lifecycle methods just use functional component

    <input 
    type='search' 
    placeholder={placeholder} 
    className="search"
        onChange={ handleChange }
    ></input>

)
