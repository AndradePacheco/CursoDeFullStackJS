import React, {Fragment,useState} from 'react';

const initialState = {
    name: "",
    description: "",
    link: "",
    img_url: ""
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
        props.addPlanet(fields);
        e.preventDefault();
        setFields(initialState);
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' id='name' value={fields.name} onChange={changeField}/>
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <textarea name='description' id='description' value={fields.description} onChange={changeField}></textarea>
                </div>
                <div>
                    <label htmlFor='link'>link: </label>
                    <input type='text' name='link' id='link' value={fields.link} onChange={changeField}/>
                </div>
                <div>
                    <label htmlFor='img_url'>img_url: </label>
                    <input type='text' name='img_url' id='img_url' value={fields.img_url} onChange={changeField}/>
                </div>
                <input type='submit'/>
            </form>
        </Fragment>
    )
}

export default Form;