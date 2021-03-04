import React,{useState} from "react"

const Delete: React.FC = () => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const submitHandler=(e:any)=>{
        e.preventDefault();

    }
    return (
        <form className="flex">
        <input onChange={(e)=>{
            setUser(e.target.value)

        }} placeholder="Insert user" type="text"/>
        <br/>
        <input onChange={(e)=>{
            setPass(e.target.value)

        }} placeholder="Insert password" type="password"/>
        <br/>
        <input onClick={submitHandler}  className="submit" type="submit" value="Delete user"/>
    </form>
    )
};

export default Delete;