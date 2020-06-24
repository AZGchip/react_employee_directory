import React from "react";
import List from "./List"

function Container(props) {
    
    return <List employees={props.employees} />;
}
export default Container