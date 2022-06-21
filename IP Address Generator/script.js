function ipGen() {
    display = document.getElementById("display");
    display.innerHTML = ""
    amount = Math.max(1,document.getElementById("amount").value);
    for (let i = 0; i < amount; i++) {
        ip = Math.floor(Math.random() * 256).toString() + "." + Math.floor(Math.random() * 256).toString() + "." + Math.floor(Math.random() * 256).toString() + "." + Math.floor(Math.random() * 256).toString();
        display.innerHTML = display.innerHTML + "<br>" + ip
    }
}