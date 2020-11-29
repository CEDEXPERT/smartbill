import {ACCOUNT_NUMBERS} from "./constants";

const START_LINE_4XX = 14

const cleanFile = (file, startLine, cols) => {
    if (!file) return null
    const lines = file.split(/\r?\n/);

    const cleanLines = []

    for (let i = startLine; i < lines.length; i++) {
        let split = lines[i].split(',')
        split = split.filter(i => !!i)

        if (split.length === cols) {
            cleanLines.push(split.slice(1, split.length).map(s => s.trim()))
        }
    }
    return cleanLines
}

const cleanAccountFile = (file) => cleanFile(file, START_LINE_4XX, 8)

function getCounter(index) {
    //000001
    const str = index.toString()
    let buf = ''
    for (let i = 0; i < 6 - str.length; i++) {
        buf += '0'
    }
    if (index === 110) {
        console.log(str)
        console.log(buf.concat(str))
    }
    return buf.concat(str)
}

const cleanCatalog = (catalog) => {
    const clients = []
    const lines = catalog.split(/\r?\n/);

    for (let i = 3; i < lines.length; i++) {
        let split = lines[i].split(',')
        const name = split[0]
        const cif = split[2]
        if (!!name) {
            clients.push([name.trim(), cif.trim()])
        }
    }
    //Denumire partener|CIF|401|404|462|4111|461|408|418|403|413|4091|4092|419|Platitor de TVA|TVA la incasare|Tara|Judetul|Reg com|Adresa|Localitate|Banca|Iban|Cod partener|Email|Pers contact|Telefon
    return clients.map((client, index) => {
        const c = getCounter(index + 1)
        return [
            client[0],
            client[1],
            `401.${c}`,
            `404.${c}`,
            `462.${c}`,
            `4111.${c}`,
            `461.${c}`,
            `408.${c}`,
            `418.${c}`,
            `403.${c}`,
            `413.${c}`,
            `4091.${c}`,
            `4092.${c}`,
            `419.${c}`,
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]

    })
}

function splitLine(line) {
    const length = line.length
    let i = 0;
    let inString = false
    const parts = []
    let val = ''

    while (i < length) {
        if (line[i] === "\"" && !inString) {
            inString = true
            val = val + line[i]
        } else if (line[i] === "\"" && inString) {
            inString = false
            val = val + line[i]
        }  else if (line[i] === ',' && inString) {
            val = val + line[i]
        } else if (line[i] === ',' && !inString) {
            parts.push(val)
            val = ''
            inString = false
        } else {
            val = val + line[i]
        }
        i++
    }
    parts.push(val)
    return parts
}

const cleanBalanta = (balanta) => {
    const lines = balanta.split(/\r?\n/)
    const cleanLines = []
    for (let i = 1; i < lines.length; i++) {
        cleanLines.push(splitLine(lines[i]).map(s => s.trim()))
    }

    const requiredAccounts = ACCOUNT_NUMBERS.map(n => n.toString())

    const presentAccounts = []

    for (let i = 0; i < cleanLines.length; i++) {
        if (requiredAccounts.includes(cleanLines[i][0])) {
            presentAccounts.push(cleanLines[i][0])
        }
    }

    return {
        cleanLines,
        presentAccounts
    };
}

export {
    cleanAccountFile,
    cleanCatalog,
    cleanBalanta
}


