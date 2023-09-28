import React, {Fragment, useState} from 'react';

const initialState = {
    name:""
}
const Form = (props) => {
    const [fields, setFields] = useState(initialState);

    const changeField = (e) => {
        setFields({
            ...fields,
            [e.target.name]:[e.target.value]
        })
    }

    const handleSubmit = (e) => {
        props.addSatellite(fields);
        e.preventDefault();
        setFields(initialState);
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor='addSatellite'>Satélite: </label>
                <input onChange={changeField} type='text' name='name' id='addSatellite' value={fields.name} />
                <input type='submit' value="Adicionar Satélite"/>
            </form>
        </Fragment>
    )
}

export default Form;