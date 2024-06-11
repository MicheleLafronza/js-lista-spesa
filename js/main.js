// creo array lista della spesa
const listaSpesa = ["pasta", "latte", "uova", "zucchero", "sale", "farina", "tonno", "acqua", "birra", "pane", "zucchine"];
// console.log(listaSpesa);

// creo costante ul presa dall'html
const listaUl = document.getElementById("lista");
// console.log(listaUl);

// setto la variabile da utilizzare nel ciclo
let t = 0;

// inizializzo il ciclo per stampare la lista
while (t < listaSpesa.length) {
    
    // creo elemento li
    let listItem = document.createElement("li");

    // inserisco l'elemento li nel ul
    listaUl.append(listItem);

    // aggiungo il contenuto (ovvero l'elemento della lista) ad li
    listItem.innerHTML=(listaSpesa[t]);

    // incremento il valore di t (condizione per non far ripetere il ciclo finita la lista)
    t++;

}

// esercizio completato