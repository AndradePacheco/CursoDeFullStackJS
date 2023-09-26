import React,{Fragment,useState} from "react";

const Form = (props) => {
    const initialState = {
        name: "",
        description: "",
        link: "",
        img_url: ""
    }

    const [fields, setFields] = useState(initialState);
    
    const changeFields = (e) => setFields({
        ...fields,
        [e.target.name]:[e.target.value]
    })

    const handleSubmit = (e) => {
        props.addPlanet(fields)
        e.preventDefault();
        setFields(initialState);
    }


    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                </div>
                <div>
                    <input type="text" name="name" id="name" value={fields.name} onChange={changeFields}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                </div>
                <div>
                    <textarea type="textarea" name="description" id="description" value={fields.description} onChange={changeFields}/>
                </div>
                <div>
                    <label htmlFor="link">Link: </label>
                </div>
                <div>
                    <input type="text" id="link" name="link" value={fields.link} onChange={changeFields}/>
                </div>
                <div>
                    <label htmlFor="img_url">Image URL: </label>
                </div>
                <div>
                    <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange={changeFields}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;