(this.webpackJsonpsmartbill=this.webpackJsonpsmartbill||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t(1),i=t.n(n),l=t(6),r=t.n(l),s=(t(12),t(2)),o=(t(13),t(3)),u=t(4),d=(t(14),function(){return Object(c.jsxs)("div",{className:"lds-ring",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}),j=function(e){var a,t=e.label,i=e.name,l=e.type,r=e.onChange,o=Object(n.useState)(!1),u=Object(s.a)(o,2),j=u[0],b=u[1],p=l||"file",f=function(e){var t=a.result;r(i,t),b(!1)};return Object(c.jsxs)("div",{className:"inputContainer",children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)("input",{className:"input",id:i,name:i,type:p,accept:".csv",onChange:function(e){var t;"text"!==p?e.target.files&&0!==e.target.files.length&&null!==e.target.files[0]&&(b(!0),t=e.target.files[0],(a=new FileReader).onloadend=f,a.readAsText(t)):r(i,e.target.value)}}),j&&Object(c.jsx)(d,{})]})},b=[401,4111,403,404,408,413,4091,4092,418,419,461,462],p={name:"",doc401:"",acc4111:"",acc404:"",acc462:"",acc461:"",acc408:"",acc418:"",acc403:"",acc413:"",acc4091:"",acc4092:"",acc419:"",balanta:"",catalog:""},f=Object(u.a)({name:"",balanta:"",catalog:""},function(){var e={};return b.forEach((function(a){return e["acc".concat(a)]=""})),e}()),h=function(e){var a=e.onGenerate,t=e.onReset,i=Object(n.useState)(f),l=Object(s.a)(i,2),r=l[0],d=l[1],h=Object(n.useState)(!1),m=Object(s.a)(h,2),x=m[0],O=m[1];Object(n.useEffect)((function(){var e=r.name,a=r.balanta,t=(r.acc401,r.acc4111,r.catalog);O(!(e&&a&&t))}),[r]);var v=function(e,a){d(Object(u.a)(Object(u.a)({},r),{},Object(o.a)({},e,a)))};return Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)(j,{name:"name",label:"Nume(scurt, fara spatii)",type:"text",onChange:v}),Object(c.jsx)(j,{name:"catalog",label:"Fisier Catalog Parteneri",onChange:v}),Object(c.jsx)(j,{name:"balanta",label:"Fisier Balanta",onChange:v}),b.map((function(e){return Object(c.jsx)(j,{name:"acc".concat(e),label:"Fisier ".concat(e),onChange:v},e)})),Object(c.jsxs)("div",{className:"buttonContainer",children:[Object(c.jsx)("button",{disabled:x,onClick:function(){a(r)},children:"Generate migration files"}),Object(c.jsx)("button",{onClick:function(){t(),d(p);for(var e=document.getElementsByClassName("input"),a=0;a<e.length;a++)e[a].value=null},children:"Reset inputs"})]})]})};function m(e){for(var a=e.length,t=0,c=!1,n=[],i="";t<a;)'"'!==e[t]||c?'"'===e[t]&&c?(c=!1,i+=e[t]):","===e[t]&&c||","!==e[t]||c?i+=e[t]:(n.push(i),i="",c=!1):(c=!0,i+=e[t]),t++;return n.push(i),n}var x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"subtitle",children:"Pregatim local un folder cu numele [FIRMA] Migrare Smarbill"}),Object(c.jsx)("p",{className:"subtitle",children:'Pregatim in drive un folder "[FIRMA] Migrare SBC 01.10.2020" in folderul clientului'}),Object(c.jsx)("p",{className:"subtitle",children:"Scoatem accesul clientului la folderul de mai sus"}),Object(c.jsx)("p",{className:"subtitle",children:"1. Balanta de verificare:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Export din Prosoft balanta pe perioada 01.01.2020 - pana inclusiv luna precedenta (30.09.2020)  fata de cea preluata"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Creare Raport > Doar 8/9 sau export XLS > Export Excel > Excel in stanga sus"}),Object(c.jsx)("li",{children:"File name: [FIRMA]_Balanta_01.01.2020-30.09.2020"})]}),Object(c.jsx)("li",{children:'Il incarcam in folderul denumit "[FIRMA] Migrare SBC 01.10.2020" in Drive in folderul clientului'}),Object(c.jsx)("li",{children:"Il deschidem si il descarcam in format .csv in folderul local"}),Object(c.jsx)("li",{children:"File -> Download As -> Comma Separated Values (.csv)"})]}),Object(c.jsx)("p",{className:"subtitle",children:"2. Parteneri"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Export din Prosoft"}),Object(c.jsx)("li",{children:"Catalog parteneri > Printare lista parteneri > Raport > Export To > CSV File > Text Separator , (virgula) > OK"}),Object(c.jsx)("li",{children:"Salvam in folderul local cu denumirea [FIRMA]_CATALOG_PARTENERI"})]}),Object(c.jsx)("p",{className:"subtitle",children:"3. Furnizori si clienti (NR_CONT 401 sau 4111)"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Export din Prosoft Fisa pe cont pe perioada 01.01.2020 - pana inclusiv luna precedenta (30.09.2020)  fata de cea preluata"}),Object(c.jsx)("li",{children:'NR_CONT > Balanta pe cont analitic > Globala > Balanta analitica > Export Report > Format "Microsoft Exxcel (97-2003 (*xsls)" > cu denumirea " CEDEXPERT_Fisa[NR_CONT]'}),Object(c.jsx)("li",{children:'Il incarcam in folderul denumit "[FIRMA] Migrare SBC 01.10.2020" in Drive in folderul clientului'}),Object(c.jsx)("li",{children:"Il deschidem si il descarcam in format .csv in folderul local"}),Object(c.jsx)("li",{children:"File -> Download As -> Comma Separated Values (.csv)"})]}),Object(c.jsx)("p",{className:"subtitle",children:"4. Alte conturi - 403, 404, 408, 4091, 4092, 413, 418, 419"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Daca exista alte conturi din lista de mai sus in balanta, se urmeaza pt fiecare din ele aceeasi procedura ca pt 401/4111"}),Object(c.jsx)("li",{children:"Pro tip: Softul de migrare va detecta daca exista alte conturi, si va va atentiona"})]}),Object(c.jsx)("p",{className:"subtitle",children:"5. Obtinere fisiere migrate"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Incarcam din folderul local fisierele .csv in campurile potrivite "}),Object(c.jsx)("li",{children:'Click pe "Generate Migration Files"'}),Object(c.jsx)("li",{children:'Click pe "Download migration files"'}),Object(c.jsx)("li",{children:"Salvam local fisierele primite"}),Object(c.jsxs)("li",{children:["In modelul de trezorerie de",Object(c.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1gLmwB8q2gE_DZnKKk3Le8832-5Fz3av-can0-GwCIz4/edit?usp=sharing",target:"_blank",children:"aici"})," completam cate un rand pt fiecare cont din lista primita din pasul precedent"]}),Object(c.jsx)("li",{children:"Se descarca fisierul trezo (format xslx) in folderul local"})]}),Object(c.jsx)("p",{className:"subtitle",children:"6. Import in smartbill"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Create client prin formularul smartbill (input CUI)"}),Object(c.jsx)("li",{children:"Accesam contabilitate pt clientul dorit"}),Object(c.jsx)("li",{children:"Configurari -> Importa date initiale -> Importa din excel"}),Object(c.jsx)("li",{children:"Se selecteaza luna cu care incepe utilizarea"}),Object(c.jsx)("li",{children:"Se incarca fisierele obtinute la pasul 5"}),Object(c.jsx)("li",{children:'Pt fiecare fisier se apasa butonul "Incarca si valideaza" '}),Object(c.jsx)("li",{children:'Se apasa butonul "Importa datele"'})]}),Object(c.jsx)("p",{className:"subtitle",children:"7. Verificare"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Se intra in Smartbill la Rapoarte -> Balanta -> Perioada data importului -> Tip balanta Analitica -> Afiseaza"}),Object(c.jsx)("li",{children:"Se verifica Totalul General cu balanta importata din ProSoft"}),Object(c.jsx)("li",{children:"Se deschide sampania"})]}),Object(c.jsx)("p",{className:"subtitle",children:"8. Exceptii"}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:"Daca in balanta exista contul 409 fara analitic, se va importa la sectiunea din aplicatie(4091 sau 4092) caruia ii apartine conform inregistrarilor din 409 si se modifica manual in balanta"})})]})},O=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(null),r=Object(s.a)(l,2),o=r[0],u=r[1],d=Object(n.useState)(null),j=Object(s.a)(d,2),p=j[0],f=j[1],O=Object(n.useState)(null),v=Object(s.a)(O,2),g=v[0],C=v[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)(h,{onGenerate:function(e){i(e.name);var a={};b.forEach((function(t){var c="acc".concat(t),n=e[c];a[c]=function(e,a,t){if(!e)return null;for(var c=e.split(/\r?\n/),n=[],i=a;i<c.length;i++){var l=c[i].split(",");(l=l.filter((function(e){return!!e}))).length===t&&n.push(l.slice(1,l.length).map((function(e){return e.trim()})))}return n}(n,14,8)}));for(var t=function(e){for(var a=[],t=e.split(/\r?\n/),c=3;c<t.length;c++){var n=t[c].split(","),i=n[0],l=n[2];i&&a.push([i.trim(),l.trim()])}return a.map((function(e,a){var t=function(e){for(var a=e.toString(),t="",c=0;c<6-a.length;c++)t+="0";return t.concat(a)}(a+1);return[e[0],e[1],"401.".concat(t),"404.".concat(t),"462.".concat(t),"4111.".concat(t),"461.".concat(t),"408.".concat(t),"418.".concat(t),"403.".concat(t),"413.".concat(t),"4091.".concat(t),"4092.".concat(t),"419.".concat(t),"","","","","","","","","","","","",""]}))}(e.catalog),c=function(e){for(var a=e.split(/\r?\n/),t=[],c=1;c<a.length;c++)t.push(m(a[c]).map((function(e){return e.trim()})));for(var n=b.map((function(e){return e.toString()})),i=[],l=0;l<t.length;l++){var r=t[l][0];"409"===r&&window.alert("Atentie. Exista in balanta contul 409 fara analitic. Vezi sectiunea Exceptii din Instructiuni pt detalii"),n.includes(r)&&i.push(r)}return{cleanLines:t,presentAccounts:i}}(e.balanta),n=c.cleanLines,l=c.presentAccounts,r=!0,s=0;s<l.length;s++){var o="acc".concat(l[s]);e[o]||(r=!1)}if(r){var d=function(e,a,t){var c={};Object.keys(e).forEach((function(a){null===e[a]?c[a]=null:c[a]=e[a].map((function(e){return{name:e[0],siDebit:e[1],siCredit:e[2],rDebit:e[3],rCredit:e[4],sFlDebit:e[5],sFCredit:e[6]}}))}));var n={};b.forEach((function(e){n["acc".concat(e)]={}})),a.forEach((function(e){var a={name:e[0],cif:e[1],acc401:e[2],acc404:e[3],acc462:e[4],acc4111:e[5],acc461:e[6],acc408:e[7],acc418:e[8],acc403:e[9],acc413:e[10],acc4091:e[11],acc4092:e[12],acc419:e[13]};b.forEach((function(e){n["acc".concat(e)][a.name]=a["acc".concat(e)]}))}));for(var i=[],l=function(e){if(!c["acc".concat(e)])return null;var a=[];return c["acc".concat(e)].forEach((function(t){var c=n["acc".concat(e)][t.name];a.push([c,t.name,t.siDebit,t.siCredit,t.rDebit,t.rCredit,t.sFlDebit,t.sFCredit])})),a},r=[],s=[],o=[],u={},d=function(e){var a,t="acc".concat(e);return u[t]?(u[t]=u[t]+1,a=u[t]):(a=1,u[t]=1),"".concat(e,".").concat(function(e){for(var a=e.toString(),t="",c=0;c<3-a.length;c++)t+="0";return t.concat(a)}(a))},j=0;j<t.length;j++){var p=t[j],f=[p[0],p[2],p[3],p[4],p[11],p[12],p[13],p[14]],h=p[0];if((!h||!h.includes("CLASA"))&&(!h||!h.includes("TOT")))if("441"!==h)if("4418"!==h){h.startsWith("5121")&&(f[0]=d("5121")),h.startsWith("5124")&&(f[0]=d("5124")),h.startsWith("5")&&"581"!==h&&"5311"!==h&&o.push(f[0]);var m=l(h);m?i=i.concat(m):i.push(f)}else s=f;else r=f}if(r.length>0&&0===s.length)r[0]="4418",i.push(r);else if(r.length>0&&s.length>0){for(var x=2;x<s.length;x++){var O=s[x].replace(/"/g,"").replace(/,/g,""),v=r[x].replace(/"/g,"").replace(/,/g,"");s[x]=parseFloat(O)+parseFloat(v)}i.push(s)}else 0===r.length&&s.length>0&&i.push(s);return{balanta:i,trezo:o}}(a,t,n),j=d.balanta,p=d.trezo,h="Denumire partener|CIF|401|404|462|4111|461|408|418|403|413|4091|4092|419|Platitor de TVA|TVA la incasare|Tara|Judetul|Reg com|Adresa|Localitate|Banca|Iban|Cod partener|Email|Pers contact|Telefon".concat("\n").concat(t.map((function(e){return e.join("|")})).join("\n"));u(h);var x="Contul|Denumire cont|Solduri initiale an debitoare|Solduri initiale an creditoare|Rulaje totale debitoare|Rulaje totale creditoare|Solduri finale debitoare|Solduri finale creditoare".concat("\n").concat(j.map((function(e){return e.join("|")})).join("\n")).replace(/"/g,"").replace(/,/g,"");f(x);var O="Contul Contabil".concat("\n").concat(p.join("\n")).replace(/"/g,"");C(O)}else window.alert("Conform balantei, este nevoie de fisiere pt conturile: ".concat(l.join(",")))},onReset:function(){u(null),f(null),C(null)}}),Object(c.jsx)("div",{className:"outputs",children:Object(c.jsx)("button",{disabled:null===o,onClick:function(){!function(){var e=document.createElement("a"),a=new Blob([o],{type:"text/plain"});e.href=URL.createObjectURL(a),e.download="".concat(t,"Catalog.csv"),document.body.appendChild(e),e.click()}(),function(){var e=document.createElement("a"),a=new Blob([p],{type:"text/plain"});e.href=URL.createObjectURL(a),e.download="".concat(t,"Balanta.csv"),document.body.appendChild(e),e.click()}(),function(){var e=document.createElement("a"),a=new Blob([g],{type:"text/plain"});e.href=URL.createObjectURL(a),e.download="".concat(t,"Trezo.csv"),document.body.appendChild(e),e.click()}()},children:"Download migration files"})}),Object(c.jsx)("span",{style:{marginTop:"50px",fontSize:"12px",color:"white"},children:"v0.14"})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("p",{children:"Instructiuni"}),Object(c.jsx)(x,{})]})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d08c8344.chunk.js.map