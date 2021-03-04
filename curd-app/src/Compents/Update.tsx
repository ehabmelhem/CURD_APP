import React, { useState } from "react"

const Update: React.FC = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const submitHandler = async (e: any) => {
        e.preventDefault();
        await fetch("/update-password", {
            method: 'PUT', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify({ username:user, password:pass, newPassword:newPass })
        }).then(r => r.json()).then(data => {
            if(data.index===1){
                alert("update has been success full")
            }
            else{
                alert("you have to insert right valid to update")
            }
        })
    }
    return (
        <form className="flex">
            <input onChange={(e) => {
                setUser(e.target.value)
            }} placeholder="Insert username" type="text" />
            <br />
            <input onChange={(e) => {
                setPass(e.target.value)
            }} placeholder="Insert password" type="password" />
            <br />
            <input
                onChange={(e) => {
                    setNewPass(e.target.value)
                }} placeholder="Insert new password" type="password" />
            <br />
            <input disabled={!user || !pass || !newPass} onClick={submitHandler} className="submit" type="submit" value="Update password" />
        </form>
    )
};

export default Update;