import React, { useState } from "react";
import {StarIcon, RepoForkedIcon, IssueOpenedIcon} from '@primer/octicons-react';
import { Updated } from '../Updated';
import './style.css'

export const RepoBox = ({link, name, visibility, description, stars, forks, issues, updated}) => {
    const [ stats, setStats ] = useState(false);

    const showStats = () => setStats((state) => ! state);

    const changeButtonText = () => {
        if(stats){
            return 'Hide Stats'
        } else {
            return 'Show Stats'
        }
    }

    return (
        <section className="repoItem">
            <h2><a href={link}>{name}</a></h2><span className="visible">{visibility}</span>
            <p>{description}</p>
            <button onClick={showStats}>{changeButtonText()}</button>
            { stats && <p><StarIcon /> {stars} <RepoForkedIcon className="icon" /> {forks} <IssueOpenedIcon className="icon" /> {issues} <Updated date={updated}/></p>}
        </section>
    )
}