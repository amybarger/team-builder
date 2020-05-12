import React from 'react';

const TeamMember = props => {
  
  return (
    <div className="team-members">
      {props.members.map( member => (
        <div className="member" key={member.id}>
          <h2>{member.title}</h2>
          <p>{member.body}</p>
          </div>
          ))}
    </div>
  )
};
  
export default TeamMember;