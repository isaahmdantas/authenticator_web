import { useRef } from "react"

function Signup({setCurrUser, setShow}) {
    const formRef = useRef()
    const signup=async (userInfo, setCurrUser)=>{
        const url="http://localhost:3001/users"
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
        <form ref={formRef} onSubmit={handleSubmit}>
            E-mail: <input type="email" name='email' placeholder="email" />
            <br/>
            Senha: <input type="password" name='password' placeholder="password" />
            <br/>
            <input type='submit' value="Submit" />
        </form>
        <br />
        <div>Já registrado, <a href="#login" onClick={handleClick} >Conecte-se</a> aqui.</div>
    </div>
    )
}
export default Signup