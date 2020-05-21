import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';



export default () => {
    const [name, setName]= useState();
    const [position, setPosition] = useState();
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function grabPlayer (){
        axios.get('http://localhost:1337/api/players/list')
            .then(res =>{
                console.log(res.data);
                setPlayer(res.data);
                setLoaded(true);
            })
    }

    useEffect (() => {grabPlayer()}, [])

    const removeFromDom =playerId => {
        setPlayer(player.filter(author => player._id != playerId));
        grabPlayer();
    }
    return (
        <>
        <div className ="row">
            <div className="col-md h1">
                <Link to = {"/players/list"}>List </Link>|
                <Link to = {"/players/addplayer"}> Add Player</Link>
            </div>
        </div>
        <div className ="row">
            <div className ="col-md">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player
                            .sort((a,b) => a.name > b.name ? 1: -1)
                            .map((player, i) =>{
                                return (<tr key = {i}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>Delete Method</td>
                                </tr>
                                )})}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}