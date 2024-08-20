document.getElementById("byke").addEventListener("click",() =>{
    const cardTitle = document.getElementById("bykeTxt")
    cardTitle.textContent = "Non c'est raté";
    cardTitle.classList.add("error")
});

document.getElementById("journey").addEventListener("click",() =>{
    document.getElementById("map").classList.remove("inactive");
    document.getElementById("gift").classList.add("inactive");

});


document.getElementById("FR-BRE").addEventListener("click",() =>{
    document.getElementById("mapText").textContent = "Encore... Tu l'as déjà fait ...";
})

document.getElementById("FR-NOR").addEventListener("click",() =>{
    document.getElementById("mapText").textContent = "Tu rigoles ? Tu n'as qu'à sortir de chez toi !";
})

document.getElementById("FR-PDL").addEventListener("click",()=>{
    document.getElementById("presentation").classList.remove("inactive");
    document.getElementById("map").classList.add("inactive");
})

document.getElementById("btn").addEventListener("click",() =>{
    document.getElementById("people").classList.remove("inactive");
    document.getElementById("presentation").classList.add("inactive");
});


document.getElementById("people1").addEventListener("click",() =>{
    document.getElementById("people1Hide").classList.add("inactive")
    document.getElementById("who1").classList.add("inactive")
});
document.getElementById("people2").addEventListener("click",() =>{
    document.getElementById("people2Hide").classList.add("inactive")
    document.getElementById("who2").classList.add("inactive")
});
document.getElementById("people3").addEventListener("click",() =>{
    document.getElementById("people3Hide").classList.add("inactive")
    document.getElementById("who3").classList.add("inactive")
});
document.getElementById("people4").addEventListener("click",() =>{
    document.getElementById("people4Hide").classList.add("inactive")
    document.getElementById("who4").classList.add("inactive")
});
document.getElementById("people5").addEventListener("click",() =>{
    document.getElementById("people5Hide").classList.add("inactive")
    document.getElementById("who5").classList.add("inactive")
});
document.getElementById("people6").addEventListener("click",() =>{
    document.getElementById("people6Hide").classList.add("inactive")
    document.getElementById("who6").classList.add("inactive")
});
