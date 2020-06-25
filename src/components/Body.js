import React from "react";
import List from "./List"


function Container(props) {

    return <div>
        <List employees={props.employees} />
    </div>;
}
export default Container