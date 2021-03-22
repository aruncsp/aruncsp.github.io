import react from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

function Department() {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:58196/api/department')
            .then(res => res.json())
            .then(j => { setDepartments(j); });
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>DeptID</th>
                        <th>DeptName</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(d => (
                        <tr key={d.DeptID}>
                            <td>{d.DeptID}</td>
                            <td>{d.DeptName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Department;
