import React, { useState } from 'react';
import './App.css';
import TeamMember from './TeamMember';
import Form from "./Form"

function App() {

  const [members, setMembers]= useState([
    {
      id: 1,
      name: "Jack Black",
      email: "jblack@gmail.com",
      role: "Actor"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: members.length + 1,
      name: member.name,
      email: member.email,
      role: member,
    };

    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member Submission Form</h1>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <Form addMember={addMember} />
      <br></br>
      <br></br>
      <br></br>
      <TeamMember members={members} />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
