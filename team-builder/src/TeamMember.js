import React from 'react';

const teamStyle = {
  color: '',
  background: 'slateblue',
  width: '15%',
  padding: '5%',
  fontSize: '20px',
  marginLeft: '38%',
  
};

const TeamMember = props => {
  
  return (
    <div className="team-members">
      {props.members.map( member => (
        <div className="member" key={member.id} div style={teamStyle}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
          </div>
          ))}
        
</div>
  )
};
  
export default TeamMember;