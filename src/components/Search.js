import React from "react";

import "./partials/Header.css"
const Search = ({ searchParam, onChange }) => {
    const ref = React.createRef(null);

    return (
        <div className="topnav">
             <input type="text" ref={ref}  value={searchParam}  onChange={onChange} placeholder="Search restaurant by city.."/>

            </div>
    )
};

export default Search;