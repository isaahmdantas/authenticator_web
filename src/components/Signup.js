import logo from '../logo.png';

import { useRef } from "react"

function Signup({setCurrUser, setShow}) {
    const formRef = useRef()
    const signup=async (userInfo, setCurrUser)=>{
        const url="https://sheltered-falls-60534.herokuapp.com/users"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            localStorage.setItem('token', data.accessToken)
            setCurrUser(data)
        } catch (error){
            console.log("error", error)
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{ email: data.email, password: data.password }
        }
        signup(userInfo, setCurrUser)
        e.target.reset()
    }
    const handleClick=e=>{
        e.preventDefault()
        setShow(true)
    }
    return(
        <div>
            <form ref={formRef} onSubmit={handleSubmit} className="form-signin">
                <img src={logo} className="mb-4" alt="logo" width="72" height="72" />

                <h1 className="h3 mb-3 fw-normal">Faça seu Cadastro</h1>
                
                <div className="form-floating">
                    <label htmlFor="email" className="sr-only">E-mail</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="E-mail" />
                </div>

                <div className="form-floating">
                    <label htmlFor="password" className="sr-only">Senha</label>
                    <input type="password" name="password " id="password" class="form-control" placeholder="Senha" />
                </div>
    
                <button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">Cadastrar</button>
            </form>
            <br />
            <div>Já registrado, <a href="#login" onClick={handleClick} >Conecte-se</a> aqui.</div>
        </div>
    )
}
export default Signup


