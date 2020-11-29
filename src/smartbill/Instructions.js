const Instructions = () => {
    return (
        <>
            <p className="subtitle">Pregatim local un folder cu numele [FIRMA] Migrare Smarbill</p>
            <p className="subtitle">Pregatim in drive un folder "[FIRMA] Migrare SBC 01.10.2020" in folderul clientului</p>
            <p className="subtitle">Scoatem accesul clientului la folderul de mai sus</p>
            <p className="subtitle">1. Balanta de verificare:</p>
            <ul>
                {/*<li>Pregatim local un folder cu numele [FIRMA] Migrare SBC (1)</li>*/}
                <li>Export din Prosoft balanta pe perioada 01.01.2020 - pana inclusiv luna precedenta (30.09.2020)  fata de cea preluata</li>
                <ul>
                    <li>Creare Raport > Doar 8/9 sau export XLS > Export Excel > Excel in stanga sus</li>
                    <li>File name: [FIRMA]_Balanta_01.01.2020-30.09.2020</li>
                </ul>
                <li>Il incarcam in folderul denumit "[FIRMA] Migrare SBC 01.10.2020" in Drive in folderul clientului</li>
                <li>Il deschidem si il descarcam in format .csv in folderul local</li>
                <li>File -> Download As -> Comma Separated Values (.csv)</li>
            </ul>
            <p className="subtitle">2. Parteneri</p>
            <ul>
                <li>Export din Prosoft</li>
                <li>Catalog parteneri > Printare lista parteneri > Raport > Export To > CSV File > Text Separator , (virgula) > OK</li>
                <li>Salvam in folderul local cu denumirea [FIRMA]_CATALOG_PARTENERI</li>
            </ul>
            <p className="subtitle">3. Furnizori si clienti (NR_CONT 401 sau 4111)</p>
            <ul>
                <li>Export din Prosoft Fisa pe cont pe perioada 01.01.2020 - pana inclusiv luna precedenta (30.09.2020)  fata de cea preluata</li>
                <li>NR_CONT > Balanta pe cont analitic > Globala > Balanta analitica > Export Report > Format "Microsoft Exxcel (97-2003 (*xsls)" > cu denumirea " CEDEXPERT_Fisa[NR_CONT]</li>
                <li>Il incarcam in folderul denumit "[FIRMA] Migrare SBC 01.10.2020" in Drive in folderul clientului</li>
                <li>Il deschidem si il descarcam in format .csv in folderul local</li>
                <li>File -> Download As -> Comma Separated Values (.csv)</li>
            </ul>
            <p className="subtitle">4. Alte conturi - 403, 404, 408, 4091, 4092, 413, 418, 419</p>
            <ul>
                <li>Daca exista alte conturi din lista de mai sus in balanta, se urmeaza pt fiecare din ele aceeasi procedura ca pt 401/4111</li>
                <li>Pro tip: Softul de migrare va detecta daca exista alte conturi, si va va atentiona</li>
            </ul>
            <p className="subtitle">5. Obtinere fisiere migrate</p>
            <ul>
                <li>Incarcam din folderul local fisierele .csv in campurile potrivite </li>
                <li>Click pe "Generate Migration Files"</li>
                <li>Click pe "Download migration files"</li>
                <li>Salvam local fisierele primite</li>
                <li>In modelul de trezorerie de
                    <a href="https://docs.google.com/spreadsheets/d/1gLmwB8q2gE_DZnKKk3Le8832-5Fz3av-can0-GwCIz4/edit?usp=sharing" target="_blank">
                        aici
                    </a> completam cate un rand pt fiecare cont din lista primita din pasul precedent
                </li>
                <li>Se descarca fisierul trezo (format xslx) in folderul local</li>
            </ul>
            <p className="subtitle">6. Import in smartbill</p>
            <ul>
                <li>Create client prin formularul smartbill (input CUI)</li>
                <li>Accesam contabilitate pt clientul dorit</li>
                <li>Configurari -> Importa date initiale -> Importa din excel</li>
                <li>Se selecteaza luna cu care incepe utilizarea</li>
                <li>Se incarca fisierele obtinute la pasul 5</li>
                <li>Pt fiecare fisier se apasa butonul "Incarca si valideaza" </li>
                <li>Se apasa butonul "Importa datele"</li>
            </ul>
            <p className="subtitle">7. Verificare</p>
            <ul>
                <li>Se intra in Smartbill la Rapoarte -> Balanta -> Perioada data importului -> Tip balanta Analitica -> Afiseaza</li>
                <li>Se verifica Totalul General cu balanta importata din ProSoft</li>
                <li>Se deschide sampania</li>
            </ul>
            <p className="subtitle">8. Exceptii</p>
            <ul>
                <li>Daca in balanta exista contul 409 fara analitic, se va importa la sectiunea din aplicatie(4091 sau 4092)
                    caruia ii apartine conform inregistrarilor din 409 si se modifica manual in balanta
                </li>
            </ul>
        </>
    )
}

export default Instructions
