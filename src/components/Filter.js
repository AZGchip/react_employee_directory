import React from "react"
function Filterby(props) {
    let employees = [
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
        },
        {
            id: 5,
            firstName: "Andrea",
            lastName: "Zinski",
            occupation: "recruitment"
        },
        {
            id: 5,
            firstName: "Steven",
            lastName: "Zinski",
            occupation: "network management"
        }
    ]


    // var filteredEmployee = employees.filter(function (e) {
    //     let strings = "Zinski"
    //     let key = Object.keys(e)[2]
    //     console.log(e[key])
    //     return e[key] === strings

    //   });

    return <div className="container">
        <div className=" row">

            <input type="text" onChange={props.handleFilterChange} name="filter" value={props.search} className="" id="filter" placeholder="Filter by Firstname" />

        </div>
    </div>
}
export default Filterby
