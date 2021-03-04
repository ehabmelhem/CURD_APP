import React,{useState} from "react"

const Get: React.FC = () => {
    const [user,setUser]=useState("")
    const submitHandler= async(e:any)=>{
        e.preventDefault();
        await fetch(`/get-password?username=${user}`).then(r=>r.json()).then(data=>{
            if(data.index===-1){
                alert("insert right valids")
            }
            else{
                alert("password: "+data.password)
            }
        })
    }
    return (
        <form className="flex" >
            <input onChange={(e)=>{
                setUser(e.target.value)
            }} placeholder="Insert user" type="text" />
            <br />
      
            <input disabled={!user} onClick={submitHandler} className="submit" type="submit" value="Get password" />
        </form>
    )
};

export default Get;