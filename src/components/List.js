import React from "react"
import { render } from "@testing-library/react";
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
    }
]
let sortCase = {}




//sort by currentsort





class List extends React.Component {
    state = {
        employees,
        sortCase
    }
    constructor(props) {
        super(props)
        this.state = {
            employeeArray: employees.map(employee => (
                <tr className="" key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.occupation}</td>
                </tr>
            ))
        }
    }
    handleSortChange = (param) => {
        // y/n is inverted
        let invert;
        // key selection when sorting
        let type;

        //If this.state.sortCase is not undefined AND sortCase = param, changes sortCase to not match next duplicate button press. sets invert to true
        if (this.state.sortCase && this.state.sortCase === param) {
            this.setState({ sortCase: param + "-invert" })
            invert = true;
        }
        // if sortcase is undefined or does not match params, sets sortCase to equal param. sets invert to false
        else {
            this.setState({ sortCase: param })
            invert = false;
        }
        
        //compares an array of objects and sorts objects based on selected type using given param.
        function compareString(a, b) {
            switch (param) {
                case "firstname":
                    type = 1;
                    break;
                case "lastname":
                    type = 2;
                    break;
                case "occupation":
                    type = 3;
                    break;
                default:
                    type = 1;
                    invert = false;
            }
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
        this.setState((state, props) => ({
            employeeArray: employees.sort(compareString).map(employee => (
                <tr className="" key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.occupation}</td>
                </tr>
            ))
        }));

        console.log(employees.sort(compareString))
    }


    render() {
        return (
            <table className=" container  table table-bordered table-striped">
                <thead className="thead">
                    <tr className="table-secondary">
                        <th onClick={() => this.handleSortChange("firstname")}>First Name</th>
                        <th onClick={() => this.handleSortChange("lastname")}>Last Name</th>
                        <th onClick={() => this.handleSortChange("occupation")}>Occupation</th>
                    </tr>
                </thead>
                <tbody className="">
                    {this.state.employeeArray}
                </tbody>
            </table>
        );
    }
}
// const listArray = [
//         {
//             firstName: "Andrew",
//             lastName: "Zinski",
//             occupation: "student"
//         },
//         {
//             firstName: "Brian",
//             lastName: "Kilpatrick",
//             occupation: "Freelance Pizza Web Designer"
//         },
//         {
//             firstName: "Jonathan",
//             lastName: "Zinski",
//             occupation: "Software Sales"
//         },
//         {
//             firstName: "bill",
//             lastName: "bob",
//             occupation: "fry cook"
//         }
//     ]
//     function buildTable() {
//         let list;
//         for (let i = 0; i < listArray.length; i++) {
//             list += (
//                 <tr>
//                     <td>{listArray[i].firstName}</td>
//                     <td>{listArray[i].lastName}</td>
//                     <td>{listArray[i].occupation}</td>
//                 </tr>)
//         }
//         return list
//     }
//     let name
//     let employeeTable = (<table>
//         <thead></thead>
//         <tr>
//             <th>
//                 <a onClick={() => props.handleDisplayChange("Home")}>
//                 First Name
//                 </a>
//             </th>
//             <th>Last Name</th>
//             <th>Occupation</th>
//         </tr>
//         {buildTable()}
//     </table>)





export default List