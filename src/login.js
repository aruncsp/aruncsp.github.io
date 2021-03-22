import React from 'react';

function Login(){
    return(
        <div>
            <p><label>User Name: <input type="text"/></label></p>
            <p><label>Password: <input type="text"/></label></p>
            <p><button onClick={login}>Login</button></p>
        </div>
    );
}