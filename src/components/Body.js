import React from "react";
import List from "./List"
const employees = [
    {
        id:1,
        firstName: "Andrew",
        lastName: "Zinski",
        occupation: "student"
    },
    {
        id:2,
        firstName: "Brian",
        lastName: "Kilpatrick",
        occupation: "Freelance Pizza Web Designer"
    },
    {
        id:3,
        firstName: "Jonathan",
        lastName: "Zinski",
        occupation: "Software Sales"
    },
    {
        id:4,
        firstName: "Wesley",
        lastName: "Babcock",
        occupation: "Food delivery"
    }
]
function Container() {
    return <List employees={employees} />;
}
export default Container