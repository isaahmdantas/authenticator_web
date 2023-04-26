function Logout({setCurrUser}) {
    const logout=async (setCurrUser)=>{
        try {
            const response=await fetch("http://localhost:3001/users/sign_out",{
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": 'Bearer ' + localStorage.getItem("token")
                },
            })
            const data=await response.json()
            if(!response.ok) throw data.error
            localStorage.removeItem("token")
            setCurrUser(null)
        } catch (error) {
            console.log("error", error);
        }
    }
    const handleClick=e=>{
        e.preventDefault()
         logout(setCurrUser)
    }
    return (
        <div>
            <input type="button" value='Deslogar' onClick={handleClick}/>
        </div>
    )
}

export default Logout