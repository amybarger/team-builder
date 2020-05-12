import React, { useState } from "react";

const Form = props => {

    const [member, setMember] = useState({
        title: "",
        body: ""
    });

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]:
        event.target.value });
        console.log(member);
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ title: "", body: ""});
    };

    return (
        <form onSubmit={submitForm}>
        <label htmlFor="employee">Employee Card</label>
            <input 
                onChange={handleChanges}
                id="employee"
                type="text"
                name="employee"
                placeholder="Please enter your name"
                value={member.title}
            />
        <label htmlFor="email">Email</label> 
            <input
            onChange={handleChanges}
                id="email"
                type="text"
                name="email"
                placeholder="Please enter your email" 
                value={member.body}
            />

        <label htmlFor="role">Role</label>
            <input 
                id="role"
                type="text"
                name="role"
                placeholder="Please enter your role"    
            />
            
        <button type="submit">Submit</button>
        </form>
    )
}
export default Form;