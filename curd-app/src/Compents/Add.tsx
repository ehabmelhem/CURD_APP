import React ,{useState} from "react"

type props = {
    name?: string
}

const Add: React.FC<props> = ({ name }) => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const submitHandler=(e:any)=>{
        e.preventDefault();

    }
    return (
        <form className="flex">
            <input onChange={(e)=>{
                setUser(e.target.value)
            }} placeholder="add user" type="text"/>
            <br/>
            <input onChange={(e)=>{
                setPass(e.target.value)
            }} placeholder="add password" type="password"/>
            <br/>
            <input onClick={submitHandler}  className="submit" type="submit" value="ADD user"/>
        </form>
    )
};

export default Add;