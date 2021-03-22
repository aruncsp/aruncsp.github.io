import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function EmployeeEdit(props) {
    const [employee, setEmployee] = useState([]);

    function updateEmployee(){

    }
    useEffect(() => {
        fetch('http://localhost:58196/api/employee/' + props.match.params.Id)
            .then(res => res.json())
            .then(j => setEmployee(j));
    }, []);

    return (
        <div>
            <p><label>Id: <input type='text' value={employee.ID} /></label></p>
            <p><label>Name: <input type='text' value={employee.Name} /></label></p>
            <p><label>Location: <input type='text' value={employee.City} /></label></p>
            <p><label>Salary: <input type='text' value={employee.Salary} /></label></p>
            <p><button onClick={updateEmployee}>Update</button> </p>
        </div>
    );
}

export default EmployeeEdit