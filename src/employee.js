import react from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

function Employee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:58196/api/employee')
            .then(res => res.json())
            .then(j => { setEmployees(j); });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.ID}>
                            <td>{emp.ID}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.City}</td>
                            <td>{emp.Salary}</td>
                            <td><a href={'/employeeEdit/' + emp.ID}>Edit</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;
