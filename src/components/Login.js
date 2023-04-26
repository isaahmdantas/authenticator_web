import { useRef } from "react"

function Login({setCurrUser, setShow}) {
  const formRef=useRef()

    const login=async (userInfo, setCurrUser)=>{
        const url="https://sheltered-falls-60534.herokuapp.com/users/sign_in"
        try{
            const response=await fetch(url, {
                method: "post",
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            const data=await response.json()
            if(!response.ok) 
            throw data.error
            localStorage.setItem("token", data.accessToken)
            setCurrUser(data)        
        }catch(error){
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
        login(userInfo, setCurrUser)
        e.target.reset()
    }

    const handleClick=e=>{
        e.preventDefault()
        setShow(false)
    }

    return(
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                E-mail: <input type="email" name='email' placeholder="email" />
                <br/>
                Senha: <input type="password" name='password' placeholder="password" />
                <br/>
                <input type='submit' value="Login" />
            </form>
            <br />
            <div>Não registrado ainda, <a href="#signup" onClick={handleClick} >Inscrever-se</a> </div>
        </div>
    )
}

export default Login