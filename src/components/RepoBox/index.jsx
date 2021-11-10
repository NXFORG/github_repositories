import React, { useState } from "react";

export const RepoBox = ({name, visibility, description, stars, forks, issues, updated}) => {
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
        <section>
            <h2>{name}</h2><span>{visibility}</span>
            <p>{description}</p>
            <button onClick={showStats}>{changeButtonText()}</button>
            { stats && <p>Stars: {stars} Forks: {forks} Issues: {issues} Updated: {updated}</p>}
        </section>
    )
}