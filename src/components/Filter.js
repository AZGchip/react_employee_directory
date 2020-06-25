import React from "react"

//returns textbox for array filtering
function Filterby(props) {
    return <div className="container">
        <div className=" row">
            <input type="text" onChange={props.handleFilterChange} name="filter" value={props.search} className="" id="filter" placeholder="Filter by Firstname" />
        </div>
    </div>
}
export default Filterby
