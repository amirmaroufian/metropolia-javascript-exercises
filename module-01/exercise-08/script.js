const startYear = Number(prompt("Enter start year:"));
const endYear = Number(prompt("Enter end year:"));

let html = "<ul>";

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        html += `<li>${year}</li>`;
    }
}

html += "</ul>";

document.body.innerHTML = html;