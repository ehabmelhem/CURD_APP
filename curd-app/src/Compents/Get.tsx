import React,{useState} from "react"

const Get: React.FC = () => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const submitHandler=(e:any)=>{
        e.preventDefault();

    }
    return (
        <form className="flex" >
            <input onChange={(e)=>{
                setUser(e.target.value)
            }} placeholder="Insert password" type="text" />
            <br />
            <input onChange={(e)=>{
                setPass(e.target.value)
            }}placeholder="Insert password" type="password" />
            <br />
            <input onClick={submitHandler} className="submit" type="submit" value="Get password" />
        </form>
    )
};

export default Get;