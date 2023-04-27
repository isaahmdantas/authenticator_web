import logo from '../logo.png';

import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";


function User({currUser, setCurrUser}) {
    const [show, setShow]=useState(true)
    if(currUser) 
        return (
            <div className="px-4 py-5 my-5 text-center">
                <img src={logo} className="d-block mx-auto mb-4" alt="logo" width="72" height="72" />

                <h1 className="display-5 fw-bold text-body-emphasis">Olá, {currUser.email}!</h1>

                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 text-success">Logado com sucesso!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Logout setCurrUser={setCurrUser}/>
                    </div>
                </div>
                
            </div>
        )
    return (
        <div className="row">
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>  
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} />
            }
        </div>
    )
}

export default User