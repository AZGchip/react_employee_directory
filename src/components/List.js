import React from "react"
function List(props) {
    let employeeArray = props.employees.map(employee => (
        <tr className="" key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.occupation}</td>
        </tr>
    ))
    if(this)
    return (
        <table className=" container  table table-bordered table-striped">
            <thead className="thead">
                <tr className="table-secondary">
                    <th className="th-hover" className = {props.currentSort === "first" ? "nav-link active" : "nav-link"} onClick={() => props.handleSortChange("first")}>First Name</th>
                    <th>Last Name</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody className="">
                {}
            </tbody>
        </table>
    );
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