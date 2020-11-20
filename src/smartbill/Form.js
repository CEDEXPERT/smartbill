import React, {useEffect, useState} from "react"
import LabeledInput from "./LabeledInput";

const initialState = {
    name: '',
    doc4111: '',
    doc401: '',
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
            <LabeledInput name="doc4111" label="Fisier 4111" onChange={onChange}/>
            <LabeledInput name="doc401" label="Fisier 401" onChange={onChange}/>
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
