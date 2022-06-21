function ipGen() {
    display = document.getElementById("display");
    display.innerHTML = ""
    amount = Math.max(1,document.getElementById("amount").value);
    for (let i = 0; i < amount; i++) {
        ip = Math.floor(Math.random() * 256).toString() + "." + Math.floor(Math.random() * 256).toString() + "." + Math.floor(Math.random() * 256).toString() + "." + Math.floor(Math.random() * 256).toString();
        display.innerHTML = display.innerHTML + "<br>" + ip
    }
}

function download() {
    if (document.getElementById("display").innerText == "No Address Generated") {
        alert("No Addresses Generated")
        return
    }
    console.log()
    let filename = "ip-" +  Math.max(1,document.getElementById("amount").value).toString();
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(document.getElementById("display").innerText));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
function copy() {
    if (document.getElementById("display").innerText == "No Address Generated") {
        alert("No Addresses Generated")
        return
    }
    navigator.clipboard.writeText(document.getElementById("display").innerText);
}