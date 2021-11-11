import React, { useState } from 'react';
import { RepoContainer } from '../RepoContainer';
import './style.css';

export const Form = () => {
    const [ username, setUsername ] = useState("");
    const [ submit, setSubmit ] = useState(false);

    const handleInput = (e) => {
        setUsername(e.target.value);
        setSubmit(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    }

    return (
        <div className="form">
            <h1>Welcome</h1>
            <form role="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your GitHub username:</label>
                <br />
                <input role="textbox" onChange={handleInput} value={username} type="text" name="username"/>
                <input type="submit" value="Get repos" />
            </form>
            { submit && <RepoContainer username={username}/>}
        </div>
    )
}