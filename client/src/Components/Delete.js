import React from 'react';
import axios from 'axios';

export default props => {
    const {playerId, successCallback} = props;

    const DeletePlayer = e => {
        axios.delete('http://localhost:1336/api/players/' + playerId)
        .then(res => {
            console.log(res)
            successCallback();
        })
        .catch(res => {
            console.log(res);
        })
    }

    return(
        <a href ="#" onClick = {DeletePlayer}>Delete</a>
    )
}