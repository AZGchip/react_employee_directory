import React from "react";
import List from "./List"
let employeeList = [
    {
        id: 1,
        firstName: "Andrew",
        lastName: "Zinski",
        occupation: "student"
    },
    {
        id: 2,
        firstName: "Brian",
        lastName: "Kilpatrick",
        occupation: "Freelance Pizza Web Designer"
    },
    {
        id: 3,
        firstName: "Jonathan",
        lastName: "Zinski",
        occupation: "Software Sales"
    },
    {
        id: 4,
        firstName: "Wesley",
        lastName: "Babcock",
        occupation: "Food delivery"
    }
]

let type;
let invert = false;
let w = "firstname"
switch (w) {
    case "firstname":
        type = 1;
        invert = false;
        break;
    case "firstname-invert":
        type = 1;
        invert = true;
        break;
    case "lastname":
        type = 2;
        invert = false;
        break;
    case "lastname-invert":
        type = 2;
        invert = true;
        break;
    case "occupation":
        type = 3;
        invert = false;
        break;
    case "occupation-invert":
        type = 3;
        invert = false;
        break;
    default:
        type = 1;
        invert = false;     
}

function compareString(a, b) {
    let key = Object.keys(a)[type]
    if (!invert) {
        if (a[key] > b[key]) {
            return 1
        }
        if (a[key] < b[key]) {
            return -1
        }
        return 0
    }
    else {
        if (a[key] < b[key]) {
            return 1
        }
        if (a[key] > b[key]) {
            return -1
        }
        return 0
    }
}
function Container(props) {
    let employees = employeeList;
    
        employees.sort(compareString)
    
    console.log(employees = employees.sort((a, b) => a.firstName.toUpperCase() - b.firstName.toUpperCase()))
    console.log("these are the employees", employees)
    return <List employees={employees} />;
}
export default Container