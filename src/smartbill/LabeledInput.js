import React, { useState } from "react"
import Spinner from "../spinner/Spinner";

const LabeledInput = ( { label, name, type, onChange } ) => {
    const [loading, setLoading] = useState(false)
    let fileReader
    const inputType = type ? type : "file"

    const handleFileRead = (e) => {
        const content = fileReader.result;
        onChange(name, content)
        setLoading(false)
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    const onInputChange = (e) => {
        if (inputType === "text") {
            onChange(name, e.target.value)
            return
        }
        if (!e.target.files || e.target.files.length === 0 || e.target.files[0] === null)
            return
        setLoading(true)
        handleFileChosen(e.target.files[0])
    }


    return (
        <div className="inputContainer">
            <label>{label}</label>
            <input className="input" id={name} name={name} type={inputType} accept=".csv" onChange={onInputChange}/>
            {loading && <Spinner/>}
        </div>
    )
}

export default LabeledInput
