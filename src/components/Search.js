import React from "react";

import "./Header.css"
const Search = ({ searchParam, onChange }) => {
    const ref = React.createRef(null);

    return (
        <div className="topnav">
             <input type="text" ref={ref}  value={searchParam}  onChange={onChange} placeholder="Cant find your favorite Meal Search.."/>

            </div>
    )
};

export default Search;