// collections.js

// Hålla koll på nummer för divar (andra kolumnen)
let divCounter = 1;

// Hjälpfunktion för att skapa rubrik i fjärde kolumnen
function skapaRubrik(titel) {
    const utskrift = document.getElementById('utskrift');
    if (!utskrift.dataset.headerCreated) {
        const h3 = document.createElement('h3');
        h3.textContent = titel;
        utskrift.appendChild(h3);
        utskrift.dataset.headerCreated = "true";
    }
}

// Funktion för att skicka valt fält från formulär
function submitForm() {
    const fieldNumber = document.querySelector('input[type="number"]').value;

    // Hämta värden från formuläret
    const fname = document.getElementById('fname').value;
    const ename = document.getElementById('ename').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    skapaRubrik("Formulärdata");

    let output = '';

    switch (fieldNumber) {
        case '1':
            output = `Förnamn: ${fname}`;
            break;
        case '2':
            output = `Efternamn: ${ename}`;
            break;
        case '3':
            output = `E-post: ${email}`;
            break;
        case '4':
            output = `Meddelande: ${msg}`;
            break;
        default:
            output = "Välj ett korrekt fältnummer (1-4).";
    }

    const p = document.createElement('p');
    p.innerHTML = output;
    document.getElementById('utskrift').appendChild(p);
}

// Funktion för att skicka text från divar (andra kolumnen)
function submitDivar() {
    const textDiv = document.getElementById('text');
    const divs = textDiv.getElementsByTagName('div');

    skapaRubrik("Divar från andra kolumnen");

    for (let div of divs) {
        const p = document.createElement('p');
        p.innerHTML = `${divCounter++}. ${div.textContent.trim()}`;
        document.getElementById('utskrift').appendChild(p);
    }
}

// Funktion för att skicka alla entries (alla element) från tredje kolumnen
function submitAllEntries() {
    const nodesDiv = document.getElementById('nodes');
    const children = nodesDiv.children;

    skapaRubrik("Alla entries (barnnoder)");

    for (let i = 0; i < children.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = `Entry ${i}: ${children[i].outerHTML}`;
        document.getElementById('utskrift').appendChild(p);
    }
}

// Funktion för att skicka alla keys (index) från tredje kolumnen
function submitAllKeys() {
    const nodesDiv = document.getElementById('nodes');
    const children = nodesDiv.children;

    skapaRubrik("Alla nycklar (index)");

    for (let i = 0; i < children.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = `Key: ${i}`;
        document.getElementById('utskrift').appendChild(p);
    }
}

// Funktion för att skicka alla values (innerHTML) från tredje kolumnen
function submitAllValues() {
    const nodesDiv = document.getElementById('nodes');
    const children = nodesDiv.children;

    skapaRubrik("Alla värden (text)");

    for (let i = 0; i < children.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = children[i].innerHTML.trim();
        document.getElementById('utskrift').appendChild(p);
    }
}

// Funktion för att skicka endast paragrafers text från tredje kolumnen
function submitParagraphValues() {
    const nodesDiv = document.getElementById('nodes');
    const paragraphs = nodesDiv.getElementsByTagName('p');

    skapaRubrik("Paragrafvärden");

    for (let pElement of paragraphs) {
        if (pElement.textContent.trim() !== "") {
            const p = document.createElement('p');
            p.innerHTML = pElement.textContent.trim();
            document.getElementById('utskrift').appendChild(p);
        }
    }
}

// Funktion för att skicka h4-text från tredje kolumnen
function submitHeader4Value() {
    const nodesDiv = document.getElementById('nodes');
    const h4 = nodesDiv.querySelector('h4');

    skapaRubrik("Rubrik 4 (h4)");

    if (h4) {
        const p = document.createElement('p');
        p.innerHTML = h4.textContent.trim();
        document.getElementById('utskrift').appendChild(p);
    }
}

// Funktion för att rensa fjärde kolumnen (utskrift)
function rensa() {
    const utskrift = document.getElementById('utskrift');
    utskrift.innerHTML = '';
    utskrift.removeAttribute('data-header-created'); // Tillåta ny rubrik
    divCounter = 1; // Nollställ div-räknare
}
