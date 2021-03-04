import React, { useState } from "react"

const Delete: React.FC = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const submitHandler = async (e: any) => {
        e.preventDefault();
        await fetch("/delete-user", {
            method: 'DELETE', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify({ username: user, password: pass })
        }).then(r => r.json()).then(data => {
            if (data.index === -1) {
                alert("you have to insert right valid")
            } else {
                alert("Delete has been success full")
            }
        })

    }
    return (
        <form className="flex">
            <input onChange={(e) => {
                setUser(e.target.value)

            }} placeholder="Insert user" type="text" />
            <br />
            <input onChange={(e) => {
                setPass(e.target.value)

            }} placeholder="Insert password" type="password" />
            <br />
            <input disabled={!user || !pass} onClick={submitHandler} className="submit" type="submit" value="Delete user" />
        </form>
    )
};

export default Delete;