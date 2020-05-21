import React, {useState, setState} from 'react';

const PlayerForm = props => {
    const {initialName, initialPosition, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position});
    }

    return(
        <>
            <div className="row">
                <form onSubmit = {onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="string" value ={name} name="name" onChange = {(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input type="string" value ={position} name="position" onChange = {(e) => setPosition(e.target.value)}/>
                    </div>
                    <div className ="form-group">
                        <input className="btn btn-primary" type="submit"/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default PlayerForm;