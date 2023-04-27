function Logout({setCurrUser}) {
    const logout=async (setCurrUser)=>{
        try {
            const response=await fetch("https://sheltered-falls-60534.herokuapp.com/users/sign_out",{
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
            <input type="button" value='Deslogar' onClick={handleClick}  className="btn btn-primary btn-lg px-4 gap-3" />
        </div>
    )
}

export default Logout