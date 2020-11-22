import React, { useState } from "react"
import './App.css';
import Form from "./smartbill/Form";
import {clean401, clean4111, cleanCatalog, cleanBalanta, cleanAccountFile} from "./cleaner";
import {generateBalanta} from "./generator";

const catalogHeader = 'Denumire partener|CIF|401|404|462|4111|461|408|418|403|413|4091|4092|419|Platitor de TVA|TVA la incasare|Tara|Judetul|Reg com|Adresa|Localitate|Banca|Iban|Cod partener|Email|Pers contact|Telefon'
const balantaHeader = 'Contul|Denumire cont|Solduri initiale an debitoare|Solduri initiale an creditoare|Rulaje totale debitoare|Rulaje totale creditoare|Solduri finale debitoare|Solduri finale creditoare'

const App = () => {

  const [company, setCompany] = useState('')
  const [catalog, setCatalog ] = useState(null)
  const [balanta, setBalanta ] = useState(null)

  const downloadCatalog = () => {
    const element = document.createElement("a");
    const file = new Blob([catalog], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${company}Catalog.csv`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  const downloadBalanta = () => {
    const element = document.createElement("a");
    const file = new Blob([balanta], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${company}Balanta.csv`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  const generate = (values) => {
    setCompany(values.name)

    /*
    401: '',
    4111: '',
    404: '',
    462: '',
    461: '',
    408: '',
    418: '',
    403: '',
    413: '',
    4091: '',
    4092: '',
    419: '',
     */

    const accounts = {
      401: cleanAccountFile(values.doc401),
      4111: cleanAccountFile(values.doc4111),
      404: cleanAccountFile(values.doc404),
      462: cleanAccountFile(values.doc462),
      461: cleanAccountFile(values.doc461),
      408: cleanAccountFile(values.doc408),
      418: cleanAccountFile(values.doc418),
      403: cleanAccountFile(values.doc403),
      413: cleanAccountFile(values.doc413),
      4091: '',
      4092: '',
      419: ''
    }

    const f401 = clean401(values.doc401)
    const f4111 = clean4111(values.doc4111)
    const fCatalog = cleanCatalog(values.catalog)
    const fBalanta = cleanBalanta(values.balanta)
    const balanta = generateBalanta(f401, f4111, fCatalog, fBalanta)

    const catalogFileContent = catalogHeader
        .concat('\n')
        .concat(fCatalog.map(line => line.join('|')).join('\n'))
    setCatalog(catalogFileContent)

    const balantaFileContent = balantaHeader
        .concat('\n')
        .concat(balanta.map(line => line.join('|')).join('\n'))
        .replace(/"/g,'')
        .replace(/,/g, '')
    setBalanta(balantaFileContent)
  }

  return (
    <div className="App">
      <Form onGenerate={generate}/>

      <div className="outputs">
        <button onClick={downloadCatalog}>Download fisier catalog</button>
        <button onClick={downloadBalanta}>Download fisier balanta</button>
      </div>
    </div>
  );
}

export default App;
