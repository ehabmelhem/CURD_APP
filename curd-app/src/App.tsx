import React,{useEffect} from 'react';
import './App.css';
import Add from "./Compents/Add"
import Get from "./Compents/Get"
import Delete from "./Compents/Delete"
import Update from "./Compents/Update"


const App: React.FC = () => {
  useEffect(()=>{
    const GetApi = async()=>{
        await fetch("/stam").then(r=>r.json()).then(data=>{
          console.log(data)
        })
    }
    GetApi()
  },[])
  return (
    <>
      <div className="app">

        {/* ADD */}
        <Add />
        {/* Get */}
        <Get />
        {/* update */}
        <Update />
        {/* Delete */}
        <Delete />
      </div>

    </>
  )
}

export default App;
