import React, { useState } from "react"

type props = {
    name?: string
}

const Add: React.FC<props> = ({ name }) => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const submitHandler = async (e: any) => {
        e.preventDefault();
        await fetch("/add-user", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ username: user, password: pass })
        }).then(r => r.json()).then(data => {
            if (data.index === 1) {
                alert("add user success full")
            }
            else {
                alert("you have to insert another inputs")
            }
        })
    }
    return (
        <form className="flex">
            <input onChange={(e) => {
                setUser(e.target.value)
            }} placeholder="add user" type="text" />
            <br />
            <input onChange={(e) => {
                setPass(e.target.value)
            }} placeholder="add password" type="password" />
            <br />
            <input disabled={!user || !pass} onClick={submitHandler} className="submit" type="submit" value="ADD user" />
        </form>
    )
};

export default Add;