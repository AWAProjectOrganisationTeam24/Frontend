import React from "react";

import "./Header.css"
const Search = ({ searchParam, onChange ,placeholder}) => {
    const ref = React.createRef(null);

    return (
        <div className="topnav">
             <input type="text" ref={ref}  value={searchParam}  onChange={onChange} placeholder={placeholder}/>

            </div>
    )
};

export default Search;