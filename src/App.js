import React, {useState} from "react"
import './App.css';
import Form from "./smartbill/Form";
import {cleanAccountFile, cleanBalanta, cleanCatalog} from "./cleaner";
import {generateBalanta} from "./generator";
import {ACCOUNT_NUMBERS} from "./constants";

const catalogHeader = 'Denumire partener|CIF|401|404|462|4111|461|408|418|403|413|4091|4092|419|Platitor de TVA|TVA la incasare|Tara|Judetul|Reg com|Adresa|Localitate|Banca|Iban|Cod partener|Email|Pers contact|Telefon'
const balantaHeader = 'Contul|Denumire cont|Solduri initiale an debitoare|Solduri initiale an creditoare|Rulaje totale debitoare|Rulaje totale creditoare|Solduri finale debitoare|Solduri finale creditoare'
const trezoHeader = 'Contul Contabil'

const App = () => {

  const [company, setCompany] = useState('')
  const [catalog, setCatalog ] = useState(null)
  const [balanta, setBalanta ] = useState(null)
  const [trezo, setTrezo] = useState(null)

  const reset = () => {
    setCatalog(null)
    setBalanta(null)
    setTrezo(null)
  }

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

  const downloadTrezo = () => {
    const element = document.createElement("a");
    const file = new Blob([trezo], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${company}Trezo.csv`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  const generate = (values) => {
    setCompany(values.name)

    const cleanAccounts = {}

    ACCOUNT_NUMBERS.forEach(n => {
      const keyName = `acc${n}`
      const dirtyAcc = values[keyName]
      cleanAccounts[keyName] = cleanAccountFile(dirtyAcc)
    })

    const fCatalog = cleanCatalog(values.catalog)
    const { cleanLines: fBalanta, presentAccounts } = cleanBalanta(values.balanta)

    let all = true
    for (let i = 0; i < presentAccounts.length; i++) {
      const keyName = `acc${presentAccounts[i]}`
      if (!values[keyName]) {
        all = false
      }
    }

    if (!all) {
      window.alert(`Conform balantei, este nevoie de fisiere pt conturile: ${presentAccounts.join(",")}`)
      return
    }

    const { balanta, trezo } = generateBalanta(cleanAccounts, fCatalog, fBalanta)

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

    const trezoFileContent = trezoHeader
        .concat('\n')
        .concat(trezo.join('\n'))
        .replace(/"/g,'')

    setTrezo(trezoFileContent)

  }

  const downloadFiles = () => {
    downloadCatalog()
    downloadBalanta()
    downloadTrezo()
  }



  return (
    <div className="App">
      <Form onGenerate={generate} onReset={reset}/>

      <div className="outputs">
        <button disabled={catalog === null} onClick={downloadFiles}>Download migration files</button>
        {/*<button disabled={balanta === null} onClick={downloadBalanta}>Download fisier balanta</button>*/}
        {/*<button disabled={trezo === null} onClick={downloadTrezo}>Download fisier Trezo</button>*/}
      </div>
      <span style={{marginTop: '50px', fontSize: '12px', color: 'white'}}>v0.11</span>
    </div>
  );
}

export default App;
