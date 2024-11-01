import { useState } from "react"

export default function Team(){
   
const [team, setTeam]=useState(11)


const handleAddPlayer = () => {
    setTeam(team + 1)
}
const handleRemovePlayer = () => {
  const  newTeam=team -1;
    setTeam(newTeam);
}
   const teamStyle={
    margin:"15px",
    padding:"20px",
    border :"2px solid purple",
    borderRadius:"12px",
  

   }
   
   
   
    return (
       <div style={teamStyle}>
        <h3 style={{margin:"12px"}}>Players:{team}</h3>
   
        <button onClick={handleAddPlayer}>Add </button>
      <button onClick={handleRemovePlayer}>Remove</button>
       </div>
    )
}