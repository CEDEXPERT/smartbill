(this.webpackJsonpsmartbill=this.webpackJsonpsmartbill||[]).push([[0],{12:function(t,c,a){},13:function(t,c,a){},14:function(t,c,a){},15:function(t,c,a){"use strict";a.r(c);var n=a(0),e=a(1),r=a.n(e),o=a(6),i=a.n(o),l=(a(12),a(2)),u=(a(13),a(3)),s=a(4),b=(a(14),function(){return Object(n.jsxs)("div",{className:"lds-ring",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})}),f=function(t){var c,a=t.label,r=t.name,o=t.type,i=t.onChange,u=Object(e.useState)(!1),s=Object(l.a)(u,2),f=s[0],j=s[1],d=o||"file",m=function(t){var a=c.result;i(r,a),j(!1)};return Object(n.jsxs)("div",{className:"inputContainer",children:[Object(n.jsx)("label",{children:a}),Object(n.jsx)("input",{className:"input",id:r,name:r,type:d,onChange:function(t){var a;"text"!==d?t.target.files&&0!==t.target.files.length&&null!==t.target.files[0]&&(j(!0),a=t.target.files[0],(c=new FileReader).onloadend=m,c.readAsText(a)):i(r,t.target.value)}}),f&&Object(n.jsx)(b,{})]})},j=[401,4111,404,462,461,408,418,403,413,4091,4092,419],d={name:"",doc401:"",acc4111:"",acc404:"",acc462:"",acc461:"",acc408:"",acc418:"",acc403:"",acc413:"",acc4091:"",acc4092:"",acc419:"",balanta:"",catalog:""},m=Object(s.a)({name:"",balanta:"",catalog:""},function(){var t={};return j.forEach((function(c){return t["acc".concat(c)]=""})),t}()),h=function(t){var c=t.onGenerate,a=Object(e.useState)(m),r=Object(l.a)(a,2),o=r[0],i=r[1],b=Object(e.useState)(!1),h=Object(l.a)(b,2),p=h[0],v=h[1];Object(e.useEffect)((function(){var t=o.name,c=o.balanta,a=o.acc401,n=o.acc4111,e=o.catalog;v(!(t&&a&&n&&c&&e))}),[o]);var O=function(t,c){i(Object(s.a)(Object(s.a)({},o),{},Object(u.a)({},t,c)))};return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)(f,{name:"name",label:"Nume(scurt, fara spatii)",type:"text",onChange:O}),Object(n.jsx)(f,{name:"catalog",label:"Fisier Catalog",onChange:O}),Object(n.jsx)(f,{name:"balanta",label:"Fisier Balanta",onChange:O}),j.map((function(t){return Object(n.jsx)(f,{name:"acc".concat(t),label:"Fisier ".concat(t),onChange:O},t)})),Object(n.jsxs)("div",{className:"buttonContainer",children:[Object(n.jsx)("button",{disabled:p,onClick:function(){c(o)},children:"Import"}),Object(n.jsx)("button",{onClick:function(){i(d);for(var t=document.getElementsByClassName("input"),c=0;c<t.length;c++)t[c].value=null},children:"reset"})]})]})};var p=function(t){for(var c=[],a=t.split(/\r?\n/),n=3;n<a.length;n++){var e=a[n].split(","),r=e[0],o=e[2];r&&c.push([r.trim(),o.trim()])}return c.map((function(t,c){var a=function(t){for(var c=t.toString(),a="",n=0;n<6-c.length;n++)a+="0";return 110===t&&(console.log(c),console.log(a.concat(c))),a.concat(c)}(c+1);return[t[0],t[1],"401.".concat(a),"404.".concat(a),"462.".concat(a),"4111.".concat(a),"461.".concat(a),"408.".concat(a),"418.".concat(a),"403.".concat(a),"413.".concat(a),"4091.".concat(a),"4092.".concat(a),"419.".concat(a),"","","","","","","","","","","","",""]}))};function v(t){for(var c=t.length,a=0,n=!1,e=[],r="";a<c;)'"'!==t[a]||n?'"'===t[a]&&n?(n=!1,r+=t[a]):","===t[a]&&n||","!==t[a]||n?r+=t[a]:(e.push(r),r="",n=!1):(n=!0,r+=t[a]),a++;return e.push(r),e}var O=function(){var t=Object(e.useState)(""),c=Object(l.a)(t,2),a=c[0],r=c[1],o=Object(e.useState)(null),i=Object(l.a)(o,2),u=i[0],s=i[1],b=Object(e.useState)(null),f=Object(l.a)(b,2),d=f[0],m=f[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{onGenerate:function(t){r(t.name);var c={};j.forEach((function(a){var n="acc".concat(a),e=t[n];c[n]=function(t,c,a){if(!t)return null;for(var n=t.split(/\r?\n/),e=[],r=c;r<n.length;r++){var o=n[r].split(",");(o=o.filter((function(t){return!!t}))).length===a&&e.push(o.slice(1,o.length).map((function(t){return t.trim()})))}return e}(e,14,8)}));var a=p(t.catalog),n=function(t){for(var c=t.split(/\r?\n/),a=[],n=1;n<c.length;n++)a.push(v(c[n]).map((function(t){return t.trim()})));return a}(t.balanta),e=function(t,c,a){var n={};Object.keys(t).forEach((function(c){null===t[c]?n[c]=null:n[c]=t[c].map((function(t){return{name:t[0],siDebit:t[1],siCredit:t[2],rDebit:t[3],rCredit:t[4],sFlDebit:t[5],sFCredit:t[6]}}))}));var e={};j.forEach((function(t){e["acc".concat(t)]={}})),c.forEach((function(t){var c={name:t[0],cif:t[1],acc401:t[2],acc404:t[3],acc462:t[4],acc4111:t[5],acc461:t[6],acc408:t[7],acc418:t[8],acc403:t[9],acc413:t[10],acc4091:t[11],acc4092:t[12],acc419:t[13]};j.forEach((function(t){e["acc".concat(t)][c.name]=c["acc".concat(t)]}))}));for(var r=[],o=function(t){if(!n["acc".concat(t)])return null;var c=[];return n["acc".concat(t)].forEach((function(a){var n=e["acc".concat(t)][a.name];c.push([n,a.name,a.siDebit,a.siCredit,a.rDebit,a.rCredit,a.sFlDebit,a.sFCredit])})),c},i=0;i<a.length;i++){var l=a[i],u=[l[0],l[2],l[3],l[4],l[11],l[12],l[13],l[14]],s=l[0];if(!s||!s.includes("CLASA")){var b=o(s);b?r=r.concat(b):r.push(u)}}return r}(c,a,n),o="Denumire partener|CIF|401|404|462|4111|461|408|418|403|413|4091|4092|419|Platitor de TVA|TVA la incasare|Tara|Judetul|Reg com|Adresa|Localitate|Banca|Iban|Cod partener|Email|Pers contact|Telefon".concat("\n").concat(a.map((function(t){return t.join("|")})).join("\n"));s(o);var i="Contul|Denumire cont|Solduri initiale an debitoare|Solduri initiale an creditoare|Rulaje totale debitoare|Rulaje totale creditoare|Solduri finale debitoare|Solduri finale creditoare".concat("\n").concat(e.map((function(t){return t.join("|")})).join("\n")).replace(/"/g,"").replace(/,/g,"");m(i)}}),Object(n.jsxs)("div",{className:"outputs",children:[Object(n.jsx)("button",{onClick:function(){var t=document.createElement("a"),c=new Blob([u],{type:"text/plain"});t.href=URL.createObjectURL(c),t.download="".concat(a,"Catalog.csv"),document.body.appendChild(t),t.click()},children:"Download fisier catalog"}),Object(n.jsx)("button",{onClick:function(){var t=document.createElement("a"),c=new Blob([d],{type:"text/plain"});t.href=URL.createObjectURL(c),t.download="".concat(a,"Balanta.csv"),document.body.appendChild(t),t.click()},children:"Download fisier balanta"})]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6861f85f.chunk.js.map