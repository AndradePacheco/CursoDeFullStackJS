import React,{Fragment,useState} from "react";

const Form = (props) => {
    const initialState = {
        name: ""
    }

    const [fields, setFields] = useState(initialState);
    
    const changeFields = (e) => setFields({
        ...fields,
        [e.target.name]:[e.target.value]
    })

    const handleSubmit = (e) => {
        props.addSattelite(fields)
        e.preventDefault();
        setFields(initialState);
    }


    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sattelite">Adicionar novo satélite: </label>
                <input type="text" id="sattelite" name="name" value={fields.name} onChange={changeFields} />
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;