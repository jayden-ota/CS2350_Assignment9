const entries = [
    {name: "C++", type: "Compiled", editor: "Vim"},
    {name: "Python", type: "Interpreted", editor: "Idle"},
    {name: "Lua", type: "Interpreted", editor: "Notepad"}
];
const res = document.getElementById("results");
const btn = document.getElementById("add");

function addEntry(entry) {
    const row = document.createElement("tr");
    for(let e in entry) {
        const data = document.createElement("td");
        data.textContent = entry[e];
        row.appendChild(data);
    }

    res.appendChild(row);
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    addEntry({
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        editor: document.getElementById("ide").value
    });
});

for(const e of entries) {
    addEntry(e);
}

