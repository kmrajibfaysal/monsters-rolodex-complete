/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (
    <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={props.onSearchChange}
    />
);
