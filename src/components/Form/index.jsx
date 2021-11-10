import React, { useState } from 'react';
import { RepoContainer } from '../RepoContainer'

export const Form = () => {
    const [ username, setUsername ] = useState("");
    const [ submit, setSubmit ] = useState(false);

    const handleInput = (e) => {
        setUsername(e.target.value);
        console.log(username);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        // setSubmit(false);
        console.log(submit);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your GitHub username:</label>
                <input onChange={handleInput} value={username} type="text" name="username"/>
                <input type="submit" value="Get repos" />
            </form>
            {submit && <RepoContainer username={username}/>}
        </>
    )
}