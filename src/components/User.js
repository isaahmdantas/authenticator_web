import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";


function User({currUser, setCurrUser}) {
    const [show, setShow]=useState(true)
    if(currUser) 
        return (
            <div>
                Olá, {currUser.email}!
                <p>Logado com sucesso!</p>
                <Logout setCurrUser={setCurrUser}/>
            </div>
        )
    return (
        <div>
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>  
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} />
            }
        </div>
    )
}

export default User