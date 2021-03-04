import React,{useState} from "react"

const Update: React.FC = () => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const [newPass,setNewPass]=useState("")
    const submitHandler=(e:any)=>{
        e.preventDefault();

    }
    return (
        <form className="flex">
        <input onChange={(e)=>{
            setUser(e.target.value)
            console.log(e.target.value)
        }} placeholder="Insert password" type="text"/>
        <br/>
        <input  onChange={(e)=>{
            setPass(e.target.value)
        }} placeholder="Insert password" type="password"/>
        <br/>
        <input 
         onChange={(e)=>{
            setNewPass(e.target.value)
        }} placeholder="Insert new password" type="password"/>
        <br/>
        <input onClick={submitHandler} className="submit" type="submit" value="Update password"/>
    </form>
    )
};

export default Update;