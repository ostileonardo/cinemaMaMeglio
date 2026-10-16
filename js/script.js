const pricing = {
    base: 8,
    child: 0,
    adult: 3.5,
    senior: 5,
}

let price = NaN;

function getPricing(){
    document.getElementById("base").textContent = pricing.base != 0 ? pricing.base + "€" : "free";
    document.getElementById("child").textContent = pricing.child != 0 ? pricing.child + "€" : "free";
    document.getElementById("adult").textContent = pricing.adult != 0 ? pricing.adult + "€" : "free";
    document.getElementById("senior").textContent = pricing.senior != 0 ? pricing.senior + "€" : "free";    
}

function insEta(){
    let age = parseInt(prompt("Inserisci la tua età"));
    if(isNaN(age) || age < 1 || age > 100) insEta();
    if(age < 5){
        price = pricing.child;
    }else if(age >= 18 && age <= 25){
        price = pricing.adult;
    }else if(age >= 50 && age <= 55){
        price = pricing.senior;
    }else price = pricing.base;
    document.getElementsByClassName("titolo")[1].textContent = price == 0 ? "Totale: Free" : "Totale: " + price + "€";
}
