import React, { useState } from 'react';
import './App.css';
import TeamMember from './TeamMember';
import Form from "./Form"

function App() {

  const [members, setMembers]= useState([
    {
      id: 1,
      title: "To be determined",
      body: "Your guess is better than mine"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: members.length + 1,
      title: member.title,
      body: member.body
    };

    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member Submission Form</h1>
      </header>
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
