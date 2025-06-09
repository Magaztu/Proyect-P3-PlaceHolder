function MensajeR() {
    alert("Cliente registado con éxito");
}
function MostrarT(){
    document.getElementById("tablitaID").style.display = "table";
}

// Eventlistener, escucha a eventos y resonde con un tipo de acción + función
const select = document.getElementById("cliente"); //ID del select
const table = document.getElementById("tablitaID"); //ID de la tabla

//Uso una función de flecha anónima
select.addEventListener('change',() => {
    if (select.value === 'op3'){
        table.style.display = "table";
    }
    else{
        table.style.display = "none";
    }
})
