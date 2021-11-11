import React, { useState, useEffect } from 'react';
import { RepoBox } from '../RepoBox';
import axios from 'axios';
import './style.css';

export const RepoContainer = ({username}) => {
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        const fetchRepos = async() => {
            try {
                const results = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepos(results.data);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchRepos();
    },[username])

    const renderRepos = () => repos.map((r, i) => <RepoBox key={i} link={r.html_url} name={r.name} visibility={r.visibility} description={r.description} stars={r.stargazers_count} forks={r.forks} issues={r.open_issues} updated={r.updated_at}/>)

    return (
        <article className="repoContainer">
            {renderRepos()}
        </article>
    )
}