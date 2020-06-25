
import React, { Component } from "react"
import Filter from "./Filter"
let employees = [
    {
        id: 1,
        firstName: "Andy",
        lastName: "Brook",
        occupation: "Intern"
    },
    {
        id: 2,
        firstName: "Brian",
        lastName: "Chase",
        occupation: "Management"
    },
    {
        id: 3,
        firstName: "Jonathan",
        lastName: "Davis",
        occupation: "Sales"
    },
    {
        id: 4,
        firstName: "William",
        lastName: "Smith",
        occupation: "Food delivery"
    },
    {
        id: 5,
        firstName: "Brook",
        lastName: "Johnson",
        occupation: "Recruitment"
    },
    {
        id: 6,
        firstName: "Chip",
        lastName: "Reeds",
        occupation: "Cashier"
    }
]
let sortCase = {}
let filteredArray = {};

//sorts , and/or filters the "employees" as well as displays a table of them.
class List extends Component {
    state = {
        employees,
        filteredArray,
        sortCase,
        filter: "",
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
            )),
            filteredArray: employees
        }
    }
    //filter
    handleFilterChange = event => {
        const name = event.target.name
        const value = event.target.value
        console.log("this is name", event.target.name)
        //filters based on input string
        var filteredEmployee;
        if (value) {
            filteredEmployee = employees.filter(function (e) {

                let key = Object.keys(e)[1]
                return e[key].toUpperCase().includes(event.target.value.toUpperCase())
            })
        }
        else {
            filteredEmployee = employees
            console.log("else")
        }
        console.log(filteredEmployee)
        this.setState({
            filteredArray: filteredEmployee,
            employeeArray: filteredEmployee.map(employee => (
                <tr className="" key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.occupation}</td>
                </tr>
            ))
        });
        console.log("this is filtered Array", this.state.filteredArray)
    };
    //sort
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
        //changes state to update the table with sorted information
        this.setState((state, props) => ({
            employeeArray: state.filteredArray.sort(compareString).map(employee => (
                <tr className="" key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.occupation}</td>
                </tr>
            ))
        }));


    }

//returns the table and filter input box
    render() {
        return (
            <div>
                <Filter
                    search={this.state.search}
                    handleFilterChange={this.handleFilterChange}
                />
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
            </div>
        );
    }
}
export default List