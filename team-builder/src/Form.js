import React, { useState } from "react";

const Form = props => {

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]:
        event.target.value });
        console.log(member);
    };

    const submitForm = event => {
        event.preventDefault();
        props.addMember(member);
        setMember({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
            <input 
                onChange={handleChanges}
                id="name"
                type="text"
                name="name"
                placeholder="Please enter your name"
                value={member.name}
            />
        <label htmlFor="email">Email</label> 
            <input
                onChange={handleChanges}
                id="email"
                type="text"
                name="email"
                placeholder="Please enter your email" 
                value={member.email}
            />

        <label htmlFor="role">Role</label>
            <input 
                onChange={handleChanges}
                id="role"
                type="text"
                name="role"
                placeholder="Please enter your role"
                value={member.role}    
            />
            
        <button type="submit">Submit</button>
        </form>
    )
}
export default Form;