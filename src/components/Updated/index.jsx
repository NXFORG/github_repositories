import React from "react";
import moment from 'moment';

export const Updated = ({date}) => {
    const getDate = (date) => {
        let formatDate = moment(date).fromNow();
        return `Updated ${formatDate}`;
    }
    return (
        <span className="icon" >{getDate(date)}</span>
    )
}