import React from "react";

const Form = props => {
    return (
        <form onSubmit={event => {
            event.preventDefault();
        }}>
        <label htmlFor="employee">Employee Card</label>
        <input 
            id="employee"
            type="text"
            name="employee"
            placeholder="Please enter your name"
        />
        <label htmlFor="email">email</label> 
            <input
                id="email"
                type="text"
                name="email"
                placeholder="Please enter your email" 
            />

        <label htmlFor="role">role</label>
            <input 
                id="role"
                type="text"
                name="role"
                placeholder="Please enter your role"    
            />
            
        />
        </form>
    )
}