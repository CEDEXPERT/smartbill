/*

 */

import {ACCOUNT_NUMBERS} from "./constants";

/*
      const keyName = `acc${n}`
      cleanAccounts[keyName]
 */

export const generateBalanta = (accounts, fileCatalogLines, fileBalantaLines) => {
    const entitiesWithName = {}
    Object.keys(accounts).forEach(key => {
        if (accounts[key] === null) {
            entitiesWithName[key] = null
        } else {
            entitiesWithName[key] = accounts[key].map(split => ({
                name: split[0],
                siDebit: split[1],
                siCredit: split[2],
                rDebit: split[3],
                rCredit: split[4],
                sFlDebit: split[5],
                sFCredit: split[6]
            }))

        }
    })

    const mapAccounts = {}
    ACCOUNT_NUMBERS.forEach(n => {
        mapAccounts[`acc${n}`] = {}
    })

    /*
     0      client[0],
     1      client[1],

     2      `401.${c}`,

     3      `404.${c}`,

     4      `462.${c}`,

     5      `4111.${c}`,

     6      `461.${c}`,

     7      `408.${c}`,

     8      `418.${c}`,

     9      `403.${c}`,

     10      `413.${c}`,

     11      `4091.${c}`,

     12      `4092.${c}`,

     13      `419.${c}`,

     */

    fileCatalogLines.forEach(split => {
        const entity = {
            name: split[0],
            cif: split[1],
            acc401: split[2],
            acc404: split[3],
            acc462: split[4],
            acc4111: split[5],
            acc461: split[6],
            acc408: split[7],
            acc418: split[8],
            acc403: split[9],
            acc413: split[10],
            acc4091: split[11],
            acc4092: split[12],
            acc419: split[13],
        }
        ACCOUNT_NUMBERS.forEach(n => {
            mapAccounts[`acc${n}`][entity.name] = entity[`acc${n}`]
        })
    })

    // Reading Balanta file
    // 0 Cont
    // 1 AP
    // 2 Den_cont
    // 3 SIAD
    // 4 SIAC
    // 5 RPD
    // 6 RPC
    // 7 RLCD
    // 8 RLCC
    // 9 RCD
    // 10 RCC
    // 11 TVD
    // 12 TVC
    // 13 SFD
    // 14 SFC
    // 15 Unitate

    let linesToKeep = []

    const getAccountLines = (n) => {
        if (!entitiesWithName[`acc${n}`])
            return null
        const linesForAcc = []
        entitiesWithName[`acc${n}`].forEach(client => {
            const cod = mapAccounts[`acc${n}`][client.name]
            linesForAcc.push([cod, client.name, client.siDebit,
                client.siCredit, client.rDebit,
                client.rCredit, client.sFlDebit,
                client.sFCredit])
        })
        return linesForAcc
    }

    let row441 = []
    let row4418 = []

    for (let i = 0; i < fileBalantaLines.length; i++) {
        const split = fileBalantaLines[i]
        const keep = [split[0], split[2], split[3], split[4], split[11], split[12], split[13], split[14]]

        const accNr = split[0]

        if (accNr && accNr.includes('CLASA')) {
            continue
        }

        // 408D pastram
        // 5121.1 pastram
        // pastram randurile din balanta care au conturile de genul 408D? DA
        // 441 trece in 4418

        if (accNr === '441') {
            row441 = keep
            continue
        }

        if (accNr === '4418') {
            row4418 = keep
            continue
        }

        const analyticLines = getAccountLines(accNr)
        if (analyticLines) {
            linesToKeep = linesToKeep.concat(analyticLines)
        } else {
            linesToKeep.push(keep)
        }
    }

    if (row441.length > 0 && row4418.length === 0) {
        row441[0] = '4418'
        linesToKeep.push(row441)
    } else if (row441.length > 0 && row4418.length > 0) {
        for (let i = 2; i < row4418.length; i++) {
            row4418[i] = parseInt(row4418[i]) + parseInt(row441[i])
        }
        linesToKeep.push(row4418)
    } else if (row441.length === 0 && row4418.length > 0) {
        linesToKeep.push(row4418)
    }

    return linesToKeep
}

