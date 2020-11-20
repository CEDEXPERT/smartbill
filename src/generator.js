export const generateBalanta = (file401Lines, file4111Lines, fileCatalogLines, fileBalantaLines) => {
    const entities401 = file401Lines.map(split => {
        return {
            name: split[0],
            siDebit: split[1],
            siCredit: split[2],
            rDebit: split[3],
            rCredit: split[4],
            sFlDebit: split[5],
            sFCredit: split[6]
        }
    })

    const entities4111 = file4111Lines.map(split => {
        return {
            name: split[0],
            siDebit: split[1],
            siCredit: split[2],
            rDebit: split[3],
            rCredit: split[4],
            sFlDebit: split[5],
            sFCredit: split[6]
        }
    })

    const map401 = {}
    const map4111 = {}
    const entitiesCatalog = []

    fileCatalogLines.forEach(split => {
        const entity = {
            name: split[0],
            cif: split[1],
            cont401: split[2],
            cont404: split[3],
            cont4111: split[5]
        }
        map401[entity.name] = entity.cont401
        map4111[entity.name] = entity.cont4111
        entitiesCatalog.push(entity)
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

    function get401Lines() {
        const lines401 = []

        entities401.forEach(client => {
            const cod = map401[client.name]
            lines401.push([cod, client.name, client.siDebit,
                client.siCredit, client.rDebit,
                client.rCredit, client.sFlDebit,
                client.sFCredit])
        })

        return lines401
    }

    function get4111Lines() {
        const lines4111 = []

        entities4111.forEach(client => {
            const cod = map4111[client.name]
            lines4111.push([cod, client.name, client.siDebit,
                client.siCredit, client.rDebit,
                client.rCredit, client.sFlDebit,
                client.sFCredit])
        })

        return lines4111
    }

    for (let i = 0; i < fileBalantaLines.length; i++) {
        const split = fileBalantaLines[i]
        const keep = [split[0], split[2], split[3], split[4], split[11], split[12], split[13], split[14]]

        if (isNaN(keep[0])) {
            continue
        }

        if (keep[0] === '401') {
            linesToKeep = linesToKeep.concat(get401Lines())
        } else if (keep[0] === '4111') {
            linesToKeep = linesToKeep.concat(get4111Lines())
        } else {
            linesToKeep.push(keep)
        }
    }

    return linesToKeep
}

