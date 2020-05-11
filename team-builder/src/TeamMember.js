import React, { useState } from 'react';

function TeamMember() {
  const [member, setMember]= useState();
  return (
    <div className="team-members">
      {setMember={
        "nameOne": "Karen Managger",
        "nameTwo": "Phillip Driver",
        "nameThree": "Dana Dear"
      }};
    </div>
  )
};
console.log("member", member)
  
export default TeamMember;