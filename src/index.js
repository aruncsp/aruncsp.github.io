import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Employee from './employee';
import Department from './department';
import EmployeeEdit from './employeeEdit'
import { Link, BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';



const auth = {
    isLoggedIn: false,
    onAuth() { this.isLoggedIn = true },
    getLogInStatus() { return this.isLoggedIn; }
}
function SecuredRoute(props){
    return(
      <Route path={props.path} render={data=>auth.getLogInStatus()?(
        <props.component {...data}></props.component>):
        (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    )
  }

function LogIn(props) {
    const [loginData, setloginData] = useState({ userName: '', password: '' });
    function changeLogInData(e) {
        setloginData({ ...loginData, [e.target.name]: e.target.value })
    }
    function onLogin() {
        fetch('http://localhost:58196/api/employee/auth?username=Keyboard&password=mouse',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(loginData)
          })
            .then(res => res.json())
            .then(j => {
                if (j) {
                    auth.onAuth();
                    props.history.push('/home')
                } else {
                    alert('invalid');
                }
            });
    }

    return (
        <div>
            <p><label>User Name: <input type="text" value={loginData.userName} name="userName" onChange={changeLogInData} /></label></p>
            <p><label>Password: <input type="text" value={loginData.password} name="password" onChange={changeLogInData} /></label></p>
            <p><button onClick={onLogin}>Login</button></p>
        </div>
    );
}

function Home(props) {
    function onNext() {
        props.history.replace('/editprofile');
    }
    return (
        <div>
            <h2>Welcome to Home...</h2>
            <button onClick={onNext}>Next</button>
        </div>
    );
}
function EditProfile() {
    return (
        <div>
            <h2>Welcome to Edit Profile...</h2>
        </div>
    );
}
function App() {
    return (
        <div>
            <h2>Welcome to App Component...</h2>
            <Link to="/">LogIn</Link>&nbsp;&nbsp;
            <NavLink to="/home" activeClassName="testClass">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="/editprofile" activeClassName="testClass">Edit Profile</NavLink>

            <Switch>
                <Route exact path="/" component={LogIn}></Route>
                <SecuredRoute path="/home" component={Home}></SecuredRoute>
                <SecuredRoute path="/editprofile" component={EditProfile}></SecuredRoute>
            </Switch>

        </div>
    );
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
