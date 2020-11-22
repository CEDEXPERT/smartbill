import React, {useEffect, useState} from "react"
import LabeledInput from "./LabeledInput";

const initialState = {
    name: '',
    doc401: '',
    doc4111: '',
    doc404: '',
    doc462: '',
    doc461: '',
    doc408: '',
    doc418: '',
    doc403: '',
    doc413: '',
    doc4091: '',
    doc4092: '',
    doc419: '',
    balanta: '',
    catalog: ''
}

const Form = ( { onGenerate }) => {
    const [inputs, setInputs] = useState(initialState)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const {name, balanta, doc401, doc4111, catalog } = inputs
        if (!name || !doc401 || !doc4111 || !balanta || !catalog) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [inputs])

    const generate = () => {
        onGenerate(inputs)
    }

    const onChange = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const reset = () => {
        setInputs(initialState)
        const els = document.getElementsByClassName('input')
        for (let i = 0; i < els.length; i++)
            els[i].value = null

    }

    return (
        <div className="form">
            <LabeledInput name="name" label="Nume(scurt, fara spatii)" type="text" onChange={onChange}/>
            <LabeledInput name="doc401" label="Fisier 401" onChange={onChange}/>
            <LabeledInput name="doc4111" label="Fisier 4111" onChange={onChange}/>
            <LabeledInput name="doc404" label="Fisier 404" onChange={onChange}/>
            <LabeledInput name="doc461" label="Fisier 461" onChange={onChange}/>
            <LabeledInput name="doc462" label="Fisier 462" onChange={onChange}/>
            <LabeledInput name="doc408" label="Fisier 408" onChange={onChange}/>
            <LabeledInput name="doc418" label="Fisier 418" onChange={onChange}/>
            <LabeledInput name="doc403" label="Fisier 403" onChange={onChange}/>
            <LabeledInput name="doc413" label="Fisier 413" onChange={onChange}/>
            <LabeledInput name="doc4091" label="Fisier 4091" onChange={onChange}/>
            <LabeledInput name="doc4092" label="Fisier 4092" onChange={onChange}/>
            <LabeledInput name="doc419" label="Fisier 419" onChange={onChange}/>
            <LabeledInput name="catalog" label="Fisier Catalog" onChange={onChange}/>
            <LabeledInput name="balanta" label="Fisier Balanta" onChange={onChange}/>

            <div className="buttonContainer">
                <button disabled={disabled} onClick={generate}>Import</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Form;
