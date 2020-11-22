import React, {useEffect, useState} from "react"
import LabeledInput from "./LabeledInput";
import {ACCOUNT_NUMBERS, ACCOUNTS_INITIAL_VALUE} from "../constants";

const initialState = {
    name: '',
    doc401: '',
    acc4111: '',
    acc404: '',
    acc462: '',
    acc461: '',
    acc408: '',
    acc418: '',
    acc403: '',
    acc413: '',
    acc4091: '',
    acc4092: '',
    acc419: '',
    balanta: '',
    catalog: ''
}

const formInitialState = {
    name: '',
    balanta: '',
    catalog: '',
    ...ACCOUNTS_INITIAL_VALUE()
}

const Form = ( { onGenerate }) => {
    const [inputs, setInputs] = useState(formInitialState)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const {name, balanta, acc401, acc4111, catalog } = inputs
        if (!name || !acc401 || !acc4111 || !balanta || !catalog) {
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
            <LabeledInput name="catalog" label="Fisier Catalog" onChange={onChange}/>
            <LabeledInput name="balanta" label="Fisier Balanta" onChange={onChange}/>
            {
                ACCOUNT_NUMBERS.map(n => (
                    <LabeledInput key={n} name={`acc${n}`} label={`Fisier ${n}`} onChange={onChange}/>
                ))
            }
            <div className="buttonContainer">
                <button disabled={disabled} onClick={generate}>Import</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Form;
