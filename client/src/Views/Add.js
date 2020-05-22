import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import PlayerForm from '../Components/PlayerForm';
import axios from 'axios';

export default () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    const addPlayer = ({name, position}) => {
        axios.post('http://localhost:1336/api/players/addplayer', {
            name,
            position
        })
            .then(res => {
                
                setName("")
                navigate("/players/list")
                console.log(res)
            })
            .catch(err=>{
                console.log(err.response.data)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return(
        <>
        <div className ="row">
            <div className="col-md h1">
                <Link to = {"/players/list"}>List </Link>|
                <Link to = {"/players/addplayer"}> Add Player</Link>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <h2>Add A Player</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    {errors.map((err, index) => <p key = {index}>{err}</p>)}
                    <PlayerForm onSubmitProp = {addPlayer} initialName = {name} initialPosition = {position}/>
                </div>
            </div>
        </div>
        </>
    )
}